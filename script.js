const questions = [
  { q: "int a = 10;\na += 5;\nWhat is a?", a: 15 },
  { q: "int a = 7;\na -= 2;\nWhat is a?", a: 5 },
  { q: "int x = 4;\nx *= 3;\nWhat is x?", a: 12 },
  { q: "int y = 20;\ny /= 4;\nWhat is y?", a: 5 },
  { q: "int z = 9;\nz %= 4;\nWhat is z?", a: 1 },
  { q: "int p = 2;\np *= p;\nWhat is p?", a: 4 },
  { q: "int a = 5;\na += a;\nWhat is a?", a: 10 },
  { q: "int b = 12;\nb -= 6;\nWhat is b?", a: 6 },
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const resultBox = document.getElementById("result-box");
const scoreDisplay = document.getElementById("score-display");
const quizBox = document.getElementById("quiz-box");

function loadQuestion() {
  questionEl.innerHTML = questions[current].q.replace(/\n/g, "<br>");
  answerInput.value = "";
  feedbackEl.textContent = "";
}

function submitAnswer() {
  const userAns = parseInt(answerInput.value);
  const correctAns = questions[current].a;

  if (isNaN(userAns)) {
    feedbackEl.textContent = "⚠️ Please enter a number.";
    return;
  }

  if (userAns === correctAns) {
    feedbackEl.textContent = "✅ Correct!";
    score++;
  } else {
    feedbackEl.textContent = `❌ Wrong! Correct answer: ${correctAns}`;
  }

  setTimeout(() => {
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreDisplay.textContent = `Your score: ${score} out of ${questions.length}`;

  if (score === questions.length) {
    scoreDisplay.textContent += " 🎉 Excellent!";
  } else if (score >= 5) {
    scoreDisplay.textContent += " 👍 Good job!";
  } else {
    scoreDisplay.textContent += " 📘 Keep practicing!";
  }
}

function restartQuiz() {
  current = 0;
  score = 0;
  quizBox.classList.remove("hidden");
  resultBox.classList.add("hidden");
  loadQuestion();
}

window.onload = loadQuestion;
