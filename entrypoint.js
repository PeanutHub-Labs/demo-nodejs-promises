var chalk = require('chalk');

console.log('main thread');

var fnc1 = function () {
  return new Promise((resolve, reject) => {
    console.log('wait for 5 seconds');
    setTimeout(() => {
      resolve('ok');
    }, 5000);
  });
};

var fnc2 = function () {
  return new Promise((resolve, reject) => {
    console.log('wait for 7 seconds');
    setTimeout(() => {
      resolve('ok');
    }, 7000);
  });
};


Promise.all([
  fnc1(),
  fnc2()
]).then((status) => {
  console.log(`proceso finalizado ${status}`);
  allOk = true;
}, (err) => {
  console.error(err);
  console.log('oops ha ocurrido un problema');
})

var allOk = false;
var count = 0;
setInterval(() => {
  console.log(count)
  count++;
  if(allOk){
    process.exit();
  }
}, 1000);