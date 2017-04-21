function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});
function age(a, b) {
  return b - a;
}
function myMom(myPerson, end) {
      var madre = myPerson.mother;
      if (byName.hasOwnProperty(madre)) {
      var momAge = age(byName[madre].born, end);
      return momAge;
   }
}
var arr = [];
for (var key in byName) {
  if (byName.hasOwnProperty(key)) {
    var P = byName[key], birth = P.born;
    if (myMom(P, birth)) {
      arr.push(myMom(P, birth));
    }
  }
}
console.log(average(arr));

//ancestry file can be found here: http://eloquentjavascript.net/code/ancestry.js