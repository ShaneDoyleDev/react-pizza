import pizzaData from "./data";

export default function App() {
  return (
    <>
      <Pizza />
    </>
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
