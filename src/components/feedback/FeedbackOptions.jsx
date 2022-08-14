
var PropTypes = require('prop-types'); // ES5 with npm

const FeedbackOptions = ({options, onLeaveFeedback}) => {

const optika = Object.keys(options)




return (    
    
        <div>
        <p>Please, leave feedback</p>

{optika.map(optio => (
        <button class="feedback-button" type="button" key={optio}  onClick={() => onLeaveFeedback(optio)}>{optio}</button>
      

        ))}

        
            </div>


    
)


}


FeedbackOptions.propTypes = {
        options: PropTypes.array,
        onLeaveFeedback: PropTypes.func

}



export default FeedbackOptions;