import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "add",
      item: {
        id,
        title,
        image,
        rating,
        price,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarIcon />
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>add to cart</button>
    </div>
  );
}

export default Product;
