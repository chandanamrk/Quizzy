const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const exitButton = document.getElementById('exit-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)    
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    exitButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e,r) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
     }else {
         element.classList.add('wrong')
     }
    }
function result(r){
    r==0
    if (correct) {
        r = r + 1
    }
    return r
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    element.classList.remove('result')
}

const questions = [
    {
        question: 'How many stanzas were adopted as the national anthem of India from Rabindranath Tagores “Jana Gana Mana”?',
        answers: [
            { text: '1 stanza', correct: true },
            {text: '3 stanzas', correct: false},
            {text: '2 stanzas', correct: false},
            {text: '4 stanzas', correct: false}
        ]
    },
    {
        question: "What is the length to the width ratio of Indias national flag?",
        answers: [
            { text: '2:1', correct: false },
            {text: '1:2', correct: false},
            {text: '3:2', correct: true },
            {text: '2:3', correct: false}

        ]
    },

    {
        question: "Which river does not originate in India? ",
        answers: [
            { text: 'Ganaga', correct: false },
            {text: 'Bramhaputra', correct: true },
            {text: 'Yamuna', correct: false},
            {text: 'Kaveri', correct: false}
            
        ]
    },
    {
        question: "How many spokes are present in the Ashok chakra? ",
        answers: [
            { text: '25', correct: false },
            {text: '24', correct: true },
            {text: '20', correct: false},
            {text: '30', correct: false}
            
        ]
    },
    {
        question: "Delhi is situated on which river? ",
        answers: [
            { text: 'Ganaga', correct: false },
            {text: 'Bramhaputra', correct: false },
            {text: 'Kaveri', correct: false},
            {text: 'Yamuna', correct: true}

        ]
    },
    {
        question: "Where is the worlds only floating post office is situated? ",
        answers: [
            {text: 'Srinagar', correct: true },
            { text: 'Jaipur', correct: false },
            {text: 'Mumbai', correct: false},
            {text: 'Chennai', correct: false}

        ]
    },
    {
        question: "Which Indian physicist won a Nobel prize? ",
        answers: [
            { text: 'Homi Bhabha', correct: false },
            {text: 'Vikram Sarabhai', correct: false},
            {text: 'Sir C.V. Raman', correct: true },
            {text: 'Satyendra Nath Bose', correct: false}

        ]
    },
    {
        question: "Who wrote the national song of India?  ",
        answers: [
            { text: 'Rabindranath Tagore', correct: false },
            {text: 'Bankimchandra Chatterji', correct: true },

        ]
    },
    {
        question: "What is the national song of India?  ",
        answers: [
            { text: 'Sare Jahan Se Achha', correct: false },
            {text: 'Vande Mataram', correct: true },
            {text: 'Jana Gana Mana', correct: false},
            {text: 'Ekla Chalo', correct: false}

        ]
    },
    {
        question: "'Madhubani', a style of folk paintings, is popular in which of the following states in India?",
        answers: [
            {text: 'Bihar', correct: true },
            { text: 'Uttar Pradesh', correct: false },
            {text: 'Rajasthan', correct: false},
            {text: 'Bengal', correct: false}

        ]
    },
]