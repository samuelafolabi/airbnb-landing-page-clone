import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./Data";

function App() {
  const cards = Data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="card__list">{cards}</section>
    </>
  );
}

export default App;
