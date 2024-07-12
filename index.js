// TASK 6
// Get all the countries from Asia continent /region using Filter method

// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries by Asia region
    const asianCountries = data.filter(country => country.region === 'Asia');
    
    // Log the names of Asian countries
    console.log(asianCountries.map(country => country.name.common));
  })
  .catch(error => console.error('Error:', error));

//   Get all the countries with a population of less than 2 lakhs using Filter method

// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries by population less than 200,000
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    
    // Log the names of countries with population less than 200,000
    console.log(smallPopulationCountries.map(country => country.name.common));
  })
  .catch(error => console.error('Error:', error));

  // Print the following details name, capital, flag, using forEach method

  // Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  // Iterate over each country and print the details
  data.forEach(country => {
    console.log(`Name: ${country.name.common}`);
    console.log(`Capital: ${country.capital ? country.capital[0] : 'N/A'}`);
    console.log(`Flag: ${country.flags.svg}`);
    console.log('----------------------');
  });
})
.catch(error => console.error('Error:', error));

// Print the total population of countries using reduce method

// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Calculate the total population using reduce method
    const totalPopulation = data.reduce((sum, country) => sum + country.population, 0);
    
    // Print the total population
    console.log(`Total Population: ${totalPopulation}`);
  })
  .catch(error => console.error('Error:', error));

  // Print the country that uses US dollars as currency.

  // Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  // Filter countries by currency
  const usdCountries = data.filter(country => 
    country.currencies && country.currencies.USD
  );
  
  // Print the names of countries using US dollars
  usdCountries.forEach(country => {
    console.log(`Name: ${country.name.common}`);
    console.log(`Currency: US Dollar`);
    console.log('----------------------');
  });
})
.catch(error => console.error('Error:', error));


