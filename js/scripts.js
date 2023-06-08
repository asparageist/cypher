const userImp = prompt("Tell me your secret!");
const firstLast = capFirstLast(userImp);
const reverse = revFirstLast(firstLast);
const allFun = countLetters(userImp);

function capFirstLast(userImp) {
  return userImp.charAt(0).toUpperCase() + userImp.slice(1, -1) + userImp.charAt(userImp.length - 1).toUpperCase();
}

function revFirstLast(firstLast) {
  const first = firstLast.charAt(0);
  const last = firstLast.charAt(firstLast.length -1);
  const switched = last + first;
  return userImp + switched;
}

function countLetters(userImp) {
  let numLets = parseInt(userImp.length);
  let divided = Math.floor(numLets / 2);
  let middle = userImp.charAt(divided);
  return middle + reverse;
}

window.alert(allFun);