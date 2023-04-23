import { clearCart } from "../feature/cart/cartSlice";
import { closeModal } from "../feature/modal/modalSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispach = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all item from your shopping chart ?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispach(clearCart());
              dispach(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispach(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
