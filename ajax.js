function myAjax(params = {}) {
  params.type = (params.type || 'GET').toUpperCase();

  const xhr = null;
  // 实例化 XMLHttpRequest 对象
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  // 链接 和 数据传输
  if (params.type === 'GET') {
    // 参数：请求类型 GET、请求地址（get 传输数据添加在地址后面）、是否异步（默认为 true）
    params.data = formatParams(params.data);
    xhr.open(params.type, `${params.url}?${params.data}`, true )
    xhr.send(null)
  } else {
    xhr.open(params.type, params.url)
    // post 请求必须设置提交的数据类型，复杂的数据结构可以使用 application/json
    xhr.setRequestHeader('Content-Type', 'application/json');
    // post 请求数据在 send 里发送
    xhr.send(params.data);
  }

  // 监听事件，响应成功后的回调
  xhr.onreadyStateChange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = '';
        // 约定返回 json 格式
        response = xhr.responseText;

        // 成功的回调
        params.success && params.success(response);
      }
    } else {
      params.error && params.error(xhr.status)
    }
  }
}

function formatParams(data) {
  const arr  = [];
  for(const key in data) {
    arr.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  }
  return arr.join('&');
}
