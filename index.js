var Combinatorics = require('js-combinatorics');
//var cmb, a;
//cmb = Combinatorics.power(['a','b','c']);
//console.log(cmb);
//cmb.forEach(function(a){ console.log(a) });

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
//console.log(createLengthCombination(4));
//console.log(createLengthCombination(5));
//console.log(createLengthCombination(6));
//console.log(createLengthCombination(8));
//console.log("--");
//console.log(createLengthCombination(2));
//console.log("--");
//console.log(createLengthCombination(3));
//console.log("--");
//console.log(createLengthCombination(4));

var lcmbs = createLengthCombination(4);
//console.log(lcmbs);
//console.log(lcmbs[0]);
//console.log(tasks.slice(0, lcmbs[0][0]));
//console.log(lcmbs[0].map(function(num) {
//  return tasks.slice(0, num);
//}));
//console.log(lcmbs.map(function(lcmb) {
//  return lcmb.map(function(num) {
//    var cmb = Combinatorics.combination(tasks, num);
//    var cmbs = [];
//    while(a = cmb.next()) {
//      cmbs.push(a);
//    }
//    return [lcmb, cmbs];
//  });
//}));

var lcmbTasks = lcmbs.map(function(lcmb) {
  var tmpTasks = [].concat(tasks);
  console.log(lcmb);
//  return lcmb.map(function(num) {
//    var cmb = Combinatorics.combination(tmpTasks, num);
//    var cmbs = [];
//    while(a = cmb.next()) {
//      cmbs.push(a);
//    }
//    tmpTasks = tmpTasks.filter(function(item) {
//      return cmbs.indexOf(item) === -1;
//    });
//    return [lcmb, cmbs];
//  });
});

//lcmbTasks.forEach(function(lcmbTask) {
//  console.log("-- lcmb --")
//  console.log(lcmbTask[0]);
//  console.log("-- cmbs --")
//  console.log(lcmbTask[1]);
//});

//var taskCmbs = lcmbs.map(function(lcmb) {
//  var subTasks = lcmb.map(function(num) {
//    return tasks.slice(0, num);
//  });
//  return [subTasks, lcmbs];
//});
//
//console.log(taskCmbs);

