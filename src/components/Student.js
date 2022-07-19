import React from "react";
import './index.css'
import ApplyQuiz from "./common/ApplyQuiz";
import {
    Home as HomeIcon,
    EmojiPeople as EmojiPeopleIcon,
    MenuBook as MenuBookIcon,
    QuestionAnswer as QuestionAnswerIcon,
    ExitToApp as ExitToAppIcon,
    AccountCircle as AccountCircleIcon,
    LibraryBooks as LibraryBooksIcon

} from '@material-ui/icons';
import { useState } from "react/cjs/react.development";

const Content = (props) => {
    if (props.val === 'home') {
        return (
            <div>Home</div>
        )
    }
    if (props.val === 'quiz-events') {
        return (
            <div>Quiz Events</div>
        )
    }
    if (props.val === 'apply-for-quiz') {
        return (
            <div className="apply-quiz-div">
                <h2>Apply for Quiz</h2>
            <ApplyQuiz/>
            </div>
        )
    }
    if (props.value === 'view-result') {
        return (
            <div>Result</div>
        )
    }
    return null;
}


const Student = () => {
    const [content, setContent] = useState('')
    return (
        <div className="student-maindiv">
            <div className="student-nav">

                <h1>STUDENT</h1>
            </div>
            <div className="student-homediv">
                <div className="student-sidebar">
                    <a onClick={() => setContent('home')} className="student-sidebarcontent">
                        <HomeIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Home</h5>
                    </a>
                    <a onClick={() => setContent('quiz-events')} className="student-sidebarcontent">
                        <MenuBookIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Quiz Events</h5>
                    </a>
                    <a onClick={() => setContent('apply-for-quiz')} className="student-sidebarcontent">
                        <QuestionAnswerIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}> Apply for Quiz</h5>
                    </a>
                    <a onClick={() => setContent('view-result')} className="student-sidebarcontent">
                        <AccountCircleIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>View Result</h5>
                    </a>

                    <a href="/" className="student-sidebarcontent">
                        <ExitToAppIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Logout</h5>
                    </a>

                </div>
                <div className="student-content">
                    <Content val={content} />

                </div>
            </div>
        </div>
    )
}
export default Student;
