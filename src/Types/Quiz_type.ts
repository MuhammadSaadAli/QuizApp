import React from "react";

export type Quiz = {
    category: string
correct_answer: string
difficulty: string
incorrect_answers: string[]
question: string
type: string
}

export type  QuestionType = {
    question : string
    answer : string
    option : string[]
}

export type questionPropsTypes = {
    question: string
    options: string[]
    callBack : ( e:React.FormEvent<EventTarget>,selected:string ) => void
}