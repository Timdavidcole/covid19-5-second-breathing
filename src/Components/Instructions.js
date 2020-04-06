import React from "react";
import "../Styles/Instructions.css";

export default class Instructions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: 4,
      getReady: true
    };

    this.instructionChooser = this.instructionChooser.bind(this);
    this.timer = this.timer.bind(this);
    this.start = this.start.bind(this);
  }

  componentDidMount() {
    setTimeout(this.start, 12000);
    setTimeout(this.timer, 12000);
  }

  start() {
    this.setState({ getReady: false })
  }

  timer() {
    setInterval(() => {
      const { interval } = this.state;
      if (interval > 0) {
        this.setState(({ interval }) => ({
          interval: interval - 1
        }));
      }
      if (interval === 1) {
        this.setState(() => ({
          interval: 4
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
      return <h2>Get ready...</h2>;
    } else if (interval === 4) {
      return <h2>Breathe in</h2>;
    } else if (interval === 2) {
      return <h2>Breathe out</h2>;
    } else {
      return <h2>Hold</h2>;
    }
  }

  render() {
    return <div className="instructions">{this.instructionChooser()} </div>;
  }
}
