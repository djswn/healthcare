const QNAArray = [
    {
        questions : "나이가 어떻게 되세요?",
        answers : ["13살", "23살", "52살", "38살"],
    },
    {
        questions : "성함이 어떻게 되세요?",
        answers : ["민성", "창균", "상혁", "인성"]
    },
    {
        questions : "차 있으세요?",
        answers : ["제네시스", "벤츠", "볼보", "람보르기니"]
    },
    {
        questions : "연봉은?",
        answers : ["1억", "1억 5천", "10억", "1억 3천"]
    },
    {
        questions : "반려동물 키우세요?",
        answers : ["호랑이", "나무늘보", "치타", "카피바라"]
    },
    {
        questions : "어느 학교 나오셨어요?",
        answers : ["부경대", "서울대", "하버드", "예일대"]
    },
    {
        questions : "MBTI가 어떻게 되세요?",
        answers : ["ESTP", "INFJ", "ENTJ", "CUTE"]
    },
];

//선택한 답변을 저장할 배열 (질문과 답변을 쌍으로 저장)
const selectedQNA = [];

function showRandomQuestion() {
    //위 배열에서 랜덤으로 하나 선택
    let randomQNA = QNAArray[Math.floor(Math.random() * QNAArray.length)];

    //랜덤으로 선택된 요소에서 질문과 답변 추출
    let question = randomQNA.questions;
    let answer = [...randomQNA.answers]; // ...을 붙이면 randomQNA의 answer의 배열을
                                        // 하나씩 풀어서 새로운 배열로 복사하게 해줌

    //추출한 답변들 중 랜덤으로 4가지 추출
    for (let i = answer.length -1; i>0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [answer[i], answer[j]] = [answer[j], answer[i]];  //랜덤으로 섞섞
    }

    //인덱스 0부터 4전까지 잘라냄
    let choices = answer.slice(0, 4);  

    //html에서 id가 question인 텍스트를 위에서 랜덤으로 추출한 question으로 변경
    document.getElementById("question").textContent = question;

    //추출한 선택지 4개를 html에 버튼을 생성하여 삽입
    const choicesContainer = document.getElementById("answer_buttons");
    choicesContainer.innerHTML = ""

    choices.forEach(ans => { //choices배열을 순회하면서 각 항목(ans)에 대해 코드 실행 
        const btn = document.createElement("button");
        btn.className = "answer_btn"; //생성한 button 요소에 클래스 부여
        btn.textContent = ans;  //버튼에 표시될 텍스트를 ans로 설정

        btn.addEventListener("click", () => {  //버튼을 클릭하면 함수 실행
            const prev = selectedQNA.find(item => item.question === question);

            if (prev) {
                if (prev.answer === ans) {
                    score ++;
                    updateScore();
                    showRandomQuestion();
                
                } else {
                    alert("방금이랑 다르잖아요!");
                    alert("점수: "+ score+"점");
                    location.reload();  //자동 새로고침 
                    
                }
            } else {
                selectedQNA.push({question: question, answer: ans});  //버튼 클릭시, 해당 선택지 배열에 저장
                score++;
                updateScore();
                showRandomQuestion();
            }
        });

        choicesContainer.appendChild(btn); //생성한 버튼 화면에 출력
    });
}

let score = 0;

const updateScore = () => {
    document.getElementById("score").textContent = "점수: "+ score ;
};


showRandomQuestion();
