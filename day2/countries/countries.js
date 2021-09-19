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
    let firstThreeLetter = country.substr(0, 3).toUpperCase();

    let countryNamelength = country.length;

    return [country, firstThreeLetter, countryNamelength];
  });
  return newArray;
}

console.log(createArrayOfArrays(countries));
