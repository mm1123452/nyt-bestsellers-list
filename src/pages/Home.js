import React from "react";
import Landing from "../components/Landing/Landing";
import BooksList from "../components/BooksList/BooksList";

function Home() {
  return (
    <div className="App">
      <Landing />
      <BooksList />
    </div>
  );
}

export default Home;
