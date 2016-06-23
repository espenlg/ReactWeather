//http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=010971384bb09def11806acad11a2694
/*
function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Porsgrunn').then(function(temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err)
});
*/
// Challenge area

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Not two numbers');
    }
  });
}

addPromise(2,3).then(function (sum) {
  console.log('success',sum)
}, function (err) {
  console.log('error',err)
});

addPromise('he',3).then(function (sum) {
  console.log('success',sum)
}, function (err) {
  console.log('error',err)
});
