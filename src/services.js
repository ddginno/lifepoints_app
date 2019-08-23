import axios from "axios";
export function getFromLocal(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function setToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getNews() {
  return fetch("/api/news").then(res => res.json());
}

export function getNewsById(id) {
  return fetch(`/api/news/get-by-id/${id}`).then(res => res.json());
}

export function postNews(data) {
  return fetchNews("POST", data);
}

export function patchNews(data) {
  return axios.patch(`/api/news/${data.id}`, data);
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
export function getUserById(id) {
  return fetch(`/api/user/get-by-id/${id}`).then(res => res.json());
}

// patchUser({userPoints: user.userPoints + news.points })
export function patchUser(data, id) {
  return fetchUser("PATCH", data, id);
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
export function getShopNewsById(id) {
  return fetch(`/api/shop/get-by-id/${id}`).then(res => res.json());
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
