let count = 0;

function runCounter() {
  count = count + 1;
  console.log(count);
}

setTimeout(sayHi, 5000);
setInterval(runCounter, 1000);
