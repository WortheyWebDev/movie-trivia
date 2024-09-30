const triviaQuestions = [
    {
        question: "In \"Blade Runner,\" what is the name of the test used to identify replicants?",
        options: ["Turing Test", "Voight-Kampff Test", "Myers-Briggs Test", "Bechdel Test"],
        answer: "Voight-Kampff Test"
    },
    {
        question: "Who directed the film \"The Seventh Seal,\" which features a game of chess with Death?",
        options: ["Ingmar Bergman", "Stephen Spielberg", "Joel Schumacher", "Ridley Scott"],
        answer: "Ingmar Bergman"
    },
    {
        question: "In \"The Big Lebowski,\" what is the name of the bowling alley frequented by the main characters?",
        options: ["Kingpin Lanes", "Bowl America", "The Hollywood Star Lanes", "The Gutter"],
        answer: "The Hollywood Star Lanes"
    },
    {
        question: "Which film features the iconic line, \"I'm gonna make him an offer he can't refuse\?",
        options: ["Good Fellas", "The Wolf of Wall Street", "Casino", "The Godfather"],
        answer: "The Godfather"
    },
    {
        question: "In \"Psycho,\" what is the name of the motel where most of the film's events occur?",
        options: ["The Glade Motel", "The Overlook Motel", "The Beverly Wilshire Motel", "The Bates Motel"],
        answer: "The Bates Motel"
    },
    {
        question: "Who played Colonel Hans Landa in Quentin Tarantino's \"Inglourious Basterds\"?",
        options: ["Brad Pitt", "Christoph Waltz", "Eli Roth", "Michael Fassbender"],
        answer: "Christoph Waltz"
    },
    {
        question: "In \"The Truman Show,\" what is the name of the fictional town where Truman lives his life unaware it's a TV show?",
        options: ["Seahaven Island", "Moldaever Sound", "Peaks Island", "Pemrbooke"],
        answer: "Seahaven Island"
    },
    {
        question: "Which silent film star performed a famous clock tower stunt in the movie \"Safety Last!\"?",
        options: ["Groucho Marx", "Buster Keaton", "Charlie Chaplin ", "Harold Lloyd"],
        answer: "Harold Lloyd"
    },
    {
        question: "In \"Citizen Kane,\" what object is revealed to be \"Rosebud\" at the end of the film?",
        options: ["His Car", "His Sled", "His Memoir", "His Manor"],
        answer: "His Sled"
    },
    {
        question: "Who directed the 2000 film \"Memento,\" known for its non-linear storyline?",
        options: ["Stanley Kubrick", "Quentin Tarantino", "Christopher Nolan", "David Lynch"],
        answer: "Christopher Nolan"
    }
];

let question = document.getElementById('question-text');
let options = document.querySelectorAll('.answer');
let optionsContainer = document.getElementById('answer-section');
let j = 0;
let score = 0;

updateQuestionAndOptions();

options.forEach((option) => {
    option.addEventListener('click', function() {
        if (option.innerHTML == triviaQuestions[j].answer) {
            option.style.backgroundColor = "lightgreen";
            score += 1;
            setTimeout(() => {
                nextQuestion();
            }, 600);
        } else {
            option.style.backgroundColor = "red";
            setTimeout(() => {
                nextQuestion();
            }, 600);
        }
    });
});

function updateQuestionAndOptions() {
    question.innerHTML = triviaQuestions[j].question;
    let i = 0;
    options.forEach((option) => {
        if (triviaQuestions[j].options && triviaQuestions[j].options[i] !== undefined) {
            option.innerHTML = triviaQuestions[j].options[i];
            option.style.backgroundColor = "";
            i++;
        } else {
            option.innerHTML = "";
        }
    });
};

function nextQuestion() {
    j++;
    if (j < triviaQuestions.length) {
        updateQuestionAndOptions();
    } else {
        question.innerHTML = `Quiz complete! <br><br>You scored ${score} out of 10!`;
        optionsContainer.style.display = "none";
    }
}