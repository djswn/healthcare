const concerningAnswers = [
    'Q1_1', 'Q1_2', 'Q1-3',
    'Q2_1', 'Q2_2', 'Q2-3',
    'Q3_1', 'Q3_2', 'Q3-3',
    'Q4_1', 'Q4_2',
    'Q5_1', 'Q5_2',
    'Q6_1', 'Q6_2'
];

const submitBtn = document.getElementById('submitBtn');
const resultMessage = document.getElementById('resultMessage');

submitBtn.addEventListener('click', () => {
  let count = 0;

  for (let i = 1; i <= 6; i++) {
    const selected = document.querySelector(`input[name="Q${i}"]:checked`);
    if (selected && concerningAnswers.includes(selected.id)) {
      count++;
    }
  }

  if (count >= 4) {
    resultMessage.style.display = 'block';
    resultMessage.textContent = '추가적인 검사가 필요합니다.';

    const btn = document.createElement('button');
    const btnText = document.createTextNode("필요한 습관 보러가기");
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
      window.location.href = 'information.html'; 
    });

  } else {
    resultMessage.style.display = 'block';
    resultMessage.textContent = '성인 ADHD 의심 단계는 아닙니다!';
  }
});