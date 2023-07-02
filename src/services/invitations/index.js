import makeCallApi from "./../callApi";

export function getInvitation (params) {
    return makeCallApi({
      method: 'GET',
      url: `/invitations/${params}`,
    });
}

export function cekInvitation (path) {
  return makeCallApi({
    method: 'GET',
    url: `/invitations/group/${path}`,
  });
}