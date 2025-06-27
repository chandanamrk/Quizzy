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
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        answers: [
            { text: 'largest railway station', correct: true },
            {text: 'highest railway station', correct: false},
            {text: 'longest railway station', correct: false},
            {text: 'None', correct: false}
        ]
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        answers: [
            { text: 'Physics and Chemistry', correct: false },
            {text: 'Physiology or Medicine', correct: false},
            {text: 'Literature, Peace and Economics', correct: false },
            {text: 'All of the above', correct: true}

        ]
    },
    {
        question: "Hitler party which came into power in 1933 is known as",
        answers: [
            { text: 'Labour Party', correct: false},
            {text: 'Nazi Party', correct: true},
            {text: 'Hitler party', correct: false},
            {text: 'Democratic Party', correct: false}

        ]
    },
    {
        question: "How many official languages does india have?",
        answers: [
            { text: '2', correct: false },
            {text: '24', correct: false},
            {text: '28', correct: false },
            {text: '22', correct: true}

        ]
    },
    {
        question: "First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in",
        answers: [
            { text: '1967', correct:true},
            {text: '1968', correct:false},
            {text: '1958', correct:false},
            {text: '1922', correct:false}

        ]
    },
    {
        question: "Exposure to sunlight helps a person improve his health because",
        answers: [
            { text:'the infrared light kills bacteria in the body', correct:false},
            {text: 'resistance power increases', correct:false},
            {text: 'the pigment cells in the skin get stimulated and produce a healthy tan', correct:false},
            {text: 'the ultraviolet rays convert skin oil into Vitamin D', correct:true}

        ]
    },
    {
        question: "The members of the Rajya Sabha are elected by",
        answers: [
            { text: 'the people', correct:false},
            {text: 'Lok sabha', correct:false},
            {text: 'elected members of the legislative assembly', correct:true},
            {text: 'elected members of the legislative council', correct:false}

        ]
    },
    {
        question: "'OS' computer abbreviation usually means ?",
        answers: [
            { text: 'Operating system', correct: true },
            {text: 'Open software', correct: false},
            {text: 'Optical Sensor', correct: false},
            {text: 'Order of significance', correct: false}

        ]
    },
    {
        question:"The power to decide an election petition is vested in the",
        answers: [
            { text: 'Parliament', correct:false},
            {text: 'Supreme court', correct:false},
            {text: 'High courts', correct:true},
            {text: 'Election Commision', correct:false}

        ]
    },
    {
        question: "Who is the first Indian woman to win an Asian Games gold in 400m run?",
        answers: [
            { text: 'M.L.Valsamma', correct: false },
            {text: 'Kamalijit Sandhu', correct:true},
            {text: 'P.T.Usha', correct:false},
            {text: 'K.Malleshwari', correct: false}

        ]
    },

]