import React, { useState } from "react";
import { Button, FlexRow, Select } from "../../../components/CommonComponents";
import { DialogBox, Modal } from "../../../components/Modal";

export default function LendDialog({ handleClose, show }) {
  const [member, setMember] = useState("");

  const sendConfirm = () => handleClose(true, member);
  const sendCancel = () => handleClose(false, null);

  return (
    <Modal show={show}>
      <DialogBox>
        <h2>Lend Book</h2>
        <p>Select Member to continue and confirm</p>
        <Select
          id="member-select"
          onChange={(e) => setMember(e.target.value)}
          value={member}
        >
          <option value="">--Please select a member--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="fish">Fish</option>
        </Select>
        <FlexRow>
          <Button onClick={sendConfirm}>Confirm</Button>
          <Button onClick={sendCancel} color="Secondary">
            Cancel
          </Button>
        </FlexRow>
      </DialogBox>
    </Modal>
  );
}
