import React, { Component } from "react";

class Item extends Component {
  state = {};

  styles = {
    fontSize: 20,
    marginLeft: "30px",
    marginRight: "30px",
  };

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.item.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  renderName() {
    let name = this.props.item.name ? this.props.item.name : "No Name";
    return (
      <span style={this.styles}>
        <b>{name}</b>
      </span>
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.renderName()}
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.props.item.count}
          </span>
          <button
            style={this.styles}
            className="btn btn-danger m-2"
            onClick={() => this.props.onDelete(this.props.item.id)}
          >
            X
          </button>
        </div>
        <div>
          <button
            style={this.styles}
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.onIncrement(this.props.item)}
          >
            +
          </button>
          <button
            style={this.styles}
            className="btn btn-sm m-2"
            onClick={() => this.props.onDecrement(this.props.item)}
          >
            -
          </button>
        </div>
        ----------------------------------------
      </div>
    );
  }
}

export default Item;
