export const basketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
  user: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "set_user":
      return { ...state, user: action.user };
    case "add":
      return { ...state, basket: [...state.basket, action.item] };
    case "remove":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        alert("item not found");
      }
      return { ...state, basket: newBasket };
    case "Empty_Basket":
      return { ...state, basket: [] };
    default:
      return state;
  }
}
export default reducer;
