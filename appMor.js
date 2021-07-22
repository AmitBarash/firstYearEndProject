const hello = document.getElementById('hello');
const helloOutput = document.getElementById('helloOutput');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const name1Output = document.getElementById('name1Output');
const name2Output = document.getElementById('name2Output');
const submitButton = document.getElementById('submitButton');
const startButton = document.getElementById('startButton');
const firstLevel = document.getElementById('firstLevel');
const researching = document.getElementById('researching');
const continueB = document.getElementById('continue');
const video = document.getElementById('video');
const AstronomyVideo = document.getElementById('AstronomyVideo');
const article = document.getElementById('article');
const AstronomyArticle = document.getElementById('AstronomyArticle');
const questions = document.getElementById('questions');
const instructions = document.getElementById('instructions');
const spacev =  document.getElementById('spacev');
const spaceg =  document.getElementById('spaceg');

submitButton.addEventListener('click' , function()
{
    if(name1.value != '' && name2.value != '')
    {
        name1Output.innerText = name1.value;
        name2Output.innerText = name2.value;
        helloOutput.hidden = false;
        startButton.hidden = false;
    }
    else
    {
        alert('one or more input fields are empty. insert your names');
    }
} , false);

startButton.addEventListener('click' , function()
{
    hello.hidden = true;
    firstLevel.hidden = false;
} , false);
//////////////////////////////////////////////////////////////////////
//tic tac toe game programming

continueB.addEventListener('click' , function()
{
    researching.hidden = false;
    firstLevel.hidden = true;
} , false);

let qArr = ['What is your favorite movie?', 'What is your favorite dish?', 'What is your favorite TV series?', 'What profession do you hate most about school?', 'Who is your favorite superhero?', 'What would you take to a desert island?', 'What is the food you hate the most?', 'What do you like to do most in your free time?', 'What do you value most in people?', 'If you were an animal, what animal would you choose to be and why?', 'If you could get any power possible, what power would you want?', 'If you were allowed to be born again in the world, in what country would you like to be born? Why?', 'Which hero from a TV show do you like best? Why ?', 'What is your favorite game to play during the break? What do you like most about this game?', 'What are your hobbies?', 'Who is the person you trust the most?', 'What is your favourite subject?', 'What do you like most about yourself?', 'Do you have a pet? If so, how did you name her?', 'Do you like animals?', 'What is your favorite place?', 'What is your favorite movie genre?', 'What is your dream?', 'What is your favorite song?', 'In what month were you born?', 'What is your sign?', 'What would you like to be in the future?', 'What is your favorite sport?', 'How many brothers do you have?', 'What do you like to learn most?', 'Where would you like to go and have not yet arrived?', 'What is the most precious thing to you?', 'What thing can you not live without it?', 'What is your favorite dessert?', 'What is your favorite season of the year?', 'What is the first thing you do when you get up in the morning?', 'Would you change anything yourself? If so, what?', 'What do you think is the most unnecessary thing in this world?', 'What do you like most about this world?', 'If you could be someone else, who would you choose to be?', 'What is your biggest fear?', 'What is your favorite musical band? What is your favorite album of theirs?', 'Do you have a special hobby?', 'What is your favorite topping for pizza?', 'What is your favorite hero?', 'What is your favorite character (from a movie or series)? Why?', 'What is your favorite color?', 'What holiday do you like most?', 'In which city / do you want to visit?', 'What do you like to do in your free time?', 'Which restaurant do you like best?', 'Where would you like to live to be big?'];
let qWas = [];

let pressesArr = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];
let turn = 0;

let qBut1 = document.getElementById('qBut1');
let qBut2 = document.getElementById('qBut2');
let qBut3 = document.getElementById('qBut3');
let qBut4 = document.getElementById('qBut4');
let qBut5 = document.getElementById('qBut5');
let qBut6 = document.getElementById('qBut6');
let qBut7 = document.getElementById('qBut7');
let qBut8 = document.getElementById('qBut8');
let qBut9 = document.getElementById('qBut9');
const table = document.getElementById('table');
const congX = document.getElementById('congX');
const congO = document.getElementById('congO');
const tie = document.getElementById('tie');
const quPresent = document.getElementById('quPresent');
const titleQu = document.getElementById('titleQu');
const gameOver = document.getElementById('gameOver');

let qButArr = [qBut1 , qBut2 , qBut3 , qBut4 , qBut5 , qBut6 , qBut7 , qBut8 , qBut9]
let board = [[qBut1.innerText , qBut2.innerText , qBut3.innerText]
 , [qBut4.innerText , qBut5.innerText , qBut6.innerText]
 , [qBut7.innerText , qBut8.innerText , qBut9.innerText]];

function gamePlay(qBut , presses)
{
    turn++;
    presses++;
   if(presses == 1)
   {
       checkTurn(qBut);
   }
    qNum = Math.floor(Math.random() * 52);
    
    while(!checkWas(qNum , qWas))
    {
        qNum = Math.floor(Math.random() * 52);
    }
    qWas[turn] = qNum;
    quPresent.innerText = qArr[qNum];
    return presses;
}

function checkWas(randomNum , array)
{
    for(let i = 0 ; i < array.length ; i++)
    {
        if(array[i] == randomNum)
        {
            return false;
        }
    }
    return true;
}

function checkTurn(qBut)
{
    if(turn % 2 == 0)
    {
        qBut.innerText = 'O';
    }
    else
    {
        qBut.innerText = 'X';
    }
}

