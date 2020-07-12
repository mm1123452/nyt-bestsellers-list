import React from "react";
import { LIST_TYPE } from "../../constants";
import { useGetListBySubject } from "../../api";
import Book from "../Book/Book"
import "./BooksList.css"

function BooksList() {
  const { books, display_name, isLoading, isError } = useGetListBySubject(
    LIST_TYPE
  );

  
  return (
    <section className="bookslist">
      <h2 className="bookslist__title">{display_name}</h2>
      <span>{isLoading ? "Loading..." : null} </span>
      <span>{isError ? "Error.." : null} </span>
      {books ? <Book data={books && books[0]}/> : null}
      {books ? <Book data={books && books[1]}/> : null}
      {books ? <Book data={books && books[2]}/> : null}
    </section>
  );
}

export default BooksList;
