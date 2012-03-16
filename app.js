hello(); // ← use before declaration

var bar; // ← unused variable

function hello() {
  x = 1; // ← undeclared variable
  return true // ← missing semi-colon
}

var foo = function () {
} // ← missing semi-colon

hello();


console.log("end of script");
