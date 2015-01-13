var a = function() {};

console.log("retorno da funcao", a());
console.log("-------");

var a = function() {
  console.log("arguments", arguments);
  console.log("-------");
};

a();
a(1);
a("abc", 1);

var a = function(arg1, arg2) {
  console.log("arg1", arg1);
  console.log("arg2", arg2);
  console.log("arguments", arguments);
  console.log("-------");
};

a();
a(1);
a("abc", 1);