import React from "react";
import "../Styles/App.css";

export default class TextBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 5,
    };
  }
  render() {
    return (
      <div className="text-box1">
        <span>
          This <span style={{ color: "#fae200" }}>breathing technique</span> is
          advocated to help clear your lungs, and lower your risk of developing
          a secondary pneumonia if you've caught{" "}
          <span style={{ color: "#fae200" }}>COVID-19</span>.
        </span>
        <ul>
          <li>
            Sit upright and{" "}
            <span style={{ color: "#fae200" }}>breathe in deeply</span> for five
            seconds.
          </li>
          <li>
            <span style={{ color: "#fae200" }}>Hold</span> your breath for five
            seconds.
          </li>
          <li>
            <span style={{ color: "#fae200" }}>Breathe out</span> for five
            seconds.
          </li>
          <li>
            <span style={{ color: "#fae200" }}>Hold</span> your breath for five
            seconds.
          </li>
          <li>
            <span style={{ color: "#fae200" }}>Repeat</span> this 6 times...
          </li>
          <li>
            Then on the final (6th) breath out,{" "}
            <span style={{ color: "#fae200" }}>cough</span> as deeply as you
            can.
          </li>
          <li>Please repeat this whole sequence twice. </li>
        </ul>
        <span>
          Afterwards,{" "}
          <span style={{ color: "#fae200" }}>lie down on your front</span>,
          breathing deeper that usual for at least
          <span style={{ color: "#fae200" }}> 10 minutes</span>. Stay safe
          everyone.
        </span>
        <br></br>
        <br></br>
        <span>Stay safe everyone.</span>
      </div>
    );
  }
}
