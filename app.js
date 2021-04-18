const button = document.getElementById("fetchCountryButton")
const countryName = document.getElementById("countryName")
const countryText = document.getElementById("countryText")
let data = {}

const fetchData = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      data = res
    })
    .catch((err) => {
      console.log(err)
      alert('API Could not be reached at this time')
    })
}

const generateNewCountry = () => {
  if (!data) {
    fetchData()
  }
  // generate a random number between 0 and 249
  // create the variables
  // name = data.name
  // region = data.region
  // population = data.population
  // capital = data.capital
  // language = data.languages
  //(this one requires us to loop through the array of languages and convert to a string.
  // we might want to change the text slightly if there is more than one language.)
  //
  // Set countryName to {name}
  // Set countryText to `This country in the {region} region has a population size of {population}. The language(s) spoken here is/are {language}. The nation's capital is {capital}.`
}

fetchData()
button.addEventListener("click", generateNewCountry)