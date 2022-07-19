import React from "react";
import '../index.css';

const AddQuizEvent = () => {
    return(
        <div>
            <div className="add-quiz-eventdiv">
            <h3>Quiz Event Name</h3>
            <input type="textfield" className="addquiztextfield"></input>
            </div>
            <div className="add-quiz-eventdiv">
                <h3>Date</h3>
                <input type="date" className="addquizeventdate"></input>
            </div>
            <div className="add-quiz-eventdiv">
                <h3>Time</h3>
                <input type="time" className="addquizeventtime"></input>
            </div>
            <div className="addquizevent">
                <button className="addquizevenb">Add</button>
            </div>

        </div>
    )
}
export default AddQuizEvent;