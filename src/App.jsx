import pizzaData from "./data";

export default function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <>
      <h2>Our Menu</h2>
      <Pizza />
    </>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openingHour = 12;
  const closingHour = 22;
  const isOpen = currentHour >= openingHour && currentHour <= closingHour;

  return (
    <footer>
      {new Date().toLocaleTimeString()}. We&apos;re currently open
    </footer>
  );
}

function Pizza() {
  return (
    <>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </>
  );
}
