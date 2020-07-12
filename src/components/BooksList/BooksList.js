import React from "react";
import { LIST_TYPE } from "../../constants";
import { useGetListBySubject } from "../../api";
import Book from "../Book/Book"

function BooksList() {
  const { books, display_name, isLoading, isError } = useGetListBySubject(
    LIST_TYPE
  );

  
  return (
    <section>
      <h2>{display_name}</h2>
      <p>{isLoading ? "Loading..." : null} </p>
      <p>{isError ? "Error.." : null} </p>
      {books ? <Book data={books && books[0]}/> : null}
    </section>
  );
}

export default BooksList;
