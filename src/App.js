import React from "react";
import TextBox from "./Components/TextBox";
import TimerBox from "./Components/TimerBox";
import "./Styles/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 5,
    };
  }
  render() {
    return (
      <div>
        <TextBox />
        <TimerBox counter={this.state.counter} />
      </div>
    );
  }
}
