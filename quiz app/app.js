const questions=[
    {
    'que':"Which of the following is a mark up language",
    'a':"HTML",
    'b':"CSS",
    'c':"JS",
    'd':"REACT",
    'correct':'a'
    },
    {
    'que': "Which language is used to style web pages?",
    'a': "HTML",
    'b': "JQuery",
    'c': "CSS",
    'd': "XML",
    'correct': 'c'
    },
    {
    'que': "Which language is used to make web pages interactive?",
    'a': "HTML",
    'b': "CSS",
    'c': "JavaScript",
    'd': "Python",
    'correct': 'c'
    },
    {
    'que': "Which of the following is a JavaScript framework?",
    'a': "Laravel",
    'b': "Django",
    'c': "React",
    'd': "Flask",
    'correct': 'c'
    }
]
let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const questionBox=document.getElementById("questionBox");
const optionInput=document.querySelectorAll(".options")
const loadquestion=()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
     const data=questions[index];
     console.log(data);
     questionBox.innerText=`${index+1} ${data.que}`;
     optionInput[0].nextElementSibling.innerText=data.a;
     optionInput[1].nextElementSibling.innerText=data.b;
     optionInput[2].nextElementSibling.innerText=data.c;
     optionInput[3].nextElementSibling.innerText=data.d;
}
//function  to submit the answer and move to the other question
const submitQuiz=()=>{
const data=questions[index];
const answer=getAnswer();
console.log(answer,data.correct)
if (answer==data.correct){
    right++;
}
else{
    wrong++;
}
index++;
loadquestion();
return;
}
//function to get the options
const getAnswer=()=>{
    let ans;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                ans=input.value;
            }
        });
         return ans;
}
//to restart the quiz
const reset=()=>{
     optionInput.forEach(
        (input)=>{
                input.checked=false;
            }
     )
    }
//function to end the quiz
const endQuiz=()=>{
document.getElementsByClassName("container")[0].innerHTML = `
<div style="text-align:center">
  <h3>Thank you for playing</h3>
  <h2>${right}/${total} are correct</h2>
  </div>
`;
}
loadquestion();
