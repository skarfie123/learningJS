import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  /// moved all this stuff to App so NavBar can access the state too
  //   state = {
  //     counters: [
  //       { id: 1, value: 4 },
  //       { id: 2, value: 0 },
  //       { id: 3, value: 0 },
  //       { id: 4, value: 0 },
  //     ],
  //   };

  //   handleDelete = (counterID) => {
  //     console.log("Delete", counterID);
  //     const counters = this.state.counters.filter((c) => c.id !== counterID);
  //     this.setState({ counters });
  //   };

  //   handleReset = () => {
  //     const counters = this.state.counters.map((c) => {
  //       c.value = 0;
  //       return c;
  //     });
  //     this.setState({ counters });
  //   };

  //   handleIncrement = (counter) => {
  //     console.log("Increment");
  //     const counters = [...this.state.counters]; //makes a copy of the references
  //     const index = counters.indexOf(counter);
  //     counters[index] = { ...counter }; // need to clone the object so we dont modify state directly
  //     counters[index].value++;
  //     //console.log(this.state.counters[index].value);
  //     this.setState({ counters });
  //   };

  render() {
    console.log("Counters - Rendered");

    // return (
    //   <div>
    //     {this.props.counters.map((counter) => (
    //       <Counter
    //         key={counter.id}
    //         onDelete={this.props.onDelete}
    //         onIncrement={this.props.onIncrement}
    //         counter={counter}
    //       >
    //         <h4>Product {counter.id}</h4>
    //       </Counter>
    //     ))}
    //     <button
    //       onClick={this.props.oneReset}
    //       className="btn btn-sm m-2 btn-primary"
    //     >
    //       Reset
    //     </button>
    //   </div>
    // );

    const { counters, onDelete, onIncrement, onReset } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h4>Product {counter.id}</h4>
          </Counter>
        ))}
        <button onClick={onReset} className="btn btn-sm m-2 btn-primary">
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
