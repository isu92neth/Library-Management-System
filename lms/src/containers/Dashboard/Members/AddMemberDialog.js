import React, { useState } from "react";
import {
  Button,
  Container,
  FlexRow,
} from "../../../components/CommonComponents";
import { DialogBox, Modal } from "../../../components/Modal";

import Input from "../../../components/input";

export default function AddMemberDialog({ handleClose, show }) {
  const [nic, setNIC] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNum] = useState("");

  const clearInputs = () => {
    setNIC("");
    setFirstName("");
    setLastName("");
    setContactNum("");
  };

  const sendDone = () => {
    if (
      nic !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      contactNumber !== ""
    ) {
      const data = { nic, firstName, lastName, contactNumber };
      clearInputs();
      handleClose(true, data);
    } else if (nic === "") {
      window.alert("Please enter the NIC");
    } else if (firstName === "") {
      window.alert("Please enter the First Name");
    } else if (lastName === "") {
      window.alert("Please enter the Last Name");
    } else if (contactNumber === "") {
      window.alert("Please enter the Contact Number");
    } else {
      window.alert("Please enter the author of the book to add");
    }
  };

  const sendCancel = () => {
    clearInputs();
    handleClose(false, null);
  };

  return (
    <Modal show={show}>
      <DialogBox>
        <h2>Add Member</h2>
        <p>Enter the below details of the member</p>
        <Container alignItems="center" disableFullWidth>
          <Input
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
            label="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNum(e.target.value)}
            type="text"
            id="contactNumber"
            name="contactNumber"
            required
            minLength="1"
          />
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
