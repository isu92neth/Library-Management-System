import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";

import Books from "./Books/index";
import Members from "./Members/index";

import { setBooks } from "../../store/booksSlice";
import { getBooks } from "../../api/bookAPI";
import { setMembers } from "../../store/membersSlice";
import { getMembers } from "../../api/memberAPI";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const books = useSelector((state) => state.books.value);
  const members = useSelector((state) => state.members.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getBooks()
      .then((response) => {
        if (!response.error) {
          dispatch(setBooks(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    getMembers()
      .then((response) => {
        if (!response.error) {
          dispatch(setMembers(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  const contents = [
    { title: "Books", elements: <Books catalog={books} /> },
    { title: "Members", elements: <Members catalog={members} /> },
  ];

  return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
