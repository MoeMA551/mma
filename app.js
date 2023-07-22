let saying=document.querySelector(".greeting");
let timeNow=new Date().getHours();
console.log(timeNow);
let greeting = timeNow >=5 && timeNow < 12 ? "Hi, Good Morning!":
timeNow >= 12 && timeNow < 18 ? "Hi, Good Afternoon!": "Hi, Good Evening!";
console.log(greeting);
saying.innerHTML= `<h2>${greeting}</h2>`;
