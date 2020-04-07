import React from "react";
import "../Styles/StageCompleted.css";

export default class StageCompleted extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: 1,
      visible: false,
    };

    this.instructionChooser = this.instructionChooser.bind(this);
    this.timer = this.timer.bind(this);
    this.start = this.start.bind(this);
  }

  componentDidMount() {
    setTimeout(this.start, this.props.counter * 4000);
    setTimeout(this.timer, this.props.counter * 4000);
  }

  start() {
    this.setState({ visible: true });
  }

  timer() {
    setInterval(() => {
      this.setState(({ stage }) => ({
        stage: stage + 1,
      }));
    }, this.props.counter * 3000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  instructionChooser() {
    const { stage, visible } = this.state;
    if (stage === 6) {
      return "Congratulations, you've finished.";
    } else if (visible) {
      return `Breath ${stage} completed`;
    }
  }

  render() {
    return (
      <div className="stage-completed-text">
        <h2
          style={{
            animation: `text-color ${
              this.props.counter * 4
            }s infinite, fade-in-fade-out ${this.props.counter * 4}s infinite`,
            animationDelay: `${this.props.counter}s`,
          }}
        >
          {this.instructionChooser()}
        </h2>{" "}
      </div>
    );
  }
}
