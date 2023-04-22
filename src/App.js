import NavBar from "./components/navBar";
import CartContainer from "./components/cartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./feature/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/modal";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(calculateTotal());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}

      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
