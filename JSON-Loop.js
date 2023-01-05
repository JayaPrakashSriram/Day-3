//Q1) For the given JSON iterate over all for loops (for, for in, for of, forEach)
var cou = new XMLHttpRequest();
cou.open("GET", "https://restcountries.com/v3.1/all", true);
cou.send();
cou.onload = function () {
  var info = cou.response;
  var op = JSON.parse(info);

  // console.log(op[0]);

  // for loop
  // var favourateCountry = JSON.parse(info);
  // for (var i = 0; i < 1; i++){
  // console.log(favourateCountry[223].name.official)
  // console.log(favourateCountry[223].capital[0])
  // console.log(favourateCountry[223].population)
  // console.log(favourateCountry[223].currencies.CAD.name, favourateCountry[223].currencies.CAD.symbol)
  // }


  // //for of
  // for (var obj of op) {
  // console.log(obj.name.official, obj.area, obj.continents[0]);
  // }

  // //for in
  // for(var index in op){
  // console.log(op[index].flag, op[index].maps.googleMaps)
  // }
  
//   //for each
//   op.forEach (countries)
//   function countries(res){
//   console.log(`country name: ${res.name.common}. is this country is independent? ${res.independent}.`);}

}
