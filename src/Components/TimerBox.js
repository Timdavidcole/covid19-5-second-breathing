import React from "react";
import "../Styles/Box.css";
import Timer from "./Timer";
import Instructions from "./Instructions";
import StageCompleted from "./StageCompleted";

export default class TimerBox extends React.Component {
  render() {
    return (
      <div
        className="box-container"
        style={{ animationDelay: `${this.props.counter}s` }}
      >
        <div
          className="box-main"
          style={{
            animation: `appear-box ${this.props.counter * 4}s infinite`,
            animationDelay: `${this.props.counter}s`,
          }}
        ></div>
        <div
          className="box-white"
          style={{
            animation: `disappear-box ${this.props.counter * 4}s infinite`,
            animationDelay: `${this.props.counter}s`,
          }}
        ></div>
        <Instructions counter={this.props.counter} />
        <Timer counter={this.props.counter} />
        <StageCompleted counter={this.props.counter} />
      </div>
    );
  }
}
