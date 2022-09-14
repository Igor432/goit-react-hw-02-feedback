import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    this.countTotalFeedback();

    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback() {
    const result = this.state.good + this.state.neutral + this.state.bad;

    return result;
  }

  countPositiveFeedbackPercentage() {
    const result = (this.state.good / this.countTotalFeedback()) * 100;
    return result;
  }

  const;

  render() {
    const total = this.countTotalFeedback();
    const totalPositive = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Leave Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification message="There is no Feedback..." />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={totalPositive}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default Feedback;
