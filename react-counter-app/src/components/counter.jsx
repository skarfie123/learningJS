import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - Updated");

    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("Value Changed for id:", this.props.counter.id);
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  /// `controlled` component doesnt use state
  // state = {
  //   value: this.props.counter.value, //this is set only on init. to link it to the Counters' state, need to make this `controlled`
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 1) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li> // need to give unique keys when doing map (in this case the tags are already unique)
        ))}
      </ul>
    );
  }

  /// old style
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement() {
  //     this.setState({ count: this.state.count + 1 });
  //   }

  /// arror function is better as it allows access to `this` without binding
  handleIncrement = (msg) => {
    //this is no longer used when we convert it to a `controlled` module
    console.log(msg);

    this.setState({ value: this.state.value + 1 });
  };

  /// instead of wrappers like this, make in line functions
  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    console.log("Counter - Rendered");

    return (
      <React.Fragment>
        {/* or div*/}
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            //this.handleIncrement("Incremented")
            this.props.onIncrement(this.props.counter);
          }}
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {
          //this.state.tags.length === 0 &&
          //  "Please add some tags" /* see truthy and falsey */
        }
        {/*this.renderTags()*/}
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
          style={this.styles}
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes = "btn btn-sm m-2 btn-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //return this.state.count === 0 ? <h1>Zero</h1> : this.state.count
    const { value: count } = this.props.counter; // deconstruct ie pickout the count value
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
