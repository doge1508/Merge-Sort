/**
 * MERGE-SORT
 * mergeSort is not a sort in place algorithm
 * it needs to create a new array
 * 
 * a = an array
 * p = starting index to sort 
 * r = ending index to sort
 * q will be the midpoint
 * 
 * mergeSort(a, p, r) 
 *  if p < r
 *    then
 *      q <- floor((p + r) / 2)
 *      mergeSort(a, p, q)
 *      mergeSort(a, q + 1, r)
 *      a <- merge(a, p, q, r)
 * 
 * merge(a, p, q, r)
 *  u <- p
 *  v <- q + 1
 *  result <- new array
 *  while u <= q and v <= r
 *    if a[u] < a[v]
 *      push a[u] onto results
 *      u++
 *    else
 *      push a[v] onto results
 *      v++
 *  while u <= q
 *    push a[u] onto results
 *    u++
 *  while v <= r
 *    push a[v] onto results
 *    v++
 *  return results   
 */

window.onload = init;

function init() {
  //let arrayA = [1, 5, 8, 10];
  //let arrayB = [3, 5, 9, 10, 15, 22];
  //let arrayC = arrayA.concat(arrayB);
  let arrayC = [6, 2, 38, 2, 10, 1, 32, 5, 1, 2, 14, 5]
  print(arrayC);
  let arrayD = mergeSort(arrayC, 0, arrayC.length - 1);
  print(arrayD);
  // let arrayD = merge(arrayC, 0, arrayA.length - 1, arrayC.length - 1);
  // print(arrayD);
}


function merge(a, p, q, r) {
  let u = p;
  let v = q + 1;
  let results = [];
  while (u <= q && v <= r) {
    if (a[u] < a[v]) {
      results.push(a[u]);
      u++;
    } else {
      results.push(a[v]);
      v++
    }
  }
  while (u <= q) {
    results.push(a[u]);
    u++;
  }
  while (v <= r) {
    results.push(a[v]);
    v++;
  }
  return results;
}

function mergeSort(a, p, r) {
  /*mergeSort(a, p, r) 
 *  if p < r
 *    then
 *      q <- floor((p + r) / 2)
 *      mergeSort(a, p, q)
 *      mergeSort(a, q + 1, r)
 *      a <- merge(a, p, q, r)
 */
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    let left = mergeSort(a, p, q);
    let right = mergeSort(a, q + 1, r);
    return merge(left.concat(right), p, q, r);
  }
  return a;
}

function print(ra) {
  let div = document.createElement("div");
  for (let i = 0; i < ra.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = ra[i];
    div.appendChild(span);
  }
  document.body.appendChild(div);
}