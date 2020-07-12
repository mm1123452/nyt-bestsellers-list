import React from "react";
import "./Book.css"

function Book({ data }) {
  const { author, book_image, rank, weeks_on_list, title } = data;

  const styles = {
    backgroundImage: `
   linear-gradient(to bottom, rgba(60, 68, 77, 0) 0%, #3C444D 100%),
   url(${book_image})`,
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "300px",
    height:"300px"
  };

  return (
    <div className= "book" style={styles} >
      <p>{weeks_on_list}</p>
      <div>
        <p>{rank}</p>
        <h4>{title}</h4>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default Book;
