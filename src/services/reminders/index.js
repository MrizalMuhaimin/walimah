import makeCallApi from "./../callApi";

export function dateReminder(userId) {
  return makeCallApi({
    method: "POST",
    url: `/users/${userId}/reminder/date`,
  });
}

export function videoReminder(userId) {
  return makeCallApi({
    method: "POST",
    url: `/users/${userId}/reminder/video`,
  });
}
