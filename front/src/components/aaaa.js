import React from 'react';
import { useState } from 'react/cjs/react.development';
import './index.css';

const QTable = () => (
    <div className="col-2">
        <div className="col-6">
            <input type="text field"
                className="text-field1"
                name="question"
                placeholder="enter your question"
            >

            </input>
        </div>
        <div className="col-3">
            <div className="col-4">
                <input type="text field"
                    className="options"
                    name="option A"
                    placeholder="option A"
                >

                </input>
                <input type="text field"
                    className="options"
                    name="option B"
                    placeholder="option B"
                >

                </input>
            </div>
            <div className="col-5">
                <input type="text field"
                    className="options"
                    name="option C"
                    placeholder="option C"
                >

                </input>
                <input type="text field"
                    className="options"
                    name="option D"
                    placeholder="option D"
                >

                </input>
            </div>
        </div>
    </div>
)


const Questions = () => {

    const [count, setCount] = useState(1)
    console.log('count: ', count);
    const [arr, setArr] = useState([<QTable />])
    console.log('arr: ', arr);

    const increment = () => {
        let tr = arr;
        console.log('tr: ', tr);
        tr.push(<QTable />)
        setArr(tr);
    }
    return (
        <div className="main-div">
            <div className="col-1">
                <div>
                    <h3>Add Questions</h3>
                </div>
                {arr.map(i => {
                    return <> {i} </>
                })}
                
                <div className="col-7">
                 
                        <div className="button6">
                            <button className="save-button">Save</button>
                        </div>
                        <div className="button7">
                            <button className="addquestion-button"
                                onClick={() => increment()}
                            >
                                Add New Question
                            </button>
                        </div>
                  
                </div>
            </div>
        </div>


    )





}
export default Questions;

