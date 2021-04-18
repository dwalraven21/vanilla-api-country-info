const button = document.getElementById("fetchCountryButton")
const countryName = document.getElementById("countryName")
const countryText = document.getElementById("countryText")

const fetchData = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err)
      alert('API Could not be reached at this time')
    })
}

button.addEventListener("click", fetchData)