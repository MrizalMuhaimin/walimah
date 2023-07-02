import makeCallApi from "./../callApi";

export function creteComment(userId, data) {
  return makeCallApi({
    method: "POST",
    url: `/users/${userId}/comment`,
    data,
  });
}

export function updateComment(commentId, data) {
  return makeCallApi({
    method: "PUT",
    url: `/users/${commentId}/comment`,
    data,
  });
}

export function comments(userId, params) {
  return makeCallApi({
    method: "GET",
    url: `/users/${userId}/comments`,
    params,
  });
}

export function myComment(userId) {
  return makeCallApi({
    method: "GET",
    url: `/users/${userId}/comments/specific`,
  });
}

export function likeComment(userId, data) {
  return makeCallApi({
    method: "PUT",
    url: `/users/${userId}/comment/like`,
    data,
  });
}
