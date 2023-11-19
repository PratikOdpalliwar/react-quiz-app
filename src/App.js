import './App.css'
import { useState } from "react";

function App() {

  const questions = [
    {
      questionText: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "Javascript"],
      answer: "Javascript",
    },

    {
      questionText: "What does CSS stand for?",
      options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Central Simple Style"],
      answer: "Cascading Style Sheets",
    },
    {
      questionText: "What does HTML stand for?",
      options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Hypertext and links markup language"],
      answer: "Hypertext Markup Language",
    },

    {
      questionText: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "none of the above"],
      answer: "1995",
    },

  ]

        const [score, setScore] = useState(0);
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [showScore, setShowScore] = useState(false);

        const handleAnswerOptionClick = (option) => {
          if (option === questions[currentQuestion].answer) {
            setScore(score + 1)
          }
          
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
          } else {
            setShowScore(true);
          }
        }

        return (
          <div >
            {showScore ? (
              <div className="app">
                <div className="container"> <img className='img1' src= "img.jpg" />
                <div className="score-board">
                    
                <div className='small'>Your Score Is:</div>
                <div className='big'>{score}/{questions.length}</div> 
              </div>
                </div>
              </div>
             
            ) : (
              <div className="app">
          
              <div className="container">

                <img className='img1' src= "img.jpg" />

                <div className="question-count-area">
                  <div className="question-count">
                    <div>
                      Question 
                    </div> 
                    <span>{currentQuestion + 1}/{questions.length}</span>
                  </div>
                </div>

                  <div className="quiz-container">
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
              
                <div className="answer-section">
                  {questions[currentQuestion].options.map((option) => (
                    <button className='btn' key={option} onClick={() => handleAnswerOptionClick(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                </div>
              </div>
              </div>
            )}
          </div>
          
        );
      }

      export default App;