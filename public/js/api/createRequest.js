/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options, callback) => {
  const xhr = new XMLHttpRequest();
  const formData = new FormData();

  xhr.responseType = "json";
  xhr.withCredentials = true;

  let url = `${options.url}?`;

  for (const [key, value] of Object.entries(options.data)) {
    formData.append(key, value);
    url += `${key}=${value}&`;
  }

  if (options.method === "GET") {
    xhr.open(options.method, url.slice(0, -1));

    try {
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
          callback((err = null), xhr.response);
        }
      };
    } catch (err) {
      callback(err);
    }
  } else {
    xhr.open(options.method, options.url);
    try {
        xhr.send(formData);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == xhr.DONE && xhr.status == 200) {
              callback((err = null), xhr.response);
            }
          };
    } catch (err) {
        callback(err);
    }
  }
  return xhr
};

