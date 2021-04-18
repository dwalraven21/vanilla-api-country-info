const button = window.getElementById("fetchCountryButton")
const countryName = window.getElementById("countryName")
const countryText = window.getElementById("countryText")

myButton.addEventListener('click', fetchData)

const fetchData = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}