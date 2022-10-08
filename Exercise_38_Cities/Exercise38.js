//****ABDUL WAHEED****//            //****04/10/2022****//

// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.

function describe_cities(city_name, country = "Pakistan") {
  console.log(city_name + " is the capital of " + country);
}
describe_cities("Islamabad");
describe_cities("Tokiyo", "Japan");
describe_cities("New Delhi ", "India");
