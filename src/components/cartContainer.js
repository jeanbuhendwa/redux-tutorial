import { useDispatch, useSelector } from "react-redux";
import CartItem from "./cartItem";
import { openModal } from "../feature/modal/modalSlice";

const CartContainer = () => {
  const dispach = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <h2>Your Bag</h2>
        <p className="empty-cart">is currently empty</p>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total
            <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispach(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
