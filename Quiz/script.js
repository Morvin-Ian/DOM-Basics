const questions= [
    {
        question:"Whats the most Popular Programming language",
        A:"Kotlin",
        B:"Python",
        correct:"B"
    },
    {
        question:"Is React JS a Framework",
        A:"Yes",
        B:"No",
        correct:"B"
    },
    {
        question:"Ryans Latest Movie",
        A:"Red Notice",
        B:"The Adams Project",
        correct:"B"
    },
    {
        question:"The Leading University in Kenya",
        A:"Kenyatta University",
        B:"University of Nairobi",
        correct:"B"
    },
    {
        question:"Choose an East African Nation",
        A:"Tanzania",
        B:"Burundi",
        correct:"A"
    }

];

const quiz_data = [];
const question = document.getElementById('question');
const text_A = document.getElementById('text_A');
const text_B = document.getElementById('text_B');
const submit = document.getElementById("submit");


let current_quiz = 0;
let score = 0;

function Quizload(){
    const current_data = questions[current_quiz];
    question.innerText = current_data.question;
    text_A.innerText = current_data.A;
    text_B.innerText = current_data.B;
    

}

Quizload()

function Selects(){
    const answerE1s = document.querySelectorAll(".answer")
    let answer = undefined;
    
    answerE1s.forEach((answerE1) => {
        if (answerE1.checked){
            answer = answerE1.id;
        }
    });

    return answer;
}

submit.addEventListener("click", () =>{

    const answer = Selects()

    if(answer){
        if(answer == questions[current_quiz].correct ){
            score++;}

        current_quiz++;

        if(current_quiz < questions.length){   
            Quizload()
        }


        else{    
          alert(`Finished with a score of ${score}/5`)
          submit.style.display = "none"
        }
        
    }
});
