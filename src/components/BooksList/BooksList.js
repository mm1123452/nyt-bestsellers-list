import React from "react";
import { LIST_TYPE } from "../../constants";
import { useGetListBySubject } from "../../api";
import Book from "../Book/Book";
import "./BooksList.css";

function BooksList() {
  const { books, display_name, isLoading, isError } = useGetListBySubject(
    LIST_TYPE
  );

  const BookList =
    books &&
    books.map((book) => <Book key={book.primary_isbn10} data={book} />);

  return (
    <section className="bookslist">
      <h2 className="bookslist__title">{display_name}</h2>
      <span>{isLoading ? "Loading..." : null} </span>
      <span>{isError ? "Error.." : null} </span>
      <ul className="bookslist__list">{BookList}</ul>
    </section>
  );
}

export default BooksList;
