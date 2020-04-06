import React from "react";
import "../Styles/Box.css";
import Timer from "./Timer";
import Instructions from "./Instructions";
import StageCompleted from "./StageCompleted";

export default class Box extends React.Component {
  render() {
    return (
      <div
        className="box-container"
        style={{ animationDelay: `${this.props.counter}s` }}
      >
        <div className="box-main"></div>
        <div className="box-white"></div>
        <Instructions counter={this.props.counter} />
        <Timer counter={this.props.counter} />
        <StageCompleted counter={this.props.counter} />
      </div>
    );
  }
}
