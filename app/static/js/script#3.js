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
        question: "Who wrote the line: ' A thing of beauty is a joy forever'?",
        answers: [
            {text: 'Robert Browing', correct: false},
            { text: 'John Keats', correct: true },
            {text: 'P.B. Shelley', correct: false},
            {text: 'William Wordsworth', correct: false}
        ]
    },
    {
        question: "The famous book 'Anandmath' was authored by?",
        answers: [
            { text: 'Sarojini Naidu', correct: false },
            {text: 'Sri Aurobindo', correct: false},
            {text: 'Bankim Chandra Chottapadhya', correct: true },
            {text: 'Rabindranath Tagore', correct: false}

        ]
    },

    {
        question: "Author of the famous book 'Alice in Wonderland' is? ",
        answers: [
            { text: 'Father Discoste', correct: false },
            {text: 'Thomas Hardy', correct: false},
            {text: 'Charles Dickens', correct: false},
            {text: 'Lewis Caroll', correct: true },
            
        ]
    },
    {
        question: "Who is the author of the book 'My Experiments with Truth'? ",
        answers: [
            { text: 'Michael Anderson', correct: false },
            {text: 'Mahatma Gandhi', correct: true },
            {text: 'Winston Churchill', correct: false},
            {text: 'Jarnes Morris', correct: false}
            
        ]
    },
    {
        question: "Who is the writer of 'Swamy and Friends'? ",
        answers: [
            {text: 'R. K. Narayan', correct: true},
            { text: 'Munshi Premchand', correct: false },
            {text: 'Max Muller', correct: false },
            {text: 'Raman', correct: false},

        ]
    },
    {
        question: "Select the novel which is written by Arundhati Roy? ",
        answers: [
            { text: 'Malgudi Days', correct: false },
            {text: 'What Went Wrong', correct: false},
            {text: 'God of Small Things', correct: true },
            {text: 'The Sikhs', correct: false}

        ]
    },
    {
        question: "Who is the author of the Harry Potter Series? ",
        answers: [
            { text: 'Charles Dickens', correct: false },
            {text: 'J. K. Rowling', correct: true},
            {text: 'Nick Middleton', correct: false },
            {text: 'Edward Klein', correct: false}

        ]
    },
    {
        question: "Which author created the famous character 'Sherlock Holmes'? ",
        answers: [
            { text: 'Agatha Christie', correct: false },
            {text: 'Arthur Conan Doyle', correct: true },

        ]
    },
    {
        question: "Who wrote the book Discovery of India? ",
        answers: [
            { text: 'Sardar Patel', correct: false },
            {text: 'Jawaharlal Nehru', correct: true },
            {text: 'Atal Bihari Vajpayee', correct: false},
            {text: 'Mahatma Gandhi', correct: false}

        ]
    },
    {
        question: "Who wrote the book Panchtantra?",
        answers: [
            {text: 'Vishnu Sharma', correct: true },
            { text: 'Kalidas', correct: false },
            {text: 'Tulsidas', correct: false},
            {text: 'Prem Chand', correct: false}

        ]
    },
]