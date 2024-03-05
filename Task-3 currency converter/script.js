function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    
    // Define exchange rates (base currency is USD)
    const exchangeRates = {
      'USD': 1,
      'EUR': 0.88,
      'GBP': 0.77,
      'JPY': 109.35,
      'INR': 73.25  // Approximate exchange rate as of writing
    };
    
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
      alert('Invalid currency selection.');
      return;
    }
    
    const rateFrom = exchangeRates[fromCurrency];
    const rateTo = exchangeRates[toCurrency];
    const result = (amount / rateFrom) * rateTo;
  
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
  }
  