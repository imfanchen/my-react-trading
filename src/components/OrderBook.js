import React from "react";
import Table from "react-bootstrap/Table";

const OrderBook = (props) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th colSpan="5">{props.title}</th>
          </tr>
          <tr>
            <td>Id</td>
            <td>Asset</td>
            <td>Market Size</td>
            <td>Price (USD)</td>
            <td>Timestamp</td>
          </tr>
        </thead>
        <tbody>
          {props.orders.map((order) => {
            return (
              <tr>
                <td>{order.id}</td>
                <td>{order.asset}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.timestamp}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default OrderBook;
