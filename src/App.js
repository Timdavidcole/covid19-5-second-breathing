import React from "react";
import Box from "./Components/Box";
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
        <div className="text-box-container">
          <div className="text-box1" style={{ top: "100px" }}>
            <span>
              This breathing technique is advocated to help clear your lungs,
              and lower your risk of developing a secondary pneumonia if you've
              caught COVID-19.
            </span>
            <ul>
              <li>
                <span style={{ color: "#fae200" }}>Breathe in deeply</span> for
                five seconds.
              </li>
              <li>
                <span style={{ color: "#fae200" }}>Hold</span> your breath for
                five seconds.
              </li>
              <li>
                <span style={{ color: "#fae200" }}>Breathe out</span> for five
                seconds.
              </li>
              <li>
                <span style={{ color: "#fae200" }}>Hold</span> your breath for
                five seconds.
              </li>
              <li>
                <span style={{ color: "#fae200" }}>Repeat</span> this 6 times...
              </li>
              <li>
                Then on the final (6th) breath out,{" "}
                <span style={{ color: "#fae200" }}>cough</span> as deeply as you
                can.
              </li>
            </ul>
          </div>
        </div>
        <Box counter={this.state.counter} />
      </div>
    );
  }
}
