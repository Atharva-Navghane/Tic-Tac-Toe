const X = document.querySelectorAll('.X');
const O = document.querySelectorAll('.O');
let num = 999;
function place(event)
{
    const clickDiv = event.target;
    if(num == 1)
    {
        clickDiv.textContent = "X";
        num = 0;
    }
    else{
        clickDiv.textContent = "O";
        num = 1;
    }
    
}


function func() {
    //alert(num);
    //Remove "start playing as and the two buttons";
    const prem = document.querySelector('.play-text');
    const startContainer = document.querySelector('.start-container');
    startContainer.removeChild(prem);

    const divrem = document.querySelector('.choices');
    startContainer.removeChild(divrem);


    //Add the options : "New Game"
    const btn = document.createElement('button');
    btn.setAttribute('style' , 'width : 100px; height : 40px; border-radius : 40px ; border : solid purple; background-color : rgb(205, 99, 205)');
    btn.textContent = "New Game";
    startContainer.appendChild(btn)

    const cell = document.querySelectorAll('.box');
    cell.forEach(element => {
        element.addEventListener('click',place);
    })
}

X.forEach(element => {
    element.addEventListener('click', () => {
        num = 1;
        func();
    });
});

O.forEach(element => {
    element.addEventListener('click', () => {
        num = 0;
        func();
    });
});
