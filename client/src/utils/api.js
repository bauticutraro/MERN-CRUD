import 'whatwg-fetch';

const parseJSON = response => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = {
    message: `Bad response from server at ${response.url} => ${response.status}, ${response.statusText}`,
    url: response.url,
    status: response.status,
    statusText: response.statusText
  };

  return new Promise((resolve, reject) => {
    response
      .json()
      .then(err => {
        error.message = err.error;
        reject(error);
      })
      .catch(() => {
        reject(error);
      });
  });
};

export const defaultHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.token}`
  };

  if (!localStorage.token) delete headers.token_auth;

  return headers;
};

export default (urlRequest, method = 'GET', body) => {
  const options = {
    method: method,
    headers: defaultHeaders(),
    body: JSON.stringify(body)
  };

  if (method === 'GET') {
    delete options.body;
  }

  return fetch(urlRequest, options)
    .then(checkStatus)
    .then(parseJSON);
};

export const requestData = (urlRequest, method = 'POST', body) => {
  let formData = new FormData();

  for (let name in body) {
    if (
      Array.isArray(body[name]) &&
      name !== 'source' &&
      name !== 'prevCompanies'
    ) {
      formData.append(name, JSON.stringify(body[name]));
    } else {
      formData.append(name, body[name]);
    }
  }

  const options = {
    method,
    headers: { Authorization: `Bearer ${localStorage.token}` },
    body: formData
  };

  return fetch(urlRequest, options)
    .then(checkStatus)
    .then(parseJSON);
};
