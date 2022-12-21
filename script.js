const quizData = [
    {
        question: "How to create a function in JavaScript ?",
        a: "function = myFunction ()  { //Do something } ",
        b: "function myFunction ()   { //Do something }",
        c: "function: myFunction ()   { //Do something }",
        d: "function myFunction ( //Do something )",
        correct: "b"

    },{
        question: "How do you call a function named myFunction in Javascript?",
        a: "myFunction{};",
        b: "function myFunction();",
        c: "myFunction();",
        d: "myFunction;",
        correct: 'c'
    
    },{
        question: "Where in an HTML document is the correct place to refer to an internal style sheet?",
        a: "In the <body> section",
        b: "In the <head> section",
        c: "At the end of the document",
        d: "None of the above",
        correct: 'b'
    },{
        question: "what does html stand for?",
        a: "Hypertext Markup Language",
        b: "Hyperterm Markup Language",
        c: "Hypotext Markup Language",
        d: "Hypertext Makeup Language",
        correct: 'a'
    },{
        question: "what year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: 'b'
    },
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    

}

function getSelected() {
   

    let answer = undefined;
    
    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer =  answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer ){
     if(answer === quizData[currentQuiz].correct)
        score++;

        currentQuiz++;

        if (currentQuiz < quizData.length){
            loadQuiz();
         }else{
             quiz.innerHTML = `
             <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
             
             <button onclick="location.reload()">reload</button>`;
        }  

      }


    });