//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 600;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Corporate ethics is only necessary when there are incomplete contracts.",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "1",
    question: "According to monistic business ethics, profit and morality are inherently in conflict.",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "3",
    question: "In a perfect economic order, corporate ethics would be redundant.",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "4",
    question: "Incomplete contracts allow for flexibility and adaptation to new conditions. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "5",
    question: "According to dualistic corporate ethics, competition and morality are mutually supportive. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "6",
    question: "Corporate ethics involves making recommendations for companies under given conditions. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "7",
    question: "The term (business ethics) generally refers to moral rules governing the actions of individuals in business. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "8",
    question: "Incentive-compatible implementability suggests that ethical actions should align with self-interest. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "9",
    question: "Monistic corporate ethics emphasizes the integration of economic interests with ethical demands. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "10",
    question: "Regulatory responsibility involves businesses following all statutory laws and regulations. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "11",
    question: "Reputation is an economically relevant factor in risk management for businesses. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "12",
    question: "Corporate Social Responsibility (CSR) is part of broader business ethics considerations. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "13",
    question: "Descriptive ethics evaluates actions based on moral correctness. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "14",
    question: "Consumer boycotts are a possible consequence of unethical business actions. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "15",
    question: "The goal of corporate ethics is solely to maximize shareholder profit. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "16",
    question: "Behavioral responsibility includes compliance with legal standards and cultural norms. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "17",
    question: "Metaethics addresses the cultural relativity of moral judgments. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "18",
    question: "Corporate ethics can help companies make moral decisions before laws are enacted. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "19",
    question: "The reputation of a company plays no role in its ability to mitigate contractual uncertainties. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "20",
    question: "In dualistic corporate ethics, competition and morality are thought to be identical. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "21",
    question: "Teleological ethics judges actions based on their motives alone. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "22",
    question: "Ethics and morality are used synonymously in common language. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "23",
    question: "Normative ethics is concerned with evaluating and determining what moral behaviors should be, rather than merely describing them. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "24",
    question: "Incomplete contracts are not a factor in business ethics considerations. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "25",
    question: "Corporate Citizenship is another term for Corporate Social Responsibility. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "26",
    question: "Consequentialist ethics evaluates the effects of actions to determine moral correctness. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "27",
    question: "Dualistic corporate ethics treats competition and morality as incompatible. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "28",
    question: "Corporate ethics focuses on regulatory responsibilities alone. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "29",
    question: "The Steinmann company succeeded due to its commitment to moral practices. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "30",
    question: "According to business ethics, actions should ultimately benefit both the actor and society. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "31",
    question: "Companies are encouraged to participate in public discourse according to discursive responsibility. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "32",
    question: "Normative ethics requires consent and compliance to be effective. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "33",
    question: "According to monistic corporate ethics, moral actions should align with company interests. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "34",
    question: "Corporate ethics plays a significant role in risk management for companies. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "35",
    question: "The invisible hand principle suggests that individual actions can unintentionally benefit society. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "36",
    question: "Corporate ethics can help companies avoid risks associated with moral missteps. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "37",
    question: "Adam Smith’s invisible hand theory opposes the concept of business ethics. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "38",
    question: "Homann’s consistency postulate suggests companies should act against their interests for ethics. ",
    options: ["true", "false",],
    correct: "false",
  },
  {
    id: "39",
    question: "Compliance is a component of behavioral responsibility in corporate ethics. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "40",
    question: "Morality in corporate ethics often involves consideration for long-term reputation. ",
    options: ["true", "false",],
    correct: "true",
  },{
    id: "41",
    question: "Business ethics can help companies proactively address changes in technology. ",
    options: ["true", "false",],
    correct: "true",
  },
  {
    id: "42",
    question: "In monistic corporate ethics, economic interests are considered important, and ethical demands should ideally align with these interests. ",
    options: ["true", "false",],
    correct: "false",
  },{
    id: "43",
    question: "Corporate ethics aims to mitigate uncertainties related to incomplete contracts. ",
    options: ["true", "false",],
    correct: "true",
  },{
    id: "44",
    question: "A teleological approach to ethics focuses on the consequences of actions rather than solely on intentions. ",
    options: ["true", "false",],
    correct: "true",
  },{
    id: "45",
    question: "Businesses can pursue both moral goals and profit-driven objectives concurrently. ",
    options: ["true", "false",],
    correct: "true",
  },{
    id: "46",
    question: "Corporate ethics can be understood as ethics specific to the business context. ",
    options: ["true", "false",],
    correct: "true",
  },{
    id: "47",
    question: "The concept of “too big to fail” can create incentives for high-risk behavior in companies. ",
    options: ["true", "false",],
    correct: "true",
  },{
    id: "48",
    question: "In monistic ethics, corporate social responsibility is a risk management tool. ",
    options: ["true", "false",],
    correct: "true",
  },{
    id: "49",
    question: "Corporate ethics requires companies to consider public expectations and societal norms. ",
    options: ["true", "false",],
    correct: "false",
  },{
    id: "50",
    question: "Normative ethics includes behavioral, teleological, and consequentialist ethics. ",
    options: ["true", "false",],
    correct: "true",
  }
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 600;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {

    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 600;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
