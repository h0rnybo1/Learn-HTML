document.addEventListener('DOMContentLoaded', function () {
  const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      correct: 0
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
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

  const questionContainer = document.getElementById('question-container');
  const submitBtn = document.getElementById('submit-btn');
  const resultContainer = document.getElementById('result-container');
  const scoreDisplay = document.getElementById('score');
  const retryBtn = document.getElementById('retry-btn');

  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerHTML = `
      <div class="question">
        <p>${currentQuestion.question}</p>
        ${currentQuestion.options.map((option, index) => `
          <label>
            <input type="radio" name="answer" value="${index}">
            ${option}
          </label>
        `).join('')}
      </div>
    `;
  }

  function handleSubmit() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      const answerIndex = parseInt(selectedOption.value);
      if (answerIndex === quizData[currentQuestionIndex].correct) {
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
    questionContainer.classList.add('hidden');
    submitBtn.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreDisplay.textContent = `You scored ${score} out of ${quizData.length}`;
  }

  function handleRetry() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    submitBtn.classList.remove('hidden');
    loadQuestion();
  }

  submitBtn.addEventListener('click', handleSubmit);
  retryBtn.addEventListener('click', handleRetry);

  loadQuestion();
});
