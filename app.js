const quizSelector = document.getElementById("quiz-selector");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const answerButtonsContainer = document.getElementById("answer-buttons-container");
const resultContainer = document.getElementById("result-container");


class Quiz{
    constructor(questions){
        this.questions = Quiz.shuffleArray(questions);
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    displayQuestion(){
        answerButtonsContainer.innerHTML = "";
        const currentQuestion = this.questions[this.currentQuestionIndex];
        questionContainer.textContent = currentQuestion.question;
        const answer = Quiz.shuffleArray(currentQuestion.answers);
        answer.forEach(answer => {
            const button = document.createElement("button");
            button.classList = ["answer-button"];
            button.textContent = answer;
            button.addEventListener("click",this.checkAnswer.bind(this));
            answerButtonsContainer.appendChild(button);
        })
    }
    checkAnswer(event){
        const selectedAnswer = event.target.textContent;
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if(selectedAnswer === currentQuestion.correctAnswer){
            this.score++;
        }
        this.currentQuestionIndex++;

        if(this.currentQuestionIndex < this.questions.length){
            this.displayQuestion();
        }else{
            this.showResult();
        }
    }
    showResult(){
        quizContainer.style.display = "none";
        resultContainer.style.display = "block";
        resultContainer.innerHTML = `
        <h2>QUIZ RESULT</h2>
        <p>You Scored ${this.score} out of ${this.questions.length}</p>
        <button id="reload-quiz">Reload All Quiz</button>
        `;
        document.getElementById("reload-quiz").addEventListener("click",()=>{
            quizContainer.style.display = "none";
            resultContainer.style.display = "none";
            quizSelector.style.display = "flex";
        });

    }
    static shuffleArray(arr){
        return [...arr].sort(() => Math.random() - 0.5);
    }

}


const loadQuiz = question => {
    const quiz = new Quiz(question)
    quiz.displayQuestion();
    quizSelector.style.display = "none";
    quizContainer.style.display = "block";
};


const loadAllQuiz = async () => {
    const response = await fetch("./quizzes.json");
    const quizzes = await response.json();

    quizzes.forEach((quiz, index)=>{
        const quizcard = document.createElement("div");
        quizcard.classList = ["quiz-card"];
        quizcard.textContent = "Quiz " + (index + 1);
        quizcard.addEventListener("click", () => loadQuiz(quiz));
        quizSelector.appendChild(quizcard);
    })
}
loadAllQuiz();