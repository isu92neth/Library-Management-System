import React, { useEffect, useState } from "react";

import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";

import Books from "./Books/index";

import { getBooks } from "../../api/bookAPI";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getBooks()
      .then((response) => {
        if (!response.error) {
          setBooks(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const contents = [
    { title: "Books", elements: <Books catalog={books} /> },
    { title: "Members", elements: <h1>Contents of Members!</h1> },
  ];

  return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
