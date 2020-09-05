/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options) => {
  const xhr = new XMLHttpRequest();
  let formData = new FormData();

  xhr.responseType = "json";
  xhr.withCredentials = true;

  if (options.method === "GET") {
    options.url = `${options.url}?`;
    for (let key in options.data) {
      options.url += `${key}=${options.data[key]}&`;
    }
    options.url = options.url.slice(0, -1);
  } else {
    for (let key in options.data) {
      formData.append(key, options.data[key]);
    }
  }

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      options.callback(null, xhr.response);
    } else if (xhr.readyState === xhr.DONE && xhr.status !== 200) {
      const err = new Error("Request Error");
      options.callback(err, null);
    }
  });

  try {
    xhr.open(options.method, options.url);
    xhr.send(formData);
  } catch (err) {
    options.callback(err);
  }
  return xhr;
};

