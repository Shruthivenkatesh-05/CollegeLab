var message ="This is message  from global";
console.log("Global : message "+ message);

var FunctionA= function() {
    var message ="This is message inside FunctionA ";
    console.log("inside a : message "+ message);
}
function FunctionB() {
console.log("inside b : message "+ message);
}
