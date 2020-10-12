import {Quiz,QuestionType} from './../Types/Quiz_type' ;

export const getData = async () :Promise <QuestionType[]> => {
        const res = await fetch('https://opentdb.com/api.php?amount=7')
        const {results} = await res.json()
        const quiz:QuestionType[] = results.map((questionObj : Quiz) =>{
                return{
                        question : questionObj.question,
                        answer: questionObj.correct_answer,
                        option : questionObj.incorrect_answers.concat(questionObj.correct_answer).sort()
                }
        })
        return quiz
}