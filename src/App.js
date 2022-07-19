import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import ForgotPassword from './components/ForgotPassword';
import Questions from './components/Questions';
import Admin from './components/Admin';
import Teacher from './components/Teacher';
import Student from './components/Student';
import QuizEvents from './components/QuizEvents';
import ModalComponent from './components/modal';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/forgot-password" component={ForgotPassword}/>
        <Route exact path="/questions" component={Questions}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/teacher" component={Teacher}/>
        <Route exact path="/student" component={Student}/>
        <Route exact path="/quiz-events" component={QuizEvents}/>
        <Route exact path="/modal-component" component ={ModalComponent}/>
      </Switch>
    </BrowserRouter>
  )
}
export default App;
