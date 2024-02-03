const questions = ["When was I born?",
  "What is my father's name?",
  "What is my fifth name?",
  "Who is my favorite superhero?",
  "How tall am I?"
];
const choicesArray = [
  ["05.11.1997", "11.11.1998", "02.11.1997", "07.11.1998"],
  ["Luiz", "Ricardo", "Miriano", "Mario"],
  ["Ribeiro", "Santiago", "Silva", "Bastos"],
  ["Batman", "Black Panther", "Wolverine", "Spider-Man"],
  ["1.73m", "1.74m", "1.75m", "1.76m"]
];
const correctAnswers = ["02.11.1997", "Mario", "Ribeiro", "Wolverine", "1.74m"];

const backgroundImg = [
  "../img/illustration_01.png",
  "../img/aboutMe_02.j",
  "../img/aboutMe_03.j",
  "../img/illustration_04.png",
  "../img/aboutMe_05.j"
];
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById('question').innerHTML = questions[currentQuestionIndex];

    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i+1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
    }

    
    const novaImagem = backgroundImg[currentQuestionIndex];
    document.getElementById('img').src= novaImagem;

    if (document.getElementById('img').src.endsWith("img/illustration_04.png")) {
      document.getElementById("superhero").classList.remove("hidden");
    }
    else{
      document.getElementById("superhero").classList.add("hidden");
    }
  } else {
    document.getElementById('result').innerHTML =
      `You scored ${score} out of ${questions.length}!`;
    document.getElementById('question').innerHTML = "";
    document.getElementById('choices').innerHTML = "";
  }
}


function checkAnswer(button) {
  if (button.value === correctAnswers[currentQuestionIndex]) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}
displayQuestion();