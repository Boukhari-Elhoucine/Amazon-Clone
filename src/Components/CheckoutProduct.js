import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";
function CheckoutProduct({ id, title, image, price, rating, hidebutton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "remove",
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="product" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p>
          <span>$</span>
          {price}
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarIcon />
            ))}
        </div>
        {!hidebutton && (
          <button onClick={removeFromBasket}> remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
