const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

function createArrayOfArrays(countriesArray) {
  let newArray = countriesArray.map((country) => {
    let firstThreeLetter = country.split("").slice(0, 3).join("");

    let countryNamelength = country.split("").length;

    return [country, firstThreeLetter, countryNamelength];
  });
  return newArray;
}

console.log(createArrayOfArrays(countries));
