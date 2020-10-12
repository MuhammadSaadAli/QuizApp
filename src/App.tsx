
import React, { useEffect, useState } from 'react';
import './App.css';
import QuestionCard from './Components/Questions'
import Button from '@material-ui/core/Button';
import {getData} from './Services/QuizApi'
import {QuestionType} from './Types/Quiz_type' ;
import  'animate.css'


function App() {
  const [quiz,setQuiz] = useState<QuestionType[]>([])
  const [currentStep,setCurrentStep] = useState(0)
  const[startQuiz, setStartQuiz] = useState('')
  let [score,setScore] = useState(0)
  
  useEffect( ()=>{
    async function fetchData() {
      const questions:QuestionType[] = await  getData() 
      
      setQuiz(questions)   
    } fetchData()
  } ,[] )

  // Make Function to start Quiz
  const Start = ()=>{

   setStartQuiz('Start') 
   setCurrentStep(0)
  setScore(0)
  }

  // Make a handle submit event and bring the chosen answer from the Question Component

      const handleSubmit = (e:React.FormEvent<EventTarget>,userAns:string) =>{
        
        const currentQuestion = quiz[currentStep]
        e.preventDefault()
        // Matching the answer whether it is correct or wrong
        if(userAns === currentQuestion.answer) {
          setScore(++score )
          console.log(score)
        }
        // Increasing the step
        if(currentStep !== quiz.length -1 ){
          setCurrentStep( currentStep + 1)
        } 
        // End 
        else {
          // alert(`Your score is ${score* 10} / ${quiz.length * 10}`)

          // setCurrentStep(0)
          // setScore(0)
          setStartQuiz('End')
        }
      }
          
      if(!quiz.length)
      return <h1>Loading ...... </h1>
      
      if(startQuiz === 'Start'){
        return (
          <div className="App">
                <QuestionCard options={quiz[currentStep].option} 
                question={quiz[currentStep].question}
                callBack={handleSubmit}/>
          </div>
        );
      }
      else if (startQuiz==='End'){
        return (
        <div className='App'>
          <h1 className='animate__animated animate__bounce'>
            Quiz Has been Ended
          </h1>
          <br/>
          <h3 className='animate__animated animate__backInRight'>
          Your score is {score* 10} out of {quiz.length * 10}
          </h3>
          <br/> <br/>
          <h4 className='animate__animated animate__backInLeft'>
            click on this button to start again
          </h4>
          <br/>
          <Button className='animate__animated animate__backInUp' onClick={Start} variant="contained" color="secondary">
                Start Again
              </Button>
        </div>
        
        )

      }
      else {
        return(
          <div className='App'>
            <h1 className='animate__animated animate__bounce'>
              Click this Button to start the Quiz
            </h1>
            <br />

            <Button className='animate__animated animate__backInUp' onClick={Start} variant="contained" color="primary">
                Start The Quiz
              </Button>
          
          </div>
        )
      }
      

  
}

export default App;
