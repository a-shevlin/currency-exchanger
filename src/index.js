import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/currency-exchanger-api';

// function clearFields() {

// }

function getElements(response) {
  if(response) {
    let newAmount =  response.conversion_result;
    let excFromCurrency = response.base_code;
    let excToRate = response.conversion_rate;
    let excToCurrency = response.target_code;
    let date = Date(response.time_last_update_unix * 1000);
    $('#amountTo').val(newAmount);
    $('#exchangeFromCurrency').text(excFromCurrency);
    $('#exchangeToAmount').text(excToRate);
    $('#exchangeToCurrency').text(excToCurrency);
    $('#time').text(date);
  } else {
    $('.returnError').text("There was an error finding that currency.");
  }

}

$(document).ready(function() {
  $('.currencyChange').change(function() {

    let amount = $('#amount').val();
    let currencyFrom = $('#currencyFrom option:selected').val();
    let currencyTo = $('#currencyTo option:selected').val();
    if (amount > 0) {
      ExchangeService.getCurrency(currencyFrom, currencyTo, amount)
        .then(function(response) {
          getElements(response);
          $('.rate').show();
          $('#time').show();
        });
    } else {
      $('#amountTo').val('');
    }
  });
});