import React, { useState } from "react";
import {
  Button,
  Container,
  FlexRow,
} from "../../../components/CommonComponents";
import { DialogBox, Modal } from "../../../components/Modal";

import Input from "../../../components/input";
import Radio from "../../../components/radio";

export default function AddEditMemberDialog({
  isEdit = false,
  handleClose,
  show,
  data,
}) {
  const [nic, setNIC] = useState(isEdit && data && data.nic ? data.nic : "");
  const [firstName, setFirstName] = useState(
    isEdit && data && data.firstName ? data.firstName : ""
  );
  const [lastName, setLastName] = useState(
    isEdit && data && data.lastName ? data.lastName : ""
  );
  const [contactNumber, setContactNum] = useState(
    isEdit && data && data.contactNumber ? data.contactNumber : ""
  );
  const [address, setAddress] = useState(
    isEdit && data && data.address ? data.address : ""
  );
  const [userType, setUserType] = useState(
    isEdit && data && data.userType ? data.userType : ""
  );

  const clearInputs = () => {
    setNIC("");
    setFirstName("");
    setLastName("");
    setContactNum("");
    setAddress("");
    setUserType("");
  };

  const sendDone = () => {
    if (
      nic !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      contactNumber !== "" &&
      address !== "" &&
      userType !== ""
    ) {
      const data = {
        nic,
        firstName,
        lastName,
        contactNumber,
        address,
        userType,
      };
      clearInputs();
      handleClose(true, data);
    } else if (nic === "") {
      window.alert(`Please enter the NIC to ${isEdit ? "edit" : "add"}.`);
    } else if (firstName === "") {
      window.alert(
        `Please enter the First Name to ${isEdit ? "edit" : "add"}.`
      );
    } else if (lastName === "") {
      window.alert(`Please enter the Last Name to ${isEdit ? "edit" : "add"}.`);
    } else if (contactNumber === "") {
      window.alert(
        `Please enter the Contact Number to ${isEdit ? "edit" : "add"}.`
      );
    } else if (address === "") {
      window.alert(`Please enter the Address to ${isEdit ? "edit" : "add"}.`);
    } else if (userType === "") {
      window.alert(
        `Please select the User Type to ${isEdit ? "edit" : "add"}.`
      );
    }
  };

  const sendCancel = () => {
    !isEdit && clearInputs();
    handleClose(false, null);
  };

  return (
    <Modal show={show}>
      <DialogBox>
        <h2>{`${isEdit ? "Edit" : "Add"} Member`}</h2>
        <p>Enter the below details of the member</p>
        <Container alignItems="center" disableFullWidth paddingAmount="0.2em">
          <Input
            paddingMemberInput="0.3em"
            label="NIC"
            value={nic}
            onChange={(e) => setNIC(e.target.value)}
            type="text"
            id="nic"
            name="nic"
            required
            minLength="1"
          />
          <Input
            paddingMemberInput="0.3em"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="firstName"
            required
            minLength="1"
          />
          <Input
            paddingMemberInput="0.3em"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lastName"
            name="lastName"
            required
            minLength="1"
          />
          <Input
            paddingMemberInput="0.3em"
            label="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNum(e.target.value)}
            type="text"
            id="contactNumber"
            name="contactNumber"
            required
            minLength="1"
          />
          <Input
            paddingMemberInput="0.3em"
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="textarea"
            id="address"
            name="address"
            required
            minLength="1"
          />

          <FlexRow>
            <Radio
              label="University"
              value="University"
              onChange={(e) => setUserType(e.target.value)}
              type="radio"
              id="university"
              name="userType"
              required
              checked={`${userType === "University" ? "checked" : ""}`}
            />
            <Radio
              label="School"
              value="School"
              onChange={(e) => setUserType(e.target.value)}
              type="radio"
              id="school"
              name="userType"
              checked={`${userType === "School" ? "checked" : ""}`}
            />
            <Radio
              label="Employed"
              value="Employed"
              onChange={(e) => setUserType(e.target.value)}
              type="radio"
              id="employed"
              name="userType"
              checked={`${userType === "Employed" ? "checked" : ""}`}
            />
          </FlexRow>
        </Container>
        <FlexRow>
          <Button onClick={sendDone}>Done</Button>
          <Button onClick={sendCancel} color="secondary">
            Cancel
          </Button>
        </FlexRow>
      </DialogBox>
    </Modal>
  );
}
