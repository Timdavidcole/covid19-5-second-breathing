import React from "react";
import "../Styles/Instructions.css";

export default class Instructions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: 3,
      getReady: true,
    };

    this.instructionChooser = this.instructionChooser.bind(this);
    this.timer = this.timer.bind(this);
    this.start = this.start.bind(this);
  }

  componentDidMount() {
    setTimeout(this.start, this.props.counter * 1000);
    setTimeout(this.timer, this.props.counter * 1000);
  }

  start() {
    this.setState({ getReady: false });
  }

  timer() {
    setInterval(() => {
      const { interval } = this.state;
      if (interval > 0) {
        this.setState(({ interval }) => ({
          interval: interval - 1,
        }));
      }
      if (interval === 1) {
        this.setState(() => ({
          interval: 3,
        }));
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  instructionChooser() {
    const { interval, getReady } = this.state;
    if (getReady) {
      return "Get ready...";
    } else if (interval === 3) {
      return "Deep breath in";
    } else if (interval === 1) {
      return "And breathe out";
    } else {
      return "Hold";
    }
  }

  render() {
    return (
      <div className="instructions">
        <h2
          style={{
            animation: `text-color ${
              this.props.counter * 4
            }s infinite, fade-in-fade-out 10s infinite`,
            animationDelay: `${this.props.counter}s`,
          }}
        >
          {this.instructionChooser()}
        </h2>{" "}
      </div>
    );
  }
}
