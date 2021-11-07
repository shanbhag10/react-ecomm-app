import React, { Component } from "react";
import Item from "./item";

class Counters extends Component {
  state = {
    items: [
      { id: 1, name: "bag", count: 0 },
      { id: 2, name: "belt", count: 0 },
      { id: 3, name: "dog", count: 0 },
      { id: 4, name: "bottle", count: 0 },
    ],
  };

  handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].count++;
    this.setState({ items: items });
  };

  handleDecrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].count--;
    this.setState({ items: items });
  };

  handleDelete = (itemId) => {
    const items = this.state.items.filter((item) => item.id !== itemId);
    this.setState({ items: items });
  };

  renderCart() {
    if (this.state.items.length === 0) return <p>Your Cart is Empty</p>;

    return (
      <div>
        {this.state.items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Amazon</h1>
        {this.renderCart()}
      </div>
    );
  }
}

export default Counters;
