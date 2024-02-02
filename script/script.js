const questions = ["Em qual dia de novembro o seu escorpião favorito nasceu?",
  "E ele tem Pai... Qual o nome do pincel dessa obra de arte?",
  "Qual o meu quinto sobrenome?",
  "Qual o meu super heroi favorito?",
  "Qual a minha altura?"
];
const choicesArray = [
  ["05.11.1997", "11.11.1998", "02.11.1997", "07.11.1998"],
  ["Luiz", "Ricardo", "Miriano", "Mario"],
  ["Ribeiro", "Santiago", "Silva", "Bastos"],
  ["Batman", "Pantera Negra", "Wolverine", "Homem Aranha"],
  ["1.73m", "1.74m", "1.75m", "1.76m"]
];
const correctAnswers = ["02.11.1997", "Mario", "Ribeiro", "Wolverine", "1.74m"];

const backgroundImg = [
  "./img/aboutMe_01.jpg",
  "./img/aboutMe_02.jpg",
  "./img/aboutMe_03.jpg",
  "./img/aboutMe_04.jpg",
  "./img/aboutMe_05.jpg"
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