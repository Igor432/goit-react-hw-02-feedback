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

    this.countTotalFeedback()
  

    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    
    } );
 
    console.log(this.PositiveFeedbackPercentage);
  };


  countTotalFeedback() {
    this.totalCount = this.totalCount + 1;
    
  }

  
  countPositiveFeedbackPercentage(total) {

    this.PositiveFeedbackPercentage = this.state.good / total * 100;
console.log(this.PositiveFeedbackPercentage)
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
        
        No Statistics</div>
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
