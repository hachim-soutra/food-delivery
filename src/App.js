import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <>
      <Cart />
      <Header></Header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
