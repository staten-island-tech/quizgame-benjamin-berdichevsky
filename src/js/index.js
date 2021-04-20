window.onload = init();
function init(){
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }
  const myQuestions = [
    {
      question: "Hi There Soccer Fan! This is a quiz for only the most supreme of all Soccer Fans. You must get all the questions correct to win the Ultimate Prize! Are you up for the Challenge?",
      answers: {
        a: 'yes',
        b: 'no',
      },
      correctAnswer: 'a'
    },
    {
      question: "Which one of these players doesn't play soccer anymore?",
      answers: {
        a: 'Zlatan Ibrahimovic',
        b: 'Andrés Iniesta',
        c: 'David Beckham'
      },
      correctAnswer: 'c'
    },
    {
      question: "What is the Name of the biggest England Soccer League?",
      answers: {
        a: 'EFL Championship',
        b: 'Premier League',
        c: 'Champions League'
      },
      correctAnswer: 'b'
    },
    {
      question: "Which of these players still plays for Barcelona after over 16 years of playing for the club?",
      answers: {
        a: 'Lionel Messi',
        b: 'Gerard Pique',
        c: 'Xavier Hernández Creus (Xavi)'
      },
      correctAnswer: 'a'
    },
    {
      question: "What Player out of these at some point played for Ireland in major Competitions?",
      answers: {
        a: 'Roy Keane',
        b: 'Didier Drogba',
        c: 'Jack Grealish'
      },
      correctAnswer: 'a'
    },
    {
      question: "Which of these teams won the Champions League the most ammount of times? (13 times!)",
      answers: {
        a: 'Liverpool FC',
        b: 'AC Milan',
        c: 'Real Madrid'
      },
      correctAnswer: 'c'
    },
    {
      question: "Who holds the record for the most Champions League Goals in a single season? (17 goals)",
      answers: {
        a: 'Robert Lewandowski',
        b: 'Lionel Messi',
        c: 'Cristiano Ronaldo'
      },
      correctAnswer: 'c'
    },
    {
      question: "Who holds the record for the most Champions League Goals? (134 goals!)",
      answers: {
        a: 'Robert Lewandowski',
        b: 'Lionel Messi',
        c: 'Cristiano Ronaldo'
      },
      correctAnswer: 'c'
    },
    {
      question: "What is the highest amount of goals anyone has scored in a Calendar Year?",
      answers: {
        a: '83',
        b: '99',
        c: '91'
      },
      correctAnswer: 'c'
    }

  ];

  // Kick things off
buildQuiz();

  // Event listeners
submitButton.addEventListener('click', showResults);
}

  