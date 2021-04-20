console.log("connected");
function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
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
  
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      const output = [];
      const answers = [];
  
      // for each question...
      for(const i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      const userAnswer = '';
      const numCorrect = 0;
      
      // for each question...
      for(const i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }

  