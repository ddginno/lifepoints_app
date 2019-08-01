export function getFromLocal(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function setToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}
export function getNews() {
  return fetch("/api/news").then(res => res.json());
}

export function getShop() {
  return fetch("/api/Shop").then(res => res.json());
}

export function postNews(data) {
  return fetchNews("POST", data);
}
export function postShop(data) {
  return fetchShop("POST", data);
}

export function patchCard(data, id) {
  return fetchNews("PATCH", data, id);
}

function fetchNews(method, data, id = "") {
  return fetch("/api/News/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
function fetchShop(method, data, id = "") {
  return fetch("/api/Shop/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
