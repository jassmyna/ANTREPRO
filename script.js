const quizData = [{
    question: "Cum vă simțiți în legătură cu asumarea riscurilor în ceea ce privește viitorul dvs. profesional?",
    a: "Prefer să evit riscurile și să aleg opțiuni mai sigure.",
    b: "Sunt dispus să iau riscuri moderate pentru a urmări oportunități promițătoare.",
    c: " Sunt gata să iau riscuri mari pentru a urmări visurile mele și pentru a avea succes.",
    d: "Niciuna din variantele date.",
    correct: ["b", "c"],
},
{
    question: "Cum vă gestionați timpul și sarcinile în cadrul proiectelor pe care le abordați?",
    a: "Am dificultăți în a-mi organiza timpul și tind să amân sarcinile.",
    b: "Îmi stabilesc obiective clar definite și îmi organizez eficient timpul pentru a le atinge.",
    c: "Tendința de a mă cufunda în multe proiecte simultan și de a mă simți copleșit.",
    d: "Niciuna din variantele date.",
    correct: "b",
},
{
    question: "Cum reacționați în fața eșecului sau a obstacolelor în calea obiectivelor dvs.?",
    a: "Am tendința de a mă descuraja și de a renunța ușor atunci când întâmpin dificultăți",
    b: "Folosesc eșecurile ca o oportunitate de învățare și sunt determinat să continui să mă străduiesc.",
    c: "Am dificultăți în a face față eșecurilor și tind să mă simt coplesit de negativitate.",
    d: "Niciuna din variantele date.",
    correct: "b",
},
{
    question: "Cum vă simțiți în legătură cu ideea de a lucra independent și de a vă construi propriul drum în lumea afacerilor?",
    a: "Prefer să lucrez într-un mediu stabil și structurat, sub îndrumarea altora.",
    b: "Sunt deschis la ideea de a lucra independent și de a-mi urma propriile viziuni și idei.",
    c: "Am o nevoie puternică de independență și sunt hotărât să-mi construiesc propria afacere.",
    d: "Niciuna din variantele date.",
    correct: ["b", "c"],
},
{
    question: "Cum vă simțiți în legătură cu networking-ul și construirea relațiilor în cadrul mediului de afaceri?",
    a: "Tind să fiu rezervat și să am dificultăți în a stabili legături noi.",
    b: "Sunt deschis la cunoașterea și construirea de relații cu oameni noi.",
    c: "Am o abilitate naturală de a mă conecta cu oamenii și de a construi rețele puternice de contacte.",
    d: "Niciuna din variantele date.",
    correct: ["b", "c"],
},


{
    question: "Cum vă simțiți în legătură cu adaptarea la schimbările rapide și la mediul de afaceri în continuă evoluție?",
    a: "Încerc să rezist schimbărilor și să fiu deranjat de instabilitate.",
    b: "Sunt deschis la schimbare și încerc să mă adaptez la noile condiții.",
    c: "Mă simt entuziasmat de schimbările constante și văd în ele oportunități de creștere și inovație.",
    d: "Niciuna din variantele date.",
    correct: ["b", "c"],
},
{
    question: "Cum vă simțiți în legătură cu ideea de a face față responsabilităților și de a conduce o echipă?",
    a: "Prefer să evit responsabilitățile de conducere și să lucrez mai degrabă într-un rol de suport.",
    b: "Sunt deschis să asum responsabilități de conducere și să lucrez împreună cu o echipă.",
    c: "Am o dorință puternică de a conduce și de a îndruma oamenii către obiective comune.",
    d: "Niciuna din variantele date.",
    correct: ["b", "c"],
},
{
    question: "Cum vă motivați pentru a atinge obiectivele dvs. în cadrul afacerii?",
    a: "Tind să fiu descurajat și îmi pierd uşor motivația atunci când întâmpin dificultăți.",
    b: "Folosesc obiectivele și viziunile mele ca sursă de inspirație și motivație.",
    c: "Am o nevoie puternică de succes și sunt determinat să fac tot ce îmi stă în putere pentru a atinge obiectivele mele.",
    d: "Niciuna din variantele date.",
    correct: ["b", "c"],
},
{
    question: "Ce părere aveți despre învățarea continuă în afaceri?",
    a: "Nu sunt foarte interesat de învățare și prefer să mă bazez pe cunoștințele actuale.",
    b: "Sunt deschis să învăț și să mă dezvolt continuu pentru a-mi îmbunătăți abilitățile antreprenoriale..",
    c: "Am o nevoie puternică de a învăța și de a căuta constant noi oportunități de creștere și dezvoltare.",
    d: "Niciuna din variantele date.",
    correct: ["b", "c"],
},
{
    question: "Cum vă simțiți în legătură cu ideea de a face față presiunii și stresului asociate cu antreprenoriatul?",
    a: "Tind să mă simți copleșit de presiune ceea ce mp descurajează.",
    b: "Sunt capabil să gestionez presiunea și stresul în mod eficient și să rămân concentrat pe obiectivele mele.",
    c: "Am o toleranță ridicată la stres și mă simt motivat de provocările și dificultățile care apar în calea mea.",
    d: "Niciuna din variantele date.",
    correct: ["b", "c"],
}
];

