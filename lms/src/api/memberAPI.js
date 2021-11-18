import { getRequest, putRequest, deleteRequest, postRequest } from "./util";

const BASE_URL = "/member";

export const getMembers = () => getRequest(`${BASE_URL}`);

export const getMember = (id) => getRequest(`${BASE_URL}/${id}`);

export const deleteMember = (id) => deleteRequest(`${BASE_URL}/${id}`);

export const addMember = (data) => postRequest(`${BASE_URL}`, data);

export const editMember = (id, data) => putRequest(`${BASE_URL}/${id}`, data);

// export const getMembers = () => members;

// export const getMember = (id) => {
//   const member = members.find((member) => member.id === id);
//   return member;
// };

// export const deleteMember = (id) => {
//   const index = members.findIndex((member) => member.id === id);
//   members.splice(index, 1);

//   return id;
// };

// export const addMember = (data) => {
//   const { nic, firstName, lastName, contactNumber, address, userType } = data;

//   const member = {
//     id: Math.random().toString(16).slice(2),
//     nic,
//     firstName,
//     lastName,
//     contactNumber,
//     address,
//     userType,
//   };
//   members.push(member);

//   return member;
// };

// export const editMember = (id, data) => {
//   const { nic, firstName, lastName, contactNumber, address, userType } = data;

//   const memberIndex = members.findIndex((member) => member.id === id);
//   members[memberIndex] = {
//     ...members[memberIndex],
//     nic,
//     firstName,
//     lastName,
//     contactNumber,
//     address,
//     userType,
//   };

//   return members[memberIndex];
// };
