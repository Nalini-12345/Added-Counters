import NavBar from "./Components/navbar";
import Counters from "./Components/counters";

import React from "react";
export default class App extends React.Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    const counters = this.state.counter.filter((product) => product.id !== counterId);
    this.setState({ counter: counters });
  };

 handleReset = () => {
    const counters = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter: counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counter: counters });
  };
  render() {
    return (
      <>
        <NavBar
          totalCounters={this.state.counter.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={this.state.counter}
          />
        </main>
      </>
    );
  }
}

