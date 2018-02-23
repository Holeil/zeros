module.exports = function getZerosCount(number) {
  var count=0;
  /*
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
  */
  for(var i = 0; i< 15; i++) {
    var a = number%(Math.pow(5, i+1));
    var b = number - a
    if(b%(Math.pow(5, i+1)) == 0) count+=b/(Math.pow(5, i+1));
  }
  return count;
}
