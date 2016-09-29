var wdi_38_names = ["Aaron", "Andrew", "Antonio", "Darin", "Emily", "Gaye", "Josh", "Kevin", "Kylan", "Kevin", "Matt", "Michael", "Michelle", "Paul", "Viviana"];

//for loop
// for (var i = 0; i < wdi_38_names.length; i++) {
//   console.log(wdi_38_names[i]);
// }

//My version
// var eachName = function(){
//   var random = Math.floor((Math.random(wdi_38_names)*wdi_38_names.length));
//   console.log(wdi_38_names[random]);
// }

//Instructor version
function eachName(){
  var random = Math.random() * wdi_38_names.length
  var index = Math.floor(random)
  console.log(wdi_38_names[index])
}

console.log("Random is: ")
eachName();
