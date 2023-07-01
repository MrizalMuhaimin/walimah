import makeCallApi from "./../callApi";

export function dateReminder(userId) {
  return makeCallApi({
    method: "POST",
    url: `/users/${userId}/reminder/date`,
  });
}
