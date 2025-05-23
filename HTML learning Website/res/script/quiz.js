document.addEventListener('DOMContentLoaded', function () {
  const questionPool = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], correctAnswer: 0, marks: 2 },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correctAnswer: 0, marks: 2 },
    { question: "What does JS stand for?", options: ["JavaScript", "Java Source", "Just Script"], correctAnswer: 0, marks: 4 },
    { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>"], correctAnswer: 0, marks: 4 },
    { question: "Which property is used to change the background color in CSS?", options: ["bgcolor", "background-color", "color"], correctAnswer: 1, marks: 4 },
    { question: "Which HTML tag is used to define an external JavaScript file?", options: ["<script src='file.js'>", "<link src='file.js'>", "<js src='file.js'>"], correctAnswer: 0, marks: 4 },
    { question: "How do you add a comment in CSS?", options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->"], correctAnswer: 1, marks: 2 },
    { question: "Which HTML tag is used to define an unordered list?", options: ["<ul>", "<ol>", "<li>"], correctAnswer: 0, marks: 2 },
    { question: "Which property is used to change the font size in CSS?", options: ["font-size", "text-size", "font-style"], correctAnswer: 0, marks: 0 },
    { question: "Which HTML tag is used to define a hyperlink?", options: ["<a>", "<link>", "<href>"], correctAnswer: 0, marks: 4 },
    { question: "Which CSS property is used to change the text color?", options: ["color", "text-color", "font-color"], correctAnswer: 0, marks: 2 },
    { question: "Which HTML tag is used to define an image?", options: ["<img>", "<image>", "<src>"], correctAnswer: 0, marks: 2 },
    { question: "Which CSS property is used to change the text alignment?", options: ["text-align", "align-text", "text-position"], correctAnswer: 0, marks: 2 },
    { question: "Which HTML tag is used to define a table?", options: ["<table>", "<tr>", "<td>"], correctAnswer: 0, marks: 4 },
    { question: "Which CSS property is used to change the width of an element?", options: ["width", "height", "size"], correctAnswer: 0, marks: 2 },
    { question: "Which property is used to change the background color of an element?", options: ["background", "color", "background-color", "border-color"], correctAnswer: 2, marks: 4 },
    { question: "Which CSS property can be used to make a rounded border around an element?", options: ["border-radius", "border-style", "border-width", "outline-radius"], correctAnswer: 0, marks: 4 },
    { question: "Which of the following selectors has the highest specificity?", options: ["Class selector (e.g., .classname)", "ID selector (e.g., #idname)", "Type selector (e.g., div)", "Universal selector (e.g., *)"], correctAnswer: 1, marks: 4 },
    { question: "Which CSS property is used to add a border around an element?", options: ["border-style", "border-color", "border-width", "border"], correctAnswer: 3, marks: 4 },
    { question: "Which CSS property is used to define the spacing around an element’s border?", options: ["padding", "margin", "border-spacing", "outline-spacing"], correctAnswer: 1, marks: 4 },
    { question: "Which CSS property is used to apply rounded corners to an element?", options: ["border-radius", "border-style", "border-width", "border-color"], correctAnswer: 0, marks: 4 },
    { question: "Which of the following property changes the color of the left border?", options: [":border-top-color", ":border-left-color", ":border-right-color"], correctAnswer: 1, marks: 4 }
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const nextBtn = document.getElementById('next-btn');
  const scoreDisplay = document.getElementById('score-display');

  function displayQuestion() {
    const currentQuestion = questionPool[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option');
      button.onclick = () => handleAnswer(index);
      optionsContainer.appendChild(button);
    });

    nextBtn.disabled = true;
  }

  function handleAnswer(selectedIndex) {
    const currentQuestion = questionPool[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options.forEach((button, index) => {
      if (index === selectedIndex) {
        button.classList.add(index === currentQuestion.correctAnswer ? 'correct' : 'incorrect');
      } else if (index === currentQuestion.correctAnswer) {
        button.classList.add('correct');
      }
      button.disabled = true;
    });

    if (selectedIndex === currentQuestion.correctAnswer) {
      score += currentQuestion.marks;
    }

    scoreDisplay.textContent = `Score: ${score}`;
    nextBtn.disabled = false;
  }

  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionPool.length) {
      displayQuestion();
    } else {
      showResults();
    }
  });

  function showResults() {
    questionText.textContent = `Quiz complete! 🎉`;
    optionsContainer.innerHTML = `<p>Your final score is: ${score}</p>`;
    nextBtn.disabled = true;
  }

  // Start quiz
  displayQuestion();
});
