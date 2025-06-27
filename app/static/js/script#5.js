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
        question: "Which of the following should you do to restrict access to your files and devices?",
        answers: [
            { text: 'Use multi-factor authenttication', correct: true },
            {text: 'Update your software once a year', correct: false},
            {text: 'Share passwords only with colleagues you trust', correct: false},
            {text: 'Have your staff members access information via an open Wi-Fi network.', correct: false}
        ]
    },
    {
        question: "Which of the following is the best answer for how to secure your router?",
        answers: [
            { text: 'Change the default name and password of the router', correct: false },
            {text: "Turn off the router's remote management" , correct: false},
            {text: 'Log out as the administrator once the router is set up', correct: false },
            {text: 'All of the above', correct: true}

        ]
    },

    {
        question: "If you fall for a phishing scam, what should you do to limit the damage?",
        answers: [
            { text: 'Delete the phishing email.', correct: false },
            {text: 'Change any compromised passwords', correct: true },
            {text: 'Unplug the computer. This will get rid of any malware.', correct: false},
            {text: 'None of these', correct: false}
            
        ]
    },
    {
        question: "What does the 'https://' at the beginning of a URL denote, as opposed to 'http://' (without the “s”)?",
        answers: [
            { text: 'That the site has special high definition', correct: false },
            {text: 'That information entered into the site is encrypted', correct: true },
            {text: 'That the site is not accessible to certain computers', correct: false},
            {text: 'That the site is the newest version available', correct: false}
            
        ]
    },
    {
        question: "A group of computers that is networked together and used by hackers to steal information is called a …",
        answers: [
            { text: 'Botnet', correct: true },
            {text: 'Rootkit', correct: false },
            {text: 'DDoS', correct: false},
            {text: 'Operating system', correct: false}

        ]
    },
    {
        question: "Which of the following four passwords is the most secure?",
        answers: [
            {text: 'WTh!5Z', correct: true },
            { text: 'into*48', correct: false },
            {text: 'Boat123', correct: false},
            {text: '123456', correct: false}

        ]
    },
    {
        question: "Criminals access someone’s computer and encrypt the user’s personal files and data. The user is unable to access this data unless they pay the criminals to decrypt the files. This practice is called …",
        answers: [
            { text: 'Botnet', correct: false },
            {text: 'Driving', correct: false},
            {text: 'Ransomware', correct: true },
            {text: 'Spam', correct: false}

        ]
    },
    {
        question: "Backing up important files offline, on an external hard drive or in the cloud, will help protect your business in the event of a cyber attack. True or False?",
        answers: [
            { text: 'True', correct: true },
            {text: 'False', correct: false },

        ]
    },
    {
        question: "What kind of cybersecurity risks can be minimized by using a Virtual Private Network (VPN)?",
        answers: [
            { text: 'Use of insecure Wi-Fi networks', correct: false },
            {text: 'De-anonymization by network operators', correct: true },
            {text: 'Key-logging', correct: false},
            {text: 'Phishing attacks', correct: false}

        ]
    },
    {
        question: "Which of these answers describes the best way to protect against tech support scams?",
        answers: [
            {text: 'All of these.', correct: true },
            { text: 'Use a unique password for each account.', correct: false },
            {text: 'Scan your computer for any unknown software.', correct: false},
            {text: 'Hang up on callers who say your computer has a problem.', correct: false}

        ]
    },
]