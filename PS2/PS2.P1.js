function* fibs () {
  let [val1, val2, result] = [0, 1, 0];
  //handle special case 0
  if (!0){val2=1;yield 0;}
  while (true) {
    result = val1+val2;
    val1 = val2;
    val2 = result;
    yield result
  }
}

function* even_fibs () {
  let fib= fibs();
  while (true) {
    let i=fib.next().value
    if (i%2===0){
      yield(i);
    }
  }
}

myFibs = even_fibs()
let count = 5;
while (count --> 0) {
  console.log(myFibs.next().value);
}
