const submit = document.querySelector('.submit');
let questions = [];
async function getQuestions() {
    const response = await fetch('https://run.mocky.io/v3/c788c63b-c453-4b18-bfce-8564203f275a');
    const jsonResponse = await response.json();
    questions = jsonResponse.englishTest;
}

getQuestions();

const quizFilterInput = document.getElementById('quiz');
let questionsToDisplay = [];
let displayedQuestions = [];
quizFilterInput.addEventListener('change', (e) => {
    submit.style.display = "block";
    questionsToDisplay = [];
    displayedQuestions = []
    document.querySelector('.quiz-container').innerHTML = "";
    const quizFilter = e.target.value;
    const questionIndices = new Set();
    let quizItems;

    if (quizFilter == 'sentence-completion') {
        quizItems = questions[0]['sentence-completion'];
    } else {
        quizItems = questions[1]['sentence-correction'];
    }

    while (questionIndices.size != 5) {
        const randomNumber = Math.floor(Math.random() * 10);
        questionIndices.add(randomNumber);
    }
    
    for (const i of questionIndices) {
        questionsToDisplay.push(quizItems[i]);
    }

    questionsToDisplay.forEach(question => {
        const q = new Question(question.id,question.question, question.choices, question.answer, question.explanation);
        displayedQuestions.push(q);
        q.renderQuestion();
    });
});

class Question {
    constructor(id, question, options, answer, explanation) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.selectedOption = null;
        this.answer = options[answer];
        this.explanation = explanation;
    }

    renderQuestion() {
        const questionElement = document.createElement('p');
        questionElement.textContent = this.question;
    
        const optionsContainer = document.createElement('div');
    
        for (const optionKey in this.options) {
            const id = `${this.id}-${optionKey}`;
            const option = this.options[optionKey];
    
            const inputElement = document.createElement('input');
            inputElement.type = 'radio';
            inputElement.id = id;
            inputElement.name = `options-${this.id}`;
            inputElement.value = option;
            inputElement.addEventListener('change', () => {
                this.setSelectedOption(option);
            });
    
            const labelElement = document.createElement('label');
            labelElement.setAttribute('for', id);
            labelElement.textContent = option;
    
            optionsContainer.appendChild(inputElement);
            optionsContainer.appendChild(labelElement);
    
            optionsContainer.appendChild(document.createElement('br'));
        }
    
        const questionContainer = document.createElement('div');
        questionContainer.appendChild(questionElement);
        questionContainer.appendChild(optionsContainer);
        questionContainer.classList.add('quiz');
        document.querySelector('.quiz-container').appendChild(questionContainer);
    }
    

    setSelectedOption(option) {
        this.selectedOption = option;
    }

    isOptionSelected() {
        return this.selectedOption !== null;
    }

    checkAnswer() {
        return this.selectedOption == this.answer;
    }
}

submit.addEventListener('click', () => {
    const quizzes = document.querySelectorAll('.quiz');
    for (let i = 0; i < displayedQuestions.length; i++) {
        const p = document.createElement('p');
        p.textContent = displayedQuestions[i].explanation;
        p.classList.add('explanation');
        quizzes[i].appendChild(p);

        displayedQuestions[i].checkAnswer();
        if (displayedQuestions[i].checkAnswer()) {
            quizzes[i].classList.add('correct');
        } else {
            quizzes[i].classList.add('wrong');
        }
        
    }
});
