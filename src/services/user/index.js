import makeCallApi from "./../callApi";

export function createUser (invitationId, data) {
    return makeCallApi({
      method: 'POST',
      url: `/users/${invitationId}`,
      data
    });
}

export function updateUser (userId, data) {
  return makeCallApi({
    method: 'PUT',
    url: `/users/${userId}`,
    data
  });
}

export function createRsvp(userId, data) {
  return makeCallApi({
    method: 'POST',
    url: `/users/${userId}/rsvp`,
    data
  });
}