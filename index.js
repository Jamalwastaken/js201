/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';
//2
function id() {
  return 'up2043076';
};
//3
function fn() {
  return 'Adrian';
};
//4
function sn() {
  return 'Ehiede';
}
//5
function add(a, b) {
  return a + b;
}
//6
function subtract(a, b) {
  return a - b;
}
//7
function checkObject(obj) {
  obj.checked = true;
}
//8
function checkObjectInside(obj) {
  if (obj.data != null) {
    obj.data.checked = true;
  }
}
//9
function arraySet(arr, i, n) {

  if (i < arr.length && Number.isInteger(i)) {
    arr[i] = n;
  }
  return arr
}
//10
function addAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum
}
//11
function larger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
//12
function largest(arr) {
  return arr.length > 0 ? Math.max(...arr) : null;
}
//13
function compare(a, b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  };
}
//14
function addToAll(arr, n) {

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + n;
  }
  return arr
}
//15
let remembered
function rememberThis(keepsake) {
  remembered = keepsake;
  
}
//16
function nArray(n) {
  let arr = []
  if (n == 1) {
    arr = [n];
    return arr;
  } else {
    for (let i = 0; i < n; i++) {
      arr[i] = i + 1
    }
  }
  return arr
}
//17
function addAllOpt(arr) {
  if (arr != null) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum
  } else {
    return 0;
  }
}
//18
function divisors(arr, div) {
  for (let i = 0; i < arr.length; i++) {
    if (i % div === 0) {
      arr[i];
    } else {
      return 0;
    }
  }
  return arr

}
function multiples(n, m) {

}
