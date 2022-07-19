// const { listenerCount } = require('events');
// const { request, response } = require('express');
// const express = require('express');
// var Sequelize = require('sequelize');
// var router = express.Router();
// const db = require('../models/index');
// const quiz = db.Quizquestions;

// router.post('/quiz-questions', async(request, response) =>{
//     const { eventDetails, question, options, answer } = request.body;
//     try{
//         const result = await quiz.create({
//             eventDetails,
//             question,
//             options,
//             answer
//         });
//         if (result) {
//             response.send({ 
//                 success: true,
//                 message: 'question added Successfully',
//             });
//         }    
//     } catch (err) {
//         console.log('err', err);
//     }
// });
// router.get('/question-list', async(request, response) => {
//     try{
//         const questionList = await quiz.findAll();
//         if(questionList){
//             response.send({
//                 success: true,
//                 questions: questionList
//             })
            
//         }
//     } catch(err){
//         console.log("err", err);
//     }
// })

// module.exports = router; 