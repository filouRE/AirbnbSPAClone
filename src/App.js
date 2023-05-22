// Default imports
import React from "react";
// style
import "./styles.css";
// Dataset
import cardsData from "./data/data";
// components
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PhotosGrid from "./components/PhotosGrid";

export default function App() {
  const cards = cardsData;
  // will generate a card for each item in the dataset
  const showingCards = cards.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <>
      <Navbar />
      <main>
        <PhotosGrid />
        <div className="bottom-content">
          <Header />
          <section className="cards-list">{showingCards}</section>
        </div>
      </main>
    </>
  );
}
