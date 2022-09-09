import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalCount = 0;
  PositiveFeedbackPercentage = 0;

  onLeaveFeedback = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    }, this.countTotalFeedback);
    this.countPositiveFeedbackPercentage();
    console.log(this.PositiveFeedbackPercentage);
  };

  countTotalFeedback() {
    this.totalCount = this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    this.PositiveFeedbackPercentage = (100 / this.totalCount) * this.state.good;
  }

  render() {
    return (
      <div>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.totalCount}
          positivePercentage={this.PositiveFeedbackPercentage}
        />
      </div>
    );
  }
}



export default Feedback;
