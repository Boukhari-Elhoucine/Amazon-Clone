import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "./firebaseConfig";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      console.log(user);
      db.collection("uesrs")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <div className="orders__order"></div>
      <h1>Your Orders</h1>
      {orders.map((order) => (
        <Order order={order} />
      ))}
    </div>
  );
}

export default Orders;
