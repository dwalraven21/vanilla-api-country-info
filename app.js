const button = document.getElementById("fetchCountryButton")
const countryName = document.getElementById("countryName")
const countryText = document.getElementById("countryText")
const countryFlag = document.getElementById("countryFlag")
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
  // use the country at that index
  const country = data[Math.floor(Math.random() * 250)]
  // create the variables
  const name = country.name
  const region = country.region
  const population = country.population
  const capital = country.capital
  const flag = country.flag

  //(this one requires us to loop through the array of languages and convert to a string.
  // we might want to change the text slightly if there is more than one language.)
  let languages = country.languages[0].name
  const numOfLanguages = country.languages.length
  if (numOfLanguages !== 1) {
    console.log(country.languages)
    country.languages.forEach((newLanguage, index) => {
      console.log('index: ' + index)
      if (index !== 0 && index !== (numOfLanguages - 1)) {
        languages = languages + ", " + newLanguage.name
      } else if (index === (numOfLanguages - 1)) {
        languages = languages + " and " + newLanguage.name
      }
    })
  }

 countryName.innerText = name
 countryFlag.src = flag
 countryText.innerHTML = `This country in the <b>${region}</b> region has a population size of <b>${population}</b>. The language${
   numOfLanguages === 1 ? "" : "s"
 } spoken here ${
   numOfLanguages === 1 ? "is" : "are"
 } <b>${languages}</b>. The nation's capital is <b>${capital}</b>.`
}

fetchData()
button.addEventListener("click", generateNewCountry)