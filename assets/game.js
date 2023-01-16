const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
//const questionCounterText = document.getElementById("questionCounter");
const wrongAns = document.getElementById("wrongAns")
const rightAns = document.getElementById("rightAns")
var timeLeft = 300;
var timerID;
var timerEl = document.getElementById("timer");

wrongAns.style.opacity = 0;
rightAns.style.opacity = 0;

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

function showAlert() {
    var myText = "Sorry, You have ran out of time. Better luck next time!";
    alert (myText);
  }
//timer
function timeTick() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
        //go to the end page
        showAlert()
        return window.location.assign('../index.html');
    }
}

fetch('questions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

//CONSTANTS
//Score earned per correct answer
const CORRECT_BONUS = 10;




startGame = () => {
    //run every 1 second
    timerID = setInterval(timeTick, 1000);
    questionCounter = 0;
    score = 0;
    timeTick();
    //... spread out the questions into an array  
    availableQuesions = [...questions];
    // max questions determined based on length of the array 
    MAX_QUESTIONS = availableQuesions.length
    getNewQuestion();
};

getNewQuestion = () => {
    // if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('end.html');
    }
    rightAns.style.opacity = 0;
    wrongAns.style.opacity = 0;
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    //     select random questions 
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    // remove used questions 
    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
    //const classToApply = 'incorrect' ;
    // if (selectedAnswer == currentQuestion.answer) {
    //    classToApply = 'correct';
    //} 
        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            wrongAns.style.opacity = 0;
            rightAns.style.opacity = 1;
            incrementScore(CORRECT_BONUS);
        } else {
            rightAns.style.opacity = 0;
            wrongAns.style.opacity = 1;  
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};
