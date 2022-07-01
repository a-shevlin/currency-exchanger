import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/currency-exchanger-api';

// function clearFields() {

// }

function getElements(response) {
  let newAmount =  response.conversion_result;
  console.log(newAmount);
}

$(document).ready(function() {
  let amount = 1;
  let currency = 'SEK';
  ExchangeService.getCurrency(currency, amount)
    .then(function(response) {
      getElements(response);
    });
});