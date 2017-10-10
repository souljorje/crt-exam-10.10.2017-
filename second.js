function reduce (arr, func, acc = 0) {

  let res;

  for (let i = 0; i < arr.length; i++) {

    let a = arr[i-1] || acc;
    let b = arr[i];

    res = func.call(null, a, b);
    arr[i] = res;
  }

  return res;
}

reduce([1,2,3,4], (a, b) => a + b, 15);