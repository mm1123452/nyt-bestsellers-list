import React from "react";
import Header from "../components/Header/Header";
import Landing from "../components/Landing/Landing";
import BooksList from "../components/BooksList/BooksList";

function Home() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <BooksList />
    </div>
  );
}

export default Home;
