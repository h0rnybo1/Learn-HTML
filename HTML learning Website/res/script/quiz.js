// quiz.js

const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    correct: 0
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    correct: 0
  },
  {
    question: "What does JS stand for?",
    options: ["JavaScript", "Java Source", "Just Script"],
    correct: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.innerHTML = `<input type="radio" name="option" value="${index}"> ${option}`;
    optionsElement.appendChild(optionElement);
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const selectedValue = parseInt(selectedOption.value);
    if (selectedValue === quizData[currentQuestionIndex].correct) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  } else {
    alert('Please select an answer');
  }
}

function showResult() {
  questionElement.textContent = 'Quiz Completed!';
  optionsElement.innerHTML = '';
  submitButton.style.display = 'none';
  scoreElement.textContent = `Your score: ${score} out of ${quizData.length}`;
}

submitButton.addEventListener('click', checkAnswer);

loadQuestion();
