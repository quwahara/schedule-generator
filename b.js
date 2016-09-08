

function createSeries(start, end) {
  var series = [];
  for(var i = start; i <= end; ++i) {
    series.push(i);
  }
  return series;
}


function dec(array) {
  var d = 0;
  for(var i = 0; i < array.length; ++i) {
    d += array[i] * Math.pow(10, (array.length - i - 1));
  }
  return d;
}

function eqAr(a, b) {
  if(a.length !== b.length) {
    return false;
  }
  for(var i in a) {
    if(a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}


function createLengthCombination(length) {
  var series = createSeries(1, length);
//  console.log(series);
  var cmb = [[length]];
  if(length === 1) {
    return cmb;
  }
  for(var i = length - 2; i >= 0; -- i) {
    var sublen = series[i];
    var dlt = length - sublen;
//    if(dlt > sublen) {
//      break;
//    }
    var subcmb = createLengthCombination(sublen);
    var fixsubcmb = subcmb.map(function(item) {
      item.push(dlt);
      return item;
    })
    cmb = cmb.concat(fixsubcmb);
  }
  cmb.forEach(function(item) {
    item.sort(function(a, b) {
      return b - a;
    });
  });
  cmb.sort(function (a, b) {
    if(a.length === b.length) {
      return dec(b) - dec(a);
    }
    else {
      return a.length - b.length;
    }
  })
  
  var unique = [];
  unique.push(cmb[0]);
  for(var i = 1; i < cmb.length; ++i) {
    if(!eqAr(unique[unique.length - 1], cmb[i])) {
      unique.push(cmb[i]);
    }
  }
  return unique;
}

var tasks = ["A", "B", "C", "D", "E", "F", "G", "H"];

//console.log(createLengthCombination(1));
//console.log(createLengthCombination(2));
//console.log(createLengthCombination(3));
console.log(createLengthCombination(4));
//console.log(createLengthCombination(5));
//console.log(createLengthCombination(6));
//console.log(createLengthCombination(8));
//console.log("--");
//console.log(createLengthCombination(2));
//console.log("--");
//console.log(createLengthCombination(3));
//console.log("--");
//console.log(createLengthCombination(4));


//var lcmb3 = createLengthCombination(3);


//var lcmb = [2, 1];
//
//
//function yyy(count, series) {
//  if(count === series.length) {
//    return [[].concat(series)];
//  }
//  var cmb = series.map(function(item) {
//    return [item];
//  });
//  if(count === 1) {
//    return cmb;
//  }
//  return cmb.map(function(citem) {
//    var fseries = series.filter(function(sitem) {
//      return sitem !== citem[0];
//    })
//    return yyy(count - 1, fseries).map(function(item) {
//      return citem.concat(item);
//    })
//  });
//}
//
//console.log(yyy(1, [1,2,3]));
//console.log(yyy(2, [1,2,3]));
//console.log(yyy(3, [1,2,3]));
//console.log(yyy(3, [1,2,3, 4]));

//
//
//
//function xxxxx(lcmb) {
//  var length = lcmb.reduce(function(pre, cur) {
//    return pre + cur;
//  }, 0);
//  var series = createSeries(1, length);
//  console.log(series);
//  var cmbs = [];
//  for(var i = 0; i < lcmb.length; ++i) {
//    var cmb = [];
//    for(var j = 0; j < lcmb[i]; ++j) {
//      
//      
//    }
//    
//    
//  }
//}
//
//
//console.log(xxxxx(lcmb));

