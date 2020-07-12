import React from "react";
import "./Book.css";

function Book({ data }) {
  const { author, book_image, rank, weeks_on_list, title } = data;

  const styles = {
    backgroundImage: `url(${book_image})`,
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "200px",
    height: "290px",
    minWidth: "200px",
    borderRadius: "16px 0 0 16px",
  };

  return (
    <li className="book">
    <div className="book__image" style={styles}>
      <div className="book__num-container">
        <span className="book__num-weeks">{weeks_on_list}</span>
      </div>
    </div>
    <div className="book__text-container">
      <p className="book__rank">
        <span className="book__rank-text">Rank: </span>
        {rank}
      </p>
      <h4 className="book__title">{title}</h4>
      <p className="book__author">{author}</p>
    </div>
  </li>
    
  );
}

export default Book;
