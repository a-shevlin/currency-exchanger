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
    $('.returnAmount').text(newAmount);
  } else {
    $('.returnError').text("There was an error finding that currency.");
  }

}

$(document).ready(function() {
  $('#convert').click(function() {
    let amount = $('#amount').val();
    let currencyFrom = $('#currencyFrom option:selected').val();
    let currencyTo = $('#currencyTo option:selected').val();
    ExchangeService.getCurrency(currencyFrom, currencyTo, amount)
      .then(function(response) {
        getElements(response);
      });
  });
});