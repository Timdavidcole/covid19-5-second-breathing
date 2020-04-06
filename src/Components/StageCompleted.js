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
    setTimeout(this.start, 28000);
    setTimeout(this.timer, 28000);
  }

  start() {
    this.setState({ visible: true });
  }

  timer() {
    setInterval(() => {
      this.setState(({ stage }) => ({
        stage: stage + 1,
      }));
    }, 20000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  instructionChooser() {
    const { stage, visible } = this.state;
    if (stage === 5) {
      return <h3>Congratulations, you've finished.</h3>;
    } else if (visible) {
      return <h2>Stage {`${stage}`} completed</h2>;
    }
  }

  render() {
    return (
      <div className="stage-completed-text">{this.instructionChooser()} </div>
    );
  }
}