function updateBoard()
{
    board = [[qBut1.innerText , qBut2.innerText , qBut3.innerText]
 , [qBut4.innerText , qBut5.innerText , qBut6.innerText]
 , [qBut7.innerText , qBut8.innerText , qBut9.innerText]];
}

function checkRows()
{
    let j = 0;
    for(let i = 0 ; i < 3 ; i++)
    {
        if(board[i][j] == board[i][j + 1] && board[i][j + 1] == board[i][j + 2] && (board[i][j] == 'X' || board[i][j] == 'O'))
        {
            return true;
        }
    }
    return false;    
}
function checkCols()
{
    let i = 0;
    for(let j = 0 ; j < 3 ; j++)
    {
        if(board[i][j] == board[i + 1][j] && board[i + 1][j] == board[i + 2][j] && (board[i][j] == 'X' || board[i][j] == 'O'))
        {
            return true;
        }
    }
    return false;
}

function checkDiags()
{
    let firstVal = board[0][2];
    let secondVal = board[1][1];
    let thirdVal = board[2][0];
    let isFirstDiag = false;
    if(firstVal == secondVal && firstVal == thirdVal && (firstVal == 'X' || firstVal == 'O'))
    {
        isFirstDiag = true;
    }
    else
    {
        isFirstDiag = false;
    }
    firstVal = board[0][0];
    secondVal = board[1][1];
    thirdVal = board[2][2];
    let isSecondDiag = false;
    if(firstVal == secondVal && firstVal == thirdVal && (firstVal == 'X' || firstVal == 'O'))
    {
        isSecondDiag = true;
    }
    else
    {
        isSecondDiag = false;
    }

    if(isFirstDiag == false && isSecondDiag == false)
    {
        return false;
    }
    return true;
}

function isOver()
{
    updateBoard();
    if(checkRows() == true || checkCols() == true || checkDiags() == true || turn >= 9)
    {
        setTimeout(function()
        {
            table.hidden = true;
            quPresent.hidden = true;
            titleQu.hidden = true;
            gameOver.hidden = false;
            instructions.hidden = true;
            continueB.hidden = false;
            hwoWon();
        } , 200);
    }
}

function hwoWon()
{
    if(turn >= 9 && checkRows() == false && checkCols() == false && checkDiags() == false)
    {
        tie.hidden = false;
    }
    else if(checkCols() == true || checkDiags() == true || checkRows() == true)
    {
        if(turn % 2 == 0)
        {
            congO.hidden = false;
        }
        else
        {
            congX.hidden = false;
        }
    }
}

//main:
qBut1.addEventListener('click' , function()
{
    if(pressesArr[0] < 1)
    {
        pressesArr[0] = gamePlay(qBut1 , pressesArr[0]);
        isOver();
    }
} , false);
qBut2.addEventListener('click' , function()
{
    if(pressesArr[1] < 1)
    {
        pressesArr[1] = gamePlay(qBut2 , pressesArr[1]);
        isOver();
    }
} , false);
qBut3.addEventListener('click' , function()
{
    if(pressesArr[2] < 1)
    {
        pressesArr[2] = gamePlay(qBut3 , pressesArr[2]);
        isOver();
    }
} , false);
qBut4.addEventListener('click' , function()
{
    if(pressesArr[3] < 1)
    {
        pressesArr[3] = gamePlay(qBut4 , pressesArr[3]);
        isOver();
    }
} , false);
qBut5.addEventListener('click' , function()
{
    if(pressesArr[4] < 1)
    {
        pressesArr[4] = gamePlay(qBut5 , pressesArr[4]);
        isOver();
    }
} , false);
qBut6.addEventListener('click' , function()
{
    if(pressesArr[5] < 1)
    {
        pressesArr[5] = gamePlay(qBut6 , pressesArr[5]);
        isOver();
    }
} , false);
qBut7.addEventListener('click' , function()
{
    if(pressesArr[6] < 1)
    {
        pressesArr[6] = gamePlay(qBut7 , pressesArr[6]);
        isOver();
    }
} , false);
qBut8.addEventListener('click' , function()
{
    if(pressesArr[7] < 1)
    {
        pressesArr[7] = gamePlay(qBut8 , pressesArr[7]);
        isOver();
    }
} , false);
qBut9.addEventListener('click' , function()
{
    if(pressesArr[8] < 1)
    {
        pressesArr[8] = gamePlay(qBut9 , pressesArr[8]);
        isOver();
    }
} , false);
//end of tic tac toe programming
///////////////////////////////////////////////////////////////////
AstronomyArticle.addEventListener('click' , function()
{
    // setTimeout(function()
    // {
    //     video.hidden = false;
    // } , 120000)
    questions.hidden = false;
    spaceg.style.height = "100px";
    spaceg.style.width = "100px";
    article.style.height = "100px";
    article.style.width = "100px";
    spaceg.style.left="10px";
    article.style.left="30px";
    article.style.top="250px";
} , false);

AstronomyVideo.addEventListener('click' , function()
{
    // setTimeout(function()
    // {
    //     questions.hidden = false;
    // } , 220000);
    article.hidden = false;
    spacev.style.height = "100px";
    spacev.style.width = "100px";
    video.style.height = "100px";
    video.style.width = "100px";
    spacev.style.left="10px";
    video.style.left="30px";
} , false);
