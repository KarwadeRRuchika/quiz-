function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What will be the output of the program ? <br> <img src='Screenshot (18).png' /> </br>", ["2, 1, 15", "1, 2, 5","3, 2, 15", "2, 3, 20"], "3, 2, 15"),

    new Question("What will be the output of the program ? <br> <img src='Screenshot (22).png' /> </br>", ["1, 1, 1, 1<br>2, 3, 2, 3<br>3, 2, 3, 2<br>4, 4, 4, 4", "1, 2, 1, 2<br>2, 3, 2, 3<br>3, 4, 3, 4<br>4, 2, 4, 2","1, 1, 1, 1<br>2, 2, 2, 2<br>2, 2, 2, 2<br>3, 3, 3, 3", "1, 2, 3, 4<br>2, 3, 4, 1<br>3, 4, 1, 2<br>4, 1, 2, 3"], "1, 1, 1, 1<br>2, 2, 2, 2<br>2, 2, 2, 2<br>3, 3, 3, 3"),
    

    new Question("What will be the output of the program ?<br> <img src='Screenshot (25).png' /> </br>", ["2, 3, 4, 5", "1, 2, 3, 4","0, 1, 2, 3", "3, 2, 1 0"], "1, 2, 3, 4"),
    

    new Question("What will be the output of the program ?<br> <img src='Screenshot (27).png' /> </br>", ["1", "2","3", "4"], "1"),

    new Question("What will be the output of the program ?<br> <img src='Screenshot (31).png' /> </br>", ["0, 0, 0<br>1, 1, 1<br>2, 2, 2<br>3, 3, 3", "1, 1, 2<br>2, 2, 3<br>3, 3, 4<br>4, 4, 1","1, 1, 1<br>2, 2, 2<br>3, 3, 3<br>3, 4, 4", "0, 1, 2<br>1, 2, 3<br>2, 3, 4<br>3, 4, 5"], "1, 1, 1<br>2, 2, 2<br>3, 3, 3<br>3, 4, 4"),
        
    new Question("What does the following declaration mean?<br> <img src='1677434681653.jpg' /> </br>", ["ptr is array of pointer to 10 integer", "ptr is a pointer to an array of 10 integer","ptr is an array of 10 integer", "ptr is an pointer to array"], "ptr is a pointer to an array of 10 integers"),    
    new Question("Which of the following is correct way to define the function fun() in the below program? <br> <img src='Screenshot (40).png' /> </br>", ["<br> <img src='Screenshot (33).png' /> </br>", "<br> <img src='Screenshot (36).png' /> </br>","<br> <img src='Screenshot (37).png' /> </br>", "<br> <img src='Screenshot (38).png' /> </br>"], "<br> <img src='Screenshot (33)"),
    new Question("Which of the following statements are correct about 6 used in the program?<br> <img src='Screenshot (43).png' /> </br>", ["In the first statement 6 specifies a particular element, whereas in the second statement it specifies a type.", "In the first statement 6 specifies a array size, whereas in the second statement it specifies a particular element of array.","In the first statement 6 specifies a particular element, whereas in the second statement it specifies a array size.", "In both the statement 6 specifies array size."], "In the first statement 6 specifies a array size, whereas in the second statement it specifies a particular element of array."),
    new Question("Which of the following statements mentioning the name of the array begins DOES NOT yield the base address?<br> <img src='Screenshot (44).png' /> </br>", ["A", "A, B","B", "B, D"], "A, B"),
    new Question("Which of the following statements are correct about the program below?<br> <img src='Screenshot (41).png' /> </br>", ["The code is erroneous since the subscript for array used in for loop is in the range 1 to size.", "The code is erroneous since the values of array are getting scanned through the loop.","The code is erroneous since the statement declaring array is invalid.", "The code is correct and runs successfully."], "The code is erroneous since the statement declaring array is invalid.")



];


var quiz = new Quiz(questions);


populate();





