import { CenterFocusStrong } from "@material-ui/icons";
import React from "react";
import { useState } from "react/cjs/react.development";
import '../index.css';

const AddQuestion = () => {
    const [values, setValues] = useState(Object.assign({
        enterQuestion: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: ''
    }));
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });

    }
    const handleSubmit = () => {
        let enterQuestion, optionA, optionB, optionC, optionD;
        if (values.enterQuestion === '') {
            enterQuestion = 'Enter a Question'
        }
        if (values.optionA === '') {
            optionA = 'enter your options'
        }
        if (values.optionB === '') {
            optionB = 'enter your options'
        }
        if (values.optionC === '') {
            optionC = 'enter your options'
        }
        if (values.optionD === '') {
            optionD = 'enter your options'
        }
        setErrors({
            enterQuestion,
            optionA,
            optionB,
            optionC,
            optionD
        });
    }
    return (
        <div className="addquestionmain-div">
            <div className="add-questiondiv">
                <h2>Add Questions
                </h2></div>
                
                    <div className="col-6">
                        <input type="text field"
                            className="enterQuestion-div"
                            name="enterQuestion"
                            placeholder="enter your question"
                            value={values.enterQuestion}
                            onChange={(e) => handleChange(e)}
                        /><br />
                        {
                            errors.enterQuestion &&
                            <label style={{ color: 'red' }}>{errors.enterQuestion}</label>

                        }


                    </div>
                    <div className="col-3">
                        <div className="col-4">
                            <input type="text field"
                                className="options"
                                name="optionA"
                                placeholder="option A"
                                value={values.optionA}
                                onChange={(e) => handleChange(e)}
                            />
                            {
                                errors.optionA &&
                                <label style={{ color: 'red' }}>{errors.optionA}</label>
                            }


                            <input type="text field"
                                className="options"
                                name="optionB"
                                placeholder="option B"
                                value={values.optionB}
                                onChange={(e) => handleChange(e)}
                            />
                            {
                                errors.optionB &&
                                <label style={{ color: 'red' }}>{errors.optionB}</label>
                            }


                        </div>
                        <div className="col-5">
                            <input type="text field"
                                className="options"
                                name="optionC"
                                placeholder="option C"
                                value={values.optionC}
                                onChange={(e) => handleChange(e)}
                            />
                            {
                                errors.optionC &&
                                <label style={{ color: 'red' }}>{errors.optionC}</label>
                            }


                            <input type="text field"
                                className="options"
                                name="optionD"
                                placeholder="option D"
                                value={values.optionD}
                                onChange={(e) => handleChange(e)}
                            />
                            {
                                errors.optionD &&
                                <label style={{ color: 'red' }}>{errors.optionD}</label>
                            }
                        </div>
                    </div>
               
            <div className="answer">
                <h3>Answer</h3>
            </div>
           
            <div className="questionAn-div">

                <input type="radio" name="options" value="optionA" />
                A
                <input type="radio" name="options" value="OptionB" />
                B
                <input type="radio" name="options" value="OptionC" />
                C
                <input type="radio" name="options" value="OptionD" />
                D
            </div>
          



            <div className="addquestion-savediv">

                <div className="button6">
                    <button className="save-button"


                    >Back</button>
                </div>
                <div className="button7">
                    <button className="addquestion-button"
                        onClick={() => handleSubmit()}

                    >
                        Save
                    </button>
                </div>
               

            </div>
            
        </div>
    )
}
export default AddQuestion;