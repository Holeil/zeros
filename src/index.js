module.exports = function getZerosCount(number) {
  var count=0;
  function recurse(num) {
    if(num%5 == 0) {
      count++;
      return recurse(num/5);
    }
    else return 0;
  }
  while(number > 0) {
    recurse(number);
    number--;
  }
  return count;
}
