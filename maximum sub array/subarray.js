var subarray = function(array, n){
  var max_sum = 0;
  for(var start = 0; start < n; start++){
    for(var end = start; end < n; end++){
      var sum = 0;
      for(var i = start; i<= end; i++){
        sum += array[i];
        debugger;
      }
      max_sum = Math.max(max_sum, sum);
      console.log(max_sum);
      debugger;
    }
  }
  return max_sum;
}

var test = [-3, 2, 1, -4, 5, 2, -1, 3, -1];
var ans = subarray(test, test.length);
console.log(ans);