const quiz = document.getElementById("quiz");
const countQuestion = document.getElementById("count-question");
const tottleNumberOfQuestion = document.getElementById("tol-num-que");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const answerLable = document.querySelectorAll(".answer-lable");
const nextQuestionbtn = document.getElementById("next-question-btn");
const allInputs = document.querySelectorAll("input[type='radio']");
const submitquiz = document.getElementById("submit");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

let currentQtn = 0;
let answered = 0;

const loadQuiz = () => {
countQuestion.innerHTML = `${currentQtn + 1}`;
tottleNumberOfQuestion.innerHTML = quizData.length;
questionNumber.innerHTML = `${currentQtn + 1}`;
questionTitle.innerHTML = quizData[currentQtn].question;
answerLable[0].innerHTML = quizData[currentQtn].a;
answerLable[1].innerHTML = quizData[currentQtn].b;
answerLable[2].innerHTML = quizData[currentQtn].c;
answerLable[3].innerHTML = quizData[currentQtn].d;

reset();

if (currentQtn == quizData.length - 1) {
    nextQuestionbtn.style.display = "none";
    submitquiz.style.display = "block";
}
};

const reset = () => {
allInputs.forEach((allInput) => {
    allInput.checked = false;
});
};

nextQuestionbtn.addEventListener("click", () => {
let answer = getSelected();
if (answer !== undefined) {
    let correctAnswers = quizData[currentQtn].correct;
    if (correctAnswers.includes(answer)) {
        answered++;
    }
    currentQtn++;
    if (currentQtn < quizData.length) {
        loadQuiz();
    }
}
});

submitquiz.addEventListener("click", () => {
    let answer = getSelected();
    if (answer !== undefined) {
        let correctAnswers = quizData[currentQtn].correct;
        if (correctAnswers.includes(answer)) {
            answered++;
        }
        currentQtn++;
        if (getSelected()) {
            quiz.style.display = "none";
            resultEl.style.display = "block";
            scoreEl.innerHTML = `Răspunsuri corecte ${answered} / ${quizData.length}`;

            // Delay the popup for 3 seconds
            setTimeout(() => {
                // Show popup based on the score range
                if (answered >= 0 && answered <= 3) {
                    alert("Antreprenoriatul nu este unul din punctele tale forte.");
                } else if (answered >= 4 && answered <= 7) {
                    alert("Ai potential de a deveni un antreprenor de succes!");
                } else if (answered >= 8 && answered <= 10) {
                    alert("Cu siguranta ai spirit antreprenorial, domeniul afacerilor este perfect pentru tine!");
                }
            }, 1000); // 1111 milliseconds
        }
    }
});


const getSelected = () => {
let answer;
allInputs.forEach((allInputs) => {
    if (allInputs.checked) {
        answer = allInputs.value;
    }
});
return answer;
};

loadQuiz();