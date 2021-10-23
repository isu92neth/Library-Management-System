let members = [
  {
    id: "1",
    nic: "977685553V",
    firstName: "Isurika",
    lastName: "Adikari",
    contactNumber: "077-9887895",
    address: "No. 45/23, Malwatte Road, Kandy",
    userType: "University",
  },
  {
    id: "2",
    nic: "955685553V",
    firstName: "Nethmini",
    lastName: "Maheeka",
    contactNumber: "077-2335648",
    address: "No. 55/22, 1st Lane, Watapuluwa, Colombo",
    userType: "School",
  },
  {
    id: "3",
    nic: "957585553V",
    firstName: "Nimali",
    lastName: "Herath",
    contactNumber: "077-2335668",
    address: "No. 33/87, 2nd Lane, Manikhinne, Kandy",
    userType: "Employed",
  },
];

export const getMembers = () => members;

export const getMember = (id) => {
  const member = members.find((member) => member.id === id);
  return member;
};

export const deleteMember = (id) => {
  const index = members.findIndex((member) => member.id === id);
  members.splice(index, 1);

  return id;
};

export const addMember = (data) => {
  const { nic, firstName, lastName, contactNumber, address, userType } = data;

  const member = {
    id: Math.random().toString(16).slice(2),
    nic,
    firstName,
    lastName,
    contactNumber,
    address,
    userType,
  };
  members.push(member);

  return member;
};

export const editMember = (id, data) => {
  const { nic, firstName, lastName, contactNumber, address, userType } = data;

  const memberIndex = members.findIndex((member) => member.id === id);
  members[memberIndex] = {
    ...members[memberIndex],
    nic,
    firstName,
    lastName,
    contactNumber,
    address,
    userType,
  };

  return members[memberIndex];
};
