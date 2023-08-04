const btn = document.getElementById('btn');
 
btn.addEventListener('click', () => {
  setTimeout(() => {
    text = document.getElementById("text");
    answer = document.getElementById("text");
    answerText = text.value;
    answer.innerText = "ボタンをクリックしました";
  }, 2000);

});