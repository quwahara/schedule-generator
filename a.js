/*
2-6-8 4-5-7 1-3

[ [ [ 1, 5, 7 ], [ 3, 4, 6 ], [ 0, 2 ] ],
  [ [ 3611, 3284, 5733 ], [ 1532, 9998, 537 ], [ 9423, 2677 ] ],
  [ 12628, 12067, 12100 ],
  [ 561, 33, 528 ],
  1122 ]
  
[ [ [ 1, 2, 7 ], [ 3, 4, 6 ], [ 0, 5 ] ],
  [ [ 3611, 2677, 5733 ], [ 1532, 9998, 537 ], [ 9423, 3284 ] ],
  [ 12021, 12067, 12707 ],
  [ 46, 640, 686 ],
  1372 ]
  
*/

var hs = [94.23375,
36.1145833333333,
26.77875,
15.3225,
99.9829166666667,
32.84375,
5.37208333333333,
57.3308333333333];

hs = hs.map(function(item) {
  return Math.trunc(item * 100);
});

//var hs = [94.23375,
//36.1145833333333,
//26.77875,
//15.3225,
//99.9829166666667,
//32.84375,
//5.37208333333333,
//57.3308333333333];

console.log(hs.length);

var series = [];
for(var i = 0; i < 8; ++i) {
  series.push(i);
}

function createSeries(start, end) {
  var series = [];
  for(var i = start; i <= end; ++i) {
    series.push(i);
  }
  return series;
}

function createLengthCombination(length) {
  
}


var cmbs = [];
for(var i = 0; i < series.length; ++i) {
  for(var j = i + 1; j < series.length; ++j) {
    for(var k = j + 1; k < series.length; ++k) {
      cmbs.push([i, j, k]);
    }
  }
}

for(var i in cmbs) {
  console.log(cmbs[i]);
}
console.log(cmbs.length);

var ccmbs = [];
for(var i = 0; i < cmbs.length; ++i) {
  for(var j = i + 1; j < cmbs.length; ++j) {
    if(cmbs[j].filter(function(item) {
      return cmbs[i].indexOf(item) >= 0;
    }).length > 0) {
      continue;
    }
    var chosen = cmbs[i].concat(cmbs[j]);
    var rem = series.filter(function(item) {
      return chosen.indexOf(item) == -1;
    });
    ccmbs.push([cmbs[i], cmbs[j], rem]);
  }
}

var ccmbhs = ccmbs.map(function(ccmb) {
  return [ccmb, ccmb.map(function(cmb) {
    return cmb.map(function(idx) {
      return hs[idx];
    });
  })];
});

for(var i in ccmbhs) {
  console.log(ccmbhs[i]);
}
console.log(ccmbhs.length);


var ccmbhgs = ccmbhs.map(function(ccmbh) {
  var sums = ccmbh[1].map(function(cmbh) {
    return cmbh.reduce(function(pre, cur) {
      return pre + cur;
    }, 0.0);
  });
  var abss = [
    Math.abs(sums[0] - sums[1]),
    Math.abs(sums[1] - sums[2]),
    Math.abs(sums[2] - sums[0])
  ];
  var absg = abss[0] + abss[1] + abss[2];
  return [
    ccmbh[0],
    ccmbh[1],
    sums,
    abss,
    absg
  ];
})

for(var i in ccmbhgs) {
  console.log(ccmbhgs[i]);
}
console.log(ccmbhgs.length);

var absgs = ccmbhgs.map(function(item) {
  return item[4];
})

var absgs_sort = absgs.sort(function(a, b) {
  return a - b;
});

console.log(absgs_sort);

