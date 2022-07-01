//business logic

export default class ExchangeService {
  static getCurrency() {
    let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    return fetch(url)
      .then(function(response) {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}