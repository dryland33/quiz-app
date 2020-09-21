/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */

/**
 * Model:
 */
const myQuiz = {
  currentQuestion: 0,
  correctTally: 0,
  percent: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%',],
  result: ['You\'re correct!', 'You\'re wrong!'],
  totalQuestions: 4,
  images: [
    "img/sun.jpg",
    "img/Uranus.jpg",
    "img/moon.jpg",
    "img/jupiter.jpg",
    "img/mars.jpg",
  ],
  trivia: [
    "Light travels at a speed of 299,792 kilometers per second; 186,287 miles per second. It takes 499.0 seconds for light to travel from the Sun to the Earth, a distance called 1 Astronomical Unit.",
    "Uranus is the seventh planet from the Sun, orbiting at a distance of 2.88 billion km. But it’s still much closer than Neptune, which averages a distance of 4.5 billion km from the Sun.",
    "The Moon has much weaker gravity than Earth, due to its smaller mass, so you would weigh about one sixth (16.5%) of your weight on Earth. This is why the lunar astronauts could leap and bound so high in the air.",
    "Jupiter’s interior is made of rock, metal, and hydrogen compounds. Below Jupiter’s massive atmosphere (which is made primarily of hydrogen), there are layers of compressed hydrogen gas, liquid metallic hydrogen, and a core of ice, rock, and metals.",
    "Mars has a very thin atmosphere. The resulting atmospheric pressure is only about 1% of that found at sea level on Earth. That is the equivalent pressure found at 35 km above the Earth’s surface.",
  ],
  questionList: [
    {
      question: "What is the sun mostly made up of?",
      answers: { a: "Uranium", b: "Oxygen", c: "Chromium", d: "Hydrogen" },
      correct: "d"
    },
    {
      question: "What is seventh planet in order of distance from the sun?",
      answers: { a: "Uranus", b: "Mars", c: "Jupiter", d: "Earth" },
      correct: "a"
    },
    {
      question: "What is Earth's nearest neighbor in space?",
      answers: { a: "Sun", b: "Jupiter", c: "Moon", d: "Mars" },
      correct: "c"
    },
    {
      question: "What is Jupiter mostly made of?",
      answers: { a: "Water", b: "Gas", c: "M&M's", d: "Rock" },
      correct: "b"
    },

    {
      question: "This 'red planet' is named after the Roman god of war.",
      answers: { a: "Jupiter", b: "Sun", c: "Venus", d: "Mars" },
      correct: "d"
    },
  ]
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
const generateLandingPage = function () {
  console.log('generateLandingPage()');
  return `
    <section class="intro" role="region">         
      <h1>How well do you know your solar system?</h1>
      <img src="img/nasa10.gif" alt="rotating astroid in GIF form">
      <button class="js-begin">Let's begin!</button>
    </section>
`;
};

const generateQuizQuestion = function (index) {
  console.log('generateQuizQuestion()');
  return `
    <section class="questionForms" role="region">
      <div class="progress">
        <div class="correctBar"></div>
        <div class="totalBar"></div>
      </div>
      <h3 id="question">${myQuiz.questionList[index].question}</h3>
      <form id="frmSubmit" action="#" class="js-question-submit">
        <label class="a">A.) <input type="radio" name="myAnswer" value="a"><span class="a1">${myQuiz.questionList[index].answers.a}</span></label><br>
        <label class="b">B.) <input type="radio" name="myAnswer" value="b"><span class="b2">${myQuiz.questionList[index].answers.b}</span></label><br>
        <label class="c">C.) <input type="radio" name="myAnswer" value="c"><span class="c3">${myQuiz.questionList[index].answers.c}</span></label><br>
        <label class="d">D.) <input type="radio" name="myAnswer" value="d"><span class="d4">${myQuiz.questionList[index].answers.d}</span></label><br>
        <button id="btnSubmit" type="submit" class="btn-submit">Submit</button>
      </form>
    </section>
  `;
};

const generateTrivia = function (index) {
  console.log('generateTrivia()');
  return `
    <section class="resultsPage" role="region"> 
      <div class="progress">
        <div class="correctBar"></div>
        <div class="totalBar"></div>
      </div>
      <h2 id="resultText"></h2>
      <img id="picTrivia" alt="Trivia image" src="${myQuiz.images[index]}">
      <p id="textTrivia">${myQuiz.trivia[index]}</p>
      <button class="next">Next Question</button>
      <button class="goToScore js-hidden">Show my Score</button>
    </section>
  `;
};

const generateResults = function () {
  console.log('generateResults()');
  return `
    <section class="end" role="region">
       <h1 id="score"></h1>
       <img id="scorepic" alt="reaction to your score">
       <button id="restart">Restart Quiz</button>
    </section>
  `;
};

/********** RENDER FUNCTION(S) **********/

// These functions conditionally replaces the contents of the <main> tag based on the state of myQuiz
const renderLandingPage = function () {
  myQuiz.currentQuestion = 0;
  console.log('renderLandingPage()');
  //generate HTML
  const landingPageString = generateLandingPage();
  //insert HTML into DOM
  $('.quiz').html(landingPageString);
};

const renderQuestion = function (index) {
  console.log('renderQuestion()');
  //generate HTML
  const quizQuestionString = generateQuizQuestion(index);
  //insert HTML into DOM
  $('.quiz').html(quizQuestionString);
};

const renderTrivia = function (index) {
  console.log('renderTrivia()');
  //generate HTML
  const triviaString = generateTrivia(index);
  //insert HTML into DOM
  $('.quiz').html(triviaString);
};

const renderResults = function () {
  console.log('renderResults()');
  //generate HTML
  const resultsString = generateResults();
  //insert HTML into DOM
  $('.quiz').html(resultsString);
};

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
const handleBeginQuizClicked = function () {
  console.log('handleBeginQuizClicked()');
  // this function will be responsible for when the users begins the quiz
  $('main').on('click', `.js-begin`, event => {
    event.preventDefault();
    //make the HTML for the first question and bind it to the DOM
    renderQuestion(myQuiz.currentQuestion);
  });
};

const handleSubmitClicked = function () {
  console.log('handleSubmitClicked()');
  // this function will be responsible for when the user answers a quiz question
  //listen for a click on the submit button
  $('main').on('click', `.btn-submit`, event => {
    event.preventDefault();
    // render the trivia page associated with the current question
    renderTrivia(myQuiz.currentQuestion);
  });
};

const handleNextQuestionClicked = function () {
  // This function displays the next question until 
  // we run out of questions and then it displays the results page.
  $('main').on('click', `.next`, event => {
    if (myQuiz.currentQuestion < myQuiz.totalQuestions) {
      myQuiz.currentQuestion++;
      renderQuestion(myQuiz.currentQuestion);
    } else {
      renderResults();
    }
  });
  console.log('handleNextQuestionClicked()');
};

const handleShowScoreClicked = function () {
  console.log('handleShowScoreClicked()');
};

const handleRestartClicked = function () {
  console.log('handleRestartClicked()');
  $('main').on('click', `#restart`, event => {
    renderLandingPage();
  });
};

// This function is our callback when the page loads.
// It is responsible for rendering the landing page and 
// activating functions the handle events on the page. 
const handleQuizzApp = function () {
  renderLandingPage();
  handleBeginQuizClicked();
  handleSubmitClicked();
  handleNextQuestionClicked();
  handleShowScoreClicked();
  handleRestartClicked();
};

// Call handleQuizzApp() when the page loads
$(handleQuizzApp);