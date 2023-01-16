const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//clear list
var clearScoreButton = document.getElementById("clear-btn");

 const displayHighscores = () => {
  let table = '<table border="1">';
  table += '<tr><th>ID</th><th>Score</th></tr>';
  highScores.forEach((highScores) => {
    table += `<tr>
                <td>${highScores.name}</td>
                <td>${highScores.score}</td>
              </tr>`;
  });
//  console.log(table); 
  table += '</table>';
  document.getElementById('highScoresList').innerHTML = table;
};

displayHighscores();
//highScoresList.innerHTML = displayMovies(highScores);
 
// Clear localStorage items 
clearScoreButton.addEventListener("click", function () {
  localStorage.clear();
  document.getElementById("highScoresList").innerHTML = "";
});