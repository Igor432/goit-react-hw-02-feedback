import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class Feedback extends Component {
  state = {
    good: 0, 
    neutral: 0,
    bad: 0,
  };


    totalCount = 0;
    PositiveFeedbackPercentage = 0;
  

  onLeaveFeedback = key => {

    this.countTotalFeedback()
  

    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    
    } );

  };


  countTotalFeedback() {
    this.totalCount = this.totalCount + 1;
    
  }

  
  countPositiveFeedbackPercentage(total) {

    this.PositiveFeedbackPercentage = this.state.good / total * 100;
  }
  

  render() {

this.countPositiveFeedbackPercentage(this.totalCount)

    if (this.totalCount === 0) {
      return (
        <div>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Notification message ='There is no Feedback...'/>
        
        </div>
      )
    }

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
