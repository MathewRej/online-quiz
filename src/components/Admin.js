import react, { useState } from "react";
import './index.css';
import book from '../images/book.png';
import AddQuizEvent from "./common/AddQuizEvent";
import {
    Home as HomeIcon,
    EmojiPeople as EmojiPeopleIcon,
    MenuBook as MenuBookIcon,
    QuestionAnswer as QuestionAnswerIcon,
    ExitToApp as ExitToAppIcon,
    AccountCircle as AccountCircleIcon,
    LibraryBooks as LibraryBooksIcon,
    DragHandleRounded

} from '@material-ui/icons';

const Content = (props) => {
    console.log('props: ', props);

    if(props.val=== 'home') {
        return (
            <div className="admin-content-home">
                <div>
                    <img src= {book}/>
                </div>
                <h1>ONLINE QUIZ</h1>

            </div>
        )
    }
    if(props.val ==='registered-students'){
        return(
            <div>
            <div className="admin-content-regstudents">
            <h1>REGISTERED STUDENTS</h1>
            </div>
            <div className="registered-students-div">
                

            </div>
            </div>
        )
    }
    if(props.val === 'add-quiz-events') {
        return (
            <div className="add-quiz-events">
                <h2>Quiz Event</h2>
                <AddQuizEvent/>
                </div>
        )
    }
    if(props.val ==='questions'){
        return(
        <div>Questions</div>
        )
    }
    if(props.val ==='signup-requests'){
        return(
            <div>Sgin up Requests</div>
        )
    }
    if(props.val ==='results'){
        return(
            <div>Results</div>
        )
    }
    return null
}

const Admin = () => {
    const [content, setContent] = useState('');
    return (
        <div className="admin-home">
            <div className="admin-nav">
                <h2>ADMIN</h2>
            </div>
            <div className="admin-homediv">
                <div className="admin-sidebar">
                    <a onClick={()=> setContent('home')} className="row">
                        <HomeIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Home</h5>
                    </a>
                    <a  onClick={()=> setContent('registered-students')} className="row">
                        <EmojiPeopleIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Registered Students</h5>
                    </a>
                    <a onClick={ ()=> setContent('add-quiz-events')} className="row">
                        <MenuBookIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Add Quiz Events</h5>
                    </a>
                    <a onClick={ ()=> setContent('questions')} className="row">
                        <QuestionAnswerIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Questions</h5>
                    </a>
                    <a onClick={ ()=> setContent('signup-requests')} className="row">
                        <AccountCircleIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Signup Requests</h5>
                    </a>
                    <a onClick={ ()=> setContent('results')} className="row">
                        <LibraryBooksIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Results</h5>
                    </a>
                    <a href="/" className="row">
                        <ExitToAppIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Logout</h5>

                    </a>
                </div>
                <div className="admin-content">
                    <Content val={content} />
                </div>

            </div>

        </div>


    )
}

export default Admin;
