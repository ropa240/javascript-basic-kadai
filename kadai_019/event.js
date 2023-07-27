const btn = document.getElementById('btn');
 
btn.addEventListener('click', () => {
  text = document.getElementById("text");
  answer = document.getElementById("text");
  answerText = text.value;
  answer.innerText = "ボタンをクリックしました";
});