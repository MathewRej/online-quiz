import React from "react";
import { useState } from "react/cjs/react.development";
import './index.css';

const AddQuestion = () => {
    const [values, setValues] = useState(Object.assign({
        enterQuestion:'',
        OptionA:'',
        optionB:'',
        optionC:'',
        optionD:''
    }));
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        });
        setErrors({
            ...errors,
            [name] : ''
        });

    }
    const handleSubmit = () => {
        let enterQuestion, optionA, optionB, optionC, optionD;
        if(values.enterQuestion === ''){
           enterQuestion = 'Enter a Question'
        }
        if(values.optionA === ''){
            optionA = 'enter your options'
        }
        if(values.optionB === ''){
            optionB = 'enter your options'
        }
        if(values.optionC === ''){
            optionC = 'enter your options'
        }
        if(values.optionD === ''){
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
    return(
    <div className="add-questiondiv">
        <h2>Add Questions
        </h2>
        <div className="col-2">
            <div className="col-6">
                <input type="text field"
                    className="text-field1"
                    name="question"
                    placeholder="enter your question"
                    onChange={(e) => handleChange(e)}
                ><br />
                {
                errors.enterQuestion &&
                    <label style={{color:'red'}}>{errors.enterQuestion}</label>

                }

                </input>
            </div>
            <div className="col-3">
                <div className="col-4">
                    <input type="text field"
                        className="options"
                        name="option A"
                        placeholder="option A"
                        onChange = { (e) => handleChange(e)}
                    >
                        {
                            errors.optionA&&
                            <label style={{color: 'red'}}>{errors.optionA}</label>
                        }

                    </input>
                    <input type="text field"
                        className="options"
                        name="option B"
                        placeholder="option B"
                        onChange = { (e) => handleChange(e)}
                    >
                        {
                            errors.optionB&&
                            <label style={{color: 'red'}}>{errors.optionB}</label>
                        }

                    </input>
                </div>
                <div className="col-5">
                    <input type="text field"
                        className="options"
                        name="option C"
                        placeholder="option C"
                    >
                        {
                            errors.optionC&&
                            <label style={{color: 'red'}}>{errors.optionC}</label>
                        }

                    </input>
                    <input type="text field"
                        className="options"
                        name="option D"
                        placeholder="option D"
                        onChange = { (e) => handleChange(e)}
                    >
                        {
                            errors.optionD&&
                            <label style={{color: 'red'}}>{errors.optionD}</label>
                        }

                    </input>
                </div>
            </div>
        </div>
        {/* <div className="col-7">

            <div className="button6">
                <button className="save-button"


                >Back</button>
            </div>
            <div className="button7">
                <button className="addquestion-button"
                onClick ={ () => handleSubmit() }
                
                >
                    Save
                </button>
            </div>

        </div> */}
    </div>
    )
}
export default AddQuestion;