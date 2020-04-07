import React from "react";
import "../Styles/Timer.css";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 1,
      visible: false,
    };

    this.timer = this.timer.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    setTimeout(this.hide, this.props.counter * 1000);
    setTimeout(this.timer, this.props.counter * 1000);
  }

  hide() {
    this.setState({ visible: true });
  }

  timer() {
    setInterval(() => {
      const { seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds + 1,
        }));
      }
      if (seconds === 5) {
        this.setState(() => ({
          seconds: 1,
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { seconds, visible } = this.state;
    if (visible) {
      return (
        <div
          className="timer"
          style={{
            animation: `text-color ${this.props.counter * 4}s infinite, fade-out 1s infinite`,
          }}
        >
          <h1>{seconds}</h1>
        </div>
      );
    } else return null;
  }
}
