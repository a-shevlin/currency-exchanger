# Currency Exchanger (Week 6 Project)

#### A page demonstrating Javascript API use to convert currency.

#### By Alex Shevlin

## Technologies Used

* _HTML_
* _CSS/Bootstrap_
* _Javascript/Jquery_
* _Markdown_
* _Node.JS_
* _See **[package.json](/package.json)** for full list of dependencies._
## Description

A user should be able to enter a USD amount and choose which currency to convert to. The currencies are fetched using [ExchangeRate-API](https://www.exchangerate-api.com/) and returned to the user on the webpage. The conversion rate is then displayed with the most recent timestamp for when the API updated that currency.

## Setup/Installation Requirements

* _clone repo to pc_
* _`$ npm install --save-dev`_
* _`$ npm install webpack-dev-server@3.8.0 --save-dev --save-exact`_
* _`$ npm install bootstrap`_
* _`$ npm audit fix --force`_
* _create `.env` and add `API_KEY=yourAPIKey` for currency-exchanger-api._
* _`$ npm run build`_
* _`$ npm run start`_

## Known Bugs

* _If webpack-dev-server@3.8.0 is not installed correctly `$ npm run start` will not open a development server._


## License
[MIT](/LICENSE) 
_Copyright (c) **Alex Shevlin 2022**_
