const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
var questionButton = document.getElementById("question-container");
// Get the highscore form details to hide if score is above 90% and enable certificate download option
var form = document.getElementById("highScoreForm");
// Get banner details to display the appropriate one
var noCert = document.getElementById("noCert");
var yesCert = document.getElementById("yesCert");
finalScore.innerText = mostRecentScore;
let saveHighScore;

const maxScore = 160;

//Local storarge only save data in key value pair in the string format.
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// max display top 5 results in the high scores tab
const MAX_HIGH_SCORES = 5;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    //here if b is above a, put b before a . => has an implicit return so you dont need a return fn
    highScores.sort((a, b) => b.score - a.score);

    // max display top 5 results
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('../');
};

let totalScore = finalScore.innerText
// current cut off is 90% . Options and labels are enabled/disabled based on the cut off scores. 
function createCertificate(totalScore,maxScore) {
    if (((totalScore/maxScore)*100) >= 90){
        certificate.classList.remove("hide");
        form.classList.add("hide");
        yesCert.classList.remove("hide");
        noCert.classList.add("hide");
    }

}
createCertificate(totalScore,maxScore) ;