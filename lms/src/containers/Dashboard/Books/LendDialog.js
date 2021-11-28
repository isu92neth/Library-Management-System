import { useDispatch } from "react-redux";

import React, { useState, useEffect } from "react";
import { Button, FlexRow, Select } from "../../../components/CommonComponents";
import { DialogBox, Modal } from "../../../components/Modal";
import Spinner from "../../../components/Spinner";

import { getMembers } from "../../../api/memberAPI";

export default function LendDialog({ handleClose, show }) {
  const [member, setMember] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [members, setMembers] = useState(null);

  const sendConfirm = () => {
    if (member !== "") {
      handleClose(true, member);
    } else {
      window.alert("Please select a member first!");
    }
  };
  const sendCancel = () => handleClose(false, null);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getMembers()
      .then((response) => {
        if (!response.error) {
          setMembers(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Modal show={show}>
      <DialogBox>
        <h2>Lend Book</h2>
        <p>Select Member to continue and confirm</p>
        {!isLoading && members !== null ? (
          <>
            <Select
              id="member-select"
              onChange={(e) => setMember(e.target.value)}
              value={member}
            >
              <option value="">--Please select a Member--</option>
              {members.map((member, index) => (
                <option key={index} value={member.id}>
                  {member.firstName} {member.lastName}
                </option>
              ))}
            </Select>

            <FlexRow>
              <Button onClick={sendConfirm}>Confirm</Button>
              <Button onClick={sendCancel} color="secondary">
                Cancel
              </Button>
            </FlexRow>
          </>
        ) : (
          <Spinner />
        )}
      </DialogBox>
    </Modal>
  );
}
