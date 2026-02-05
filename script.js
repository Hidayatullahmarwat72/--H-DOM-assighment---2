// Task 1: getElementById
const heading = document.getElementById("welcome");
console.log(heading);
heading.textContent = "DOM Element Selected by ID";

// Task 2: getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
paragraphs[0].textContent = "First paragraph updated";

// Task 3: getElementsByClassName
const buttons = document.getElementsByClassName("btn");
console.log(buttons);
buttons[1].textContent = "Click Me";

// Task 4: querySelector
const qsHeading = document.querySelector("h2");
console.log(qsHeading);
qsHeading.style.color = "blue";

// Task 5: querySelectorAll
const listItems = document.querySelectorAll("li");
console.log(listItems);
listItems.forEach(item => {
    item.style.color = "green";
});

// Task 6: Change Style Using Selected Element
const styledPara = document.querySelector(".styled-text");
console.log(styledPara);
styledPara.style.fontSize = "20px";
styledPara.style.color = "white";
styledPara.style.backgroundColor = "black";
