export function getFromLocal(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function setToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getNews() {
  return fetch("/api/news").then(res => res.json());
}

export function postNews(data) {
  return fetchNews("POST", data);
}

function fetchNews(method, data, id = "") {
  return fetch("/api/news/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function getUser() {
  return fetch("/api/user").then(res => res.json());
}

export function patchUser(data) {
  return fetchUser("PATCH", data);
}

export function postUser(data) {
  return fetchUser("POST", data);
}

function fetchUser(method, data, id = "") {
  return fetch("/api/user/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function getShop() {
  return fetch("/api/shop").then(res => res.json());
}

export function postShop(data) {
  return fetchShop("POST", data);
}

function fetchShop(method, data, id = "") {
  return fetch("/api/shop/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function patchCard(data, id) {
  return fetchNews("PATCH", data, id);
}
