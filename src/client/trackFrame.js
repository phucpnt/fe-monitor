// todo
function request(url, callback, data) {
  try {
    const x = new(this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
    x.open(data ? 'POST' : 'GET', url, 1);
    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };
    x.send(data);
  } catch (e) {
    window.console && console.log(e);
  }
};

function makeIframe(){
  const iframe = document.createElement('iframe');
  iframe.height = 1;
  iframe.width = 1;
}

function makeLog(next){

  return (level, message, ...args) => {
    const result = next(level, message, ...args);
    result.onError(request)
  };

}
