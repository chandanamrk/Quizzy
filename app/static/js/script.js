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
        question: 'In which country are the world’s 10 coldest cities located?',
        answers: [
            { text: 'Russia', correct: true },
            {text: 'Sweden', correct: false},
            {text: 'Canada', correct: false},
            {text: 'Ireland', correct: false}
        ]
    },
    {
        question: "Which country has three capital cities?",
        answers: [
            { text: 'United kingdom', correct: false },
            {text: 'South Africa', correct: true},
            {text: 'China', correct: false },
            {text: 'Chile', correct: false}

        ]
    },
    {
        question: "Which country technically spans 12 time zones?",
        answers: [
            { text: 'France', correct: true },
            {text: 'Russia', correct: false},
            {text: 'United kingdom', correct: false},
            {text: 'Spain', correct: false}

        ]
    },
    {
        question: "Which continent is home to the most countries?",
        answers: [
            { text: 'Europe', correct: false },
            {text: 'Africa', correct: false},
            {text: 'Australia', correct: false },
            {text: 'Asia', correct: true}

        ]
    },
    {
        question: "Which is the tallest stautue in the world? ",
        answers: [
            { text: 'Statue of liberty', correct: false },
            {text: 'Statue of unity', correct: true},
            {text: 'Statue of equality', correct: false },
            {text: 'Statue of Gautam Budha', correct: false}

        ]
    },
    {
        question: "Which is the world’s smallest island nation?",
        answers: [
            { text: 'Maldives', correct: false },
            {text: 'Barbados', correct: false},
            {text: 'Nauru', correct: true },
            {text: 'Malta', correct: false}

        ]
    },
    {
        question: "Which is the tallest mountain in the world? ",
        answers: [
            { text: 'Mount Everest', correct: true },
            {text: 'Mount Fuji', correct: false},
            {text: 'Mount Abu', correct: false},
            {text: 'Mount Killimanjaro', correct: false}

        ]
    },
    {
        question: "Which state has the highest population of Indian ethnic group of Black African descent called Siddi?",
        answers: [
            { text: 'Karnataka', correct: true },
            {text: 'Tamil Nadu', correct: false},
            {text: 'Gujarat', correct: false},
            {text: 'Rajasthan', correct: false}

        ]
    },
    {
        question:"Which of the following is the longest river that originates in India?",
        answers: [
            { text: 'Brahmaputra', correct: false },
            {text: 'Yamuna', correct: false},
            {text: 'Kaveri', correct: false },
            {text: 'Ganga', correct: true}

        ]
    },
    {
        question: "Which of the following region is located in the very high-risk zone of earthquakes?",
        answers: [
            { text: 'Coastal region', correct: false },
            {text: 'Central Indian highland', correct: false},
            {text: 'Himalayan region', correct: true },
            {text: 'Indean desert', correct: false}

        ]
    },

]