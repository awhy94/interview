const urls = [
  'url1', 'url2', 'url3', 'url4'
]

let count = 0;

function request() {
  count++
  urls.shift().then(() => {
    count--
    diaodu()
  })
}

function diaodu() {
  if (urls.length > 0 && count < 3) {
    request();
  }
}

for(let i = 0; i < 3; i++){
  request()
}