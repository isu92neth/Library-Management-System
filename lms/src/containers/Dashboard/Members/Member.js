import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "styled-components";

import { deleteMember, getMember, editMember } from "../../../api/memberAPI";
import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
} from "../../../components/CommonComponents";
import ConfirmationDialog from "../../../components/ConfirmationDialog";
import Spinner from "../../../components/Spinner";
import AddEditMemberDialog from "./AddEditMemberDialog";

import UserProfilePlaceHolder from "../../../shared/userProfile.jpg";

const ContainerInlineTextAlignLeft = styled(ContainerInline)`
  align-items: flex-start;
`;

const H1 = styled.h1`
  text-align: left;
`;

const H2 = styled.h2`
  text-align: left;
`;

const H3 = styled.h3`
  text-align: left;
`;

const Member = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [member, setMember] = useState(null);
  const [showEditMemberDialog, setShowEditMemberDialog] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setMember(getMember(id));
    setIsLoading(false);
  }, [id]);

  const handleDelete = (confirmation) => {
    if (confirmation) {
      setIsLoading(true);
      deleteMember(member.id);
      setIsLoading(false);
    }
    setShowDeleteConfirmation(false);
  };

  const handleEdit = (confirmation, data) => {
    if (confirmation) {
      setIsLoading(true);
      editMember(member.id, data);
      console.log(data);
      setIsLoading(false);
    }
    setShowEditMemberDialog(false);
  };

  return (
    <>
      <Container>
        <Button onClick={handleBackClick}>
          <IoReturnUpBack />
        </Button>
        {!isLoading && member !== null ? (
          <>
            <FlexRow>
              <ContainerInlineTextAlignLeft>
                <H1>{`${member.firstName} ${member.lastName}`}</H1>
                <H2>{`NIC: ${member.nic}`}</H2>
                <H3>{`Contact Number: ${member.contactNumber}`}</H3>
                <H3>{`Address: ${member.address}`}</H3>
                <H3>{`User Type: ${member.userType}`}</H3>
              </ContainerInlineTextAlignLeft>
              <ContainerInline>
                <img
                  src={UserProfilePlaceHolder}
                  alt="User Profile Placeholder"
                  style={{ width: "30em" }}
                />
              </ContainerInline>
            </FlexRow>
            <FlexRow>
              <Button onClick={() => setShowEditMemberDialog(true)}>
                Edit
              </Button>
              <Button
                color="danger"
                onClick={() => setShowDeleteConfirmation(true)}
              >
                Delete
              </Button>
            </FlexRow>
          </>
        ) : (
          <Spinner />
        )}
      </Container>
      <ConfirmationDialog
        handleClose={handleDelete}
        show={showDeleteConfirmation}
        headerText="Confirm Member deletion"
        detailText="Are you sure you want to delete this member? This action can't be undone."
      />
      <AddEditMemberDialog
        isEdit={true}
        show={showEditMemberDialog}
        handleClose={handleEdit}
        data={member}
      />
    </>
  );
};

export default Member;
