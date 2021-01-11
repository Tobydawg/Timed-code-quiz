const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')





let strTimer 
let shuffledQuestions, currentQuestionIndex
var gameScore = 0;


startButton.addEventListener('click', startGame,)
nextButton.addEventListener('click', () => {
    
    
    setNextQuestion()
})

function startGame(){
    
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    
    
    setNextQuestion()
}





function setNextQuestion() {
    resetState()
    currentQuestionIndex++
    showQuestion(shuffledQuestions[currentQuestionIndex])
    strTimer=setTimeout(setNextQuestion, 10000)
}


 function  showQuestion(question){
        questionElement.innerText = question.question
        question.answers.forEach(answer =>
             {
            const button = document.createElement('button')
            button.innerText=answer.text
            button.classList.add('btn')

            button.dataset.correct = answer.correct; 

            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button)
        })
 }




    function resetState(){
        nextButton.classList.add('hide')
        
        while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }

 }
 


 function selectAnswer(e){
    clearTimeout(strTimer);
     const selectedButton = e.target
     const correct = selectedButton.dataset.correct
     setStatusClass(document.body, correct)
     changeScore(correct)
     Array.from(answerButtonsElement.children).forEach(() => {
            setStatusClass(this, this.dataset.correct)

     })
     
     if (shuffledQuestions.length > currentQuestionIndex + 1){
     nextButton.classList.remove('hide')

    } else {

    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    }
 }

 function setStatusClass(element, correct){
    clearStatusClass(element)

if(correct){
    element.classList.add('correct')
} else {
    element.classList.add('wrong')
}
 }


 

function changeScore(correct){
    

if(correct){
 gameScore = gameScore + 1;
} else {
 gameScore = gameScore - 100;

    
}
document.getElementById("printscore").textContent = gameScore;
}








 function clearStatusClass (element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
    
 }


const questions = [
{
    question:'Lead Singer of Rolling Stones?',
    answers: [
        { text: 'Mick Jagger', correct:true},
        { text: 'Flavor Flav', correct: false},
        { text: 'Julio Iglesias', correct:false},
        { text: 'Brandon Flowers', correct: false}
    ]
},



{
    question:'Best Crypto?',
    answers: [
        { text: 'BTC', correct:false},
        { text: 'XRP', correct: false},
        { text: 'XLM', correct:true},
        { text: 'DOGECOIN', correct: false}
    ]
},

{
    question:'Best City?',
    answers: [
        { text: 'Chicago', correct:false},
        { text: 'San Antonio', correct: false},
        { text: 'Los Angeles', correct:true},
        { text: 'Boston', correct: false}
    
    ]
},

{
    question:'how many hamburgers have you eaten in your life?',
    answers: [
        { text: '1', correct:true},
        { text: '2', correct: false},
        { text: '1,000,000', correct:false},
        { text: '1/2', correct: false}
    ]
},



{
    question:'How hard is javascript?',
    answers: [
        { text: 'super hard', correct:false},
        { text: 'easy', correct: false},
        { text: 'unlearnable', correct:true},
        { text: 'not sure', correct: false}
    ]
},

{
    question:'Square Root of a trillion dollars?',
    answers: [
        { text: 'all of the above', correct:false},
        { text: 'all of the below', correct: false},
        { text: 'the correct answer', correct:true},
        { text: 'A gazillion', correct: false}
    
    ]
}
]








 