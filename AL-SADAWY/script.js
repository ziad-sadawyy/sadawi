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
    question: "What is the primary focus of corporate ethics?",
    options: ["Normative framework conditions", "Recommendations for actions under given conditions", "Financial management", "Technological advancement"],
    correct: "Recommendations for actions under given conditions",
  },
  {
    id: "1",
    question: "How can ethics be integrated into the framework of economic interests?",
    options: ["By ignoring laws", "Through mechanisms like reputation", "By avoiding customer reactions", "By focusing solely on profits"],
    correct: "Through mechanisms like reputation",
  },
  {
    id: "3",
    question: "Why are complete rules in a globalized economy often undesirable?",
    options: ["They lead to reduced flexibility.", "They increase profits.", "They enhance customer loyalty.", "They make enforcement easier."],
    correct: "They lead to reduced flexibility.",
  },
  {
    id: "4",
    question: "What concept describes the inability of contracts to cover every possible scenario?",
    options: ["Incomplete contracts", "Moral contracts", "Ethical contracts", "Total contracts"],
    correct: "Incomplete contracts",
  },
  {
    id: "5",
    question: "What role does corporate ethics play in relation to incomplete contracts?",
    options: ["It enforces rigid compliance.", "It encourages exploitation.", "It reduces uncertainties.", "It promotes risk-taking."],
    correct: "It reduces uncertainties.",
  },
  {
    id: "6",
    question: "Dualistic corporate ethics sees morality and competition as:",
    options: ["The same", "Unrelated", "Opposites", "Unified goals"],
    correct: "Unified goals",
  },
  {
    id: "7",
    question: "What led to the bankruptcy of the textile company Steinmann?",
    options: ["Ethical neglect", "Overexpansion", "Increased competition from globalization", "Poor financial management"],
    correct: "Increased competition from globalization",
  },
  {
    id: "8",
    question: "Monistic corporate ethics attempts to:",
    options: ["Separate morality from profit", "Combine economic interests with ethical demands", "Prioritize profitability", "Eliminate ethical considerations"],
    correct: "Combine economic interests with ethical demands",
  },
  {
    id: "9",
    question: "How can morality become a factor in a company's risk management?",
    options: ["Through mechanisms like reputation", "By disregarding regulations", "By avoiding customer feedback", "By focusing solely on profit"],
    correct: "Through mechanisms like reputation",
  },
  {
    id: "10",
    question: "What does CSR stand for?",
    options: ["Corporate Social Responsibility", "Company System Reform", "Consumer Sales Revenue", "Cooperative Stakeholder Relations"],
    correct: "Corporate Social Responsibility",
  },
  {
    id: "11",
    question: "In behavioral responsibility, companies are responsible for:",
    options: ["Environmental laws", "International trade", "Government policies", "Product responsibility and corporate culture"],
    correct: "Product responsibility and corporate culture",
  },
  {
    id: "12",
    question: "Regulatory responsibility implies that companies should:",
    options: ["Comply only with local laws", "Help improve social or political orders", "Avoid legal disputes", "Ignore changes in technology"],
    correct: "Help improve social or political orders",
  },
  {
    id: "13",
    question: "Discourse responsibility requires companies to:",
    options: ["Minimize ethical considerations", "Ignore public discourse", "Focus solely on profitability", "Participate in the global conversation about society"],
    correct: "Participate in the global conversation about society",
  },
  {
    id: "14",
    question: "Normative ethics is primarily concerned with:",
    options: ["Describing what (is)", "Determining what (should be)", "Technical descriptions", "Metaethical theory"],
    correct: "Determining what (should be)",
  },
  {
    id: "15",
    question: "According to utilitarian ethics, actions are judged based on:",
    options: ["The greatest benefit for the majority", "Regulatory compliance", "Loyalty to customers", "Profit maximization"],
    correct: "The greatest benefit for the majority",
  },
  {
    id: "16",
    question: "Descriptive ethics focuses on:",
    options: ["Judging actions", "Explaining ethical systems", "Setting corporate policies", "Enforcing laws"],
    correct: "Explaining ethical systems",
  },
  {
    id: "17",
    question: "The concept of ethics originates from which language?",
    options: ["Sanskrit", "Latin", "German", "Ancient Greek"],
    correct: "Ancient Greek",
  },
  {
    id: "18",
    question: "The term ethics was translated into Latin as:",
    options: ["Mores", "Veritas", "Ethos", "Lex"],
    correct: "Mores",
  },
  {
    id: "19",
    question: "Which of the following is NOT an example of normative ethics?",
    options: ["Meta ethics", "Utilitarian ethics", "Teleological ethics", "Behavioral ethics"],
    correct: "Meta ethics",
  },
  {
    id: "20",
    question: "Metaethics is primarily concerned with:",
    options: ["Setting ethical rules", "Defining corporate structure", "Enforcing laws", "Exploring the foundations of ethical beliefs"],
    correct: "Exploring the foundations of ethical beliefs",
  },
  {
    id: "21",
    question: "Corporate Social Responsibility (CSR) is often part of:",
    options: ["Operational cost-cutting", "Only government policy", "Employee vacation planning", "A company's core business strategy"],
    correct: "A company's core business strategy",
  },
  {
    id: "22",
    question: "Incomplete contracts are characterized by:",
    options: ["Fully defined services", "High legal costs", "Flexibility and uncertainty", "Rigid compliance"],
    correct: "Flexibility and uncertainty",
  },
  {
    id: "23",
    question: "Business ethics is described as:",
    options: ["A type of ethics for the business sector", "Rules for family life", "Unrelated to economics", "Strictly about profitability"],
    correct: "A type of ethics for the business sector",
  },
  {
    id: "24",
    question: "Adam Smith's invisible hand refers to:",
    options: ["Social welfare programs", "Market monopolies", "The self-interest of actors promoting the common good", "Government regulation"],
    correct: "The self-interest of actors promoting the common good",
  },
  {
    id: "25",
    question: "Behavioral ethics primarily examines:",
    options: ["Consequences of actions", "Law enforcement", "Corporate social responsibility", "The actions themselves"],
    correct: "The actions themselves",
  },
  {
    id: "26",
    question: "What is the postulate of incentive-compatible implementability?",
    options: ["Companies should act against their interests for ethics", "Companies should ignore ethics if not profitable", "Ethical actions should align with self-interest", "Government mandates for companies to be ethical"],
    correct: "Ethical actions should align with self-interest",
  },
  {
    id: "27",
    question: "Collective reputation aids companies by:",
    options: ["Reducing flexibility", "Increasing opportunism", "Ensuring long-term reliability without strict contracts", "Avoiding customer transparency"],
    correct: "Ensuring long-term reliability without strict contracts",
  },
  {
    id: "28",
    question: "Corporate ethics differs from business ethics by:",
    options: ["Focusing on societal norms", "Ignoring ethical standards", "Setting government policies", "Addressing specific corporate actions"],
    correct: "Addressing specific corporate actions",
  },
  {
    id: "29",
    question: "Risk management in ethics is important because:",
    options: ["Unethical behavior can lead to consumer boycotts", "It reduces competition", "It guarantees profit", "It eliminates risk"],
    correct: "Unethical behavior can lead to consumer boycotts",
  },
  {
    id: "30",
    question: "Creating Shared Value involves:",
    options: ["Ignoring customer needs", "Cutting costs aggressively", "Prioritizing only shareholders", "Integrating ethical claims into strategy"],
    correct: "Integrating ethical claims into strategy",
  },
  {
    id: "31",
    question: "What is the origin of the word (Ethics)?",
    options: ["Latin and Greek", "Greek and French", "Latin and French", "Spanish and Greek"],
    correct: "Latin and Greek",
  },
  {
    id: "32",
    question: "Ethics is concerned with:",
    options: ["Legal rules only", "Technological advances", "Wealth accumulation", "Principles of right actions"],
    correct: "Principles of right actions",
  },
  {
    id: "33",
    question: "Ethics can also be seen as:",
    options: ["Legal mandates", "Academic requirements", "Financial guidelines", "Acceptable standards of behavior"],
    correct: "Acceptable standards of behavior",
  },
  {
    id: "34",
    question: "The relationship between an accountant and a client offers:",
    options: ["Simple tasks", "Financial independence", "Few challenges", "Numerous ethical challenges"],
    correct: "Numerous ethical challenges",
  },
  {
    id: "35",
    question: "Is it ethical for a senior auditor to:",
    options: ["Underreport hours worked", "Overreport hours worked", "Ignore hours worked", "Report exact hours"],
    correct: "Report exact hours",
  },
  {
    id: "36",
    question: "A critical look at ethics reveals that:",
    options: ["Ethics is variable", "Ethics is absolute", "Ethics is easy to define", "Ethics does not change"],
    correct: "Ethics is variable",
  },
  {
    id: "37",
    question: "Ethical behaviors that are backed by laws are:",
    options: ["Rule-based", "Principle-based", "Unregulated", "Flexible"],
    correct: "Rule-based",
  },
  {
    id: "38",
    question: "Ethical behaviors not backed by laws are often:",
    options: ["Unethical", "Irrelevant", "Rule-based", "Principle-based"],
    correct: "Principle-based",
  },
  {
    id: "39",
    question: "Ethical velocity refers to:",
    options: ["Rate of ethical implication consideration by individuals", "Rate of ethical development in society", "Speed of moral decline", "Rate of financial independence"],
    correct: "Rate of ethical implication consideration by individuals",
  },
  {
    id: "40",
    question: "Ethics in human relationships are usually:",
    options: ["Unimportant", "Optional", "Nonexistent", "Inevitable"],
    correct: "Inevitable",
  },{
    id: "41",
    question: "Ethical issues often arise in relationships because of:",
    options: ["Isolation", "Technology", "Financial gains", "Interaction among people"],
    correct: "Interaction among people",
  },
  {
    id: "42",
    question: "Ethics can also be defined as a set of:",
    options: ["Political guidelines", "Physical laws", "Moral principles", "Scientific theories"],
    correct: "Moral principles",
  },{
    id: "43",
    question: "The term (ethos) refers to:",
    options: ["Wealth", "Character", "Power", "Knowledge"],
    correct: "Character",
  },{
    id: "44",
    question: "An ethical code of ethics is:",
    options: ["Present in almost every profession", "A financial document", "Unnecessary", "Legal in nature"],
    correct: "Present in almost every profession",
  },{
    id: "45",
    question: "Ethics deals with the rightness or wrongness of:",
    options: ["Wealth acquisition", "Scientific research", "Intentions, actions, and decisions", "Physical fitnessO"],
    correct: "Intentions, actions, and decisions",
  },{
    id: "46",
    question: "Philosophers define ethics as:",
    options: ["An economic principle", "A religious mandate", "Ideal sets of moral principles or values", "Legal codes"],
    correct: "A religious mandate",
  },{
    id: "47",
    question: "Ethics guides individuals in:",
    options: ["Financial planning", "Avoiding relationships", "Governing their behavior", "Choosing a profession"],
    correct: "Governing their behavior",
  },{
    id: "48",
    question: "Accepting gifts from a client as an accountant may:",
    options: ["Compromise independence", "Strengthen the relationship", "Be legally required", "Show gratitude"],
    correct: "Compromise independence",
  },{
    id: "49",
    question: "Ethical behaviors based on society’s laws are:",
    options: ["Rule-based", "Unethical", "Customary", "Arbitrary"],
    correct: "Rule-based",
  },{
    id: "50",
    question: "In ethics, the (good) refers to:",
    options: ["Financial success", "Values and virtues to cultivate", "Following social trends", "Achieving popularity"],
    correct: "Values and virtues to cultivate",
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
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
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
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
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
