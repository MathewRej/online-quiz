import React, { useState } from "react";
import './index.css';
import Modal from 'react-modal';
import Result from "./common/Result";
import {
    Home as HomeIcon,
    EmojiPeople as EmojiPeopleIcon,
    MenuBook as MenuBookIcon,
    QuestionAnswer as QuestionAnswerIcon,
    ExitToApp as ExitToAppIcon,
    AccountCircle as AccountCircleIcon,
    LibraryBooks as LibraryBooksIcon,
    Add as AddIcon

} from '@material-ui/icons';
import AddQuestion from "./common/AddQuestions";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0px',
      margin: '0px',
      border: '0px',
    },
  };
const Content = (props) => {
    const [qstnScreen, setQstnScreen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => (
        setModalOpen(false)
    )
  const addquestion = () => {
      setQstnScreen(true);
      setModalOpen(true);
  }
    if (props.val === 'home') {
        return (
            <div>Home</div>
        )
    }
    if (props.val === 'registered-students') {
        return (
            <div>
                Registered Students
            </div>
        )
    }
    if (props.val === 'quiz-events') {
        return (
            <div>
                Quiz Events
            </div>
        )
    }
    if (props.val === 'add-questions') {
        return (
            <div>
                {
                    !qstnScreen ?
                        <div className="add-questiondiv">
                            <h2>Add Questions
                            </h2>
                            <div className="addquestions-quiztpye">
                                <h3> Select Quiz Event </h3>
                                <select className="quiztype-select">

                                </select>
                            </div>
                            <div className="t-addquestion-button">
                                <button className="t-addquestion-button"
                                    onClick={() => addquestion()}

                                >
                                    <AddIcon />
                                </button>
                            </div>

                        </div> :
                        <Modal
                            isOpen={modalOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            >
                            <AddQuestion />

                        </Modal>

                }
            </div>
        )
    }
    if (props.val === 'view-result') {
        return (
            <div>
                <h2>Result</h2>
                <Result/>

                </div>
        )
    }
    return null;
}
const Teacher = () => {
    const [content, setContent] = useState('')

    return (
        <div className="teacher-maindiv">
            <div className="teacher-nav">
                <h1>Teacher</h1>
            </div>
            <div className="teacher-homediv">
                <div className="teacher-sidebar">
                    <a onClick={() => setContent('home')} className="teacher-sidebarcontent">
                        <HomeIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Home</h5>
                    </a>
                    <a onClick={() => setContent('registered-students')} className="teacher-sidebarcontent">
                        <EmojiPeopleIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Registered Students</h5>
                    </a>
                    <a onClick={() => setContent('quiz-events')} className="teacher-sidebarcontent">
                        <MenuBookIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Quiz Events</h5>
                    </a>
                    <a onClick={() => setContent('add-questions')} className="teacher-sidebarcontent">
                        <QuestionAnswerIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}> Add Questions</h5>
                    </a>
                    <a onClick={() => setContent('view-result')} className="teacher-sidebarcontent">
                        <AccountCircleIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>View Result</h5>
                    </a>
                    <a href="/" className="teacher-sidebarcontent">
                        <ExitToAppIcon style={{ color: 'white' }} />
                        <h5 style={{ color: 'white' }}>Logout</h5>
                    </a>

                </div>
                <div className="teacher-content">
                    <Content val={content} />

                </div>


            </div>

        </div>

    )
}
export default Teacher;