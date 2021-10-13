import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "styled-components";

import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
} from "../../../components/CommonComponents";
import Spinner from "../../../components/Spinner";

import { getBook } from "../../../api/bookAPI";
import BookCoverPlaceHplder from "../../../shared/bookCover.png";

const ContainerInlineTextAlignLeft = styled(ContainerInline)`
  align-items: flex-start;
`;

const H1 = styled.h1`
  text-align: left;
`;

const H2 = styled.h2`
  text-align: left;
`;

const Book = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getBook(id)
      .then((response) => {
        if (!response.error) {
          setBook(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <Container>
      <Button onClick={handleBackClick} size={1.5}>
        <IoReturnUpBack />
      </Button>
      {!isLoading && book !== null ? (
        <>
          <FlexRow>
            <ContainerInlineTextAlignLeft>
              <H1>{book.title}</H1>
              <H2>{`by ${book.author}`}</H2>
              <p>
                Books are good company, in sad times and happy times, for books
                are people – people who have managed to stay alive by hiding
                between the covers of a book.
              </p>
              <p>- E.B. White</p>
              {book.isAvailable ? (
                ""
              ) : (
                <>
                  <h4>{` Burrowed by: ${book.burrowedMemberId}`}</h4>
                  <h4>{` Burrowed date: ${book.burrowedDate}`}</h4>
                </>
              )}
            </ContainerInlineTextAlignLeft>
            <ContainerInline>
              <img
                src={BookCoverPlaceHplder}
                alt="Book Cover Placeholder"
                style={{ width: "20em" }}
              />
            </ContainerInline>
          </FlexRow>
          <FlexRow>
            {book.isAvailable ? (
              <>
                <Button onClick={() => console.log("Clicked Lend")}>
                  Lend
                </Button>
                <Button danger onClick={() => console.log("Clicked Delete")}>
                  Delete
                </Button>
              </>
            ) : (
              <>
                <h4>{` Burrowed by: ${book.burrowedMemberId}`}</h4>
                <h4>{` Burrowed date: ${book.burrowedDate}`}</h4>
                <Button onClick={() => console.log("Clicked Return")}>
                  Return
                </Button>
              </>
            )}
          </FlexRow>
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default Book;