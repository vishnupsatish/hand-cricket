function openedApp() {

    document.getElementById("firstPage").style.display = "block";
    var divsToHide = document.getElementsByClassName("hideBegin");
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none";
    }
    //const userAgent = navigator.userAgent.toLowerCase();
    //const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
    runButtonLayout = document.getElementById("runButtonLayout")
    runButtonLayout.style.display = "grid"
    runButtonLayout.style.gridTemplateColumns = "repeat(3, 1fr)"
    runButtonLayout.style.webkitBoxSizing = "border-box"
    runButtonLayout.style.mozBoxSizing = "border-box"
    runButtonLayout.style.boxSizing = "border-box"
    var widthChange = document.getElementsByClassName("runButton");
    for(var i = 0; i < widthChange.length; i++) {
        widthChange[i].style.width = "100px";
        widthChange[i].style.width = "100px";
    }
    var handScreenWidth = document.getElementsByClassName("handImgPage")
    for(var i = 0; i < handScreenWidth.length; i++){
        handScreenWidth[i].style.width = "30vw";
        handScreenWidth[i].style.width = "30vw";
    }
    document.getElementById("logoimg").style.width = "50vw";
    screen.orientation.lock('portrait');
    ScreenOrientation.lock("portrait")
    if (window.innerWidth > window.innerHeight) {
        this.console.log(window.innerHeight)
        this.console.log(window.innerWidth)
        var handScreenWidth = document.getElementsByClassName("handImgPage")
        for(var i = 0; i < handScreenWidth.length; i++){
            handScreenWidth[i].style.width = "20vw";
            handScreenWidth[i].style.width = "20vw";
        }
        document.getElementById("logoimg").style.width = "20vw";
    }
    else {
        this.console.log("width < height")
        var handScreenWidth = document.getElementsByClassName("handImgPage")
        for(var i = 0; i < handScreenWidth.length; i++){
            handScreenWidth[i].style.width = "30vw";
            handScreenWidth[i].style.width = "30vw";
        }
        document.getElementById("logoimg").style.width = "50vw";
    }
    window.addEventListener("orientationchange", function() {
        this.console.log("Changed orientation")
        this.console.log(window.innerHeight)
        this.console.log(window.innerWidth)
        if (window.innerWidth < window.innerHeight) {
            this.console.log("width > height")
            var handScreenWidth = document.getElementsByClassName("handImgPage")
            for(var i = 0; i < handScreenWidth.length; i++){
                handScreenWidth[i].style.width = "20vw";
                handScreenWidth[i].style.width = "20vw";
            }
            document.getElementById("logoimg").style.width = "20vw";
        }
        else {
            this.console.log("width < height")
            var handScreenWidth = document.getElementsByClassName("handImgPage")
            for(var i = 0; i < handScreenWidth.length; i++){
                handScreenWidth[i].style.width = "30vw";
                handScreenWidth[i].style.width = "30vw";
            }
            document.getElementById("logoimg").style.width = "50vw";
        }
    });

    
}

document.addEventListener("deviceready", openedApp(), false);

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function goToTossScreen() {
    document.getElementById("firstPage").style.display = "none"
    document.getElementById("secondPage").style.display = "block"
}
var whoIsBattingFirst
function headsOrTails(side) {
    var zeroone = (Math.floor(Math.random() * 2) === 0)
    function on() {
        document.getElementById("countdownOnPress").style.display = "block";
        var count = 2;
      function anim() {
          if (count > 0) {
              document.getElementById("countingText").innerHTML = count;
              count--;
              setTimeout(anim, 1000);
          }
          else {
               document.getElementById("countdownOnPress").style.display = "none";
               headsTailsCallback()
      
          }
      }
      anim();
      }
    on()
    function headsTailsCallback() {
        if (zeroone) {
            if ("Heads" === side) {
                document.getElementById("secondPage").style.display = "none"
                document.getElementById("wonToss").style.display = "block"
            }
            else {
                document.getElementById("secondPage").style.display = "none"
                document.getElementById("lostToss").style.display = "block"
                if ((Math.round(Math.random()) === 0)) {
                    document.getElementById("lostTossBatBowl").src = "img/Ball.png"
                    document.getElementById("lostTossHeader").innerHTML = "You have lost the toss... The computer has chosen to bat first."
                    whoIsBattingFirst = "The Computer"
                    document.getElementById("lostTossButton").onclick = function() { goToGameScreen("Bowl") };
                }
                else {
                    document.getElementById("lostTossBatBowl").src = "img/Bat.png"
                    document.getElementById("lostTossHeader").innerHTML = "You have lost the toss... The computer has chosen to bowl first."
                    whoIsBattingFirst = "You"
                    document.getElementById("lostTossButton").onclick = function() { goToGameScreen("Bat") };
                }
            }
        }
        else {
            if ("Tails" === side) {
                document.getElementById("secondPage").style.display = "none"
                document.getElementById("wonToss").style.display = "block"
            }
            else {
                document.getElementById("secondPage").style.display = "none"
                document.getElementById("lostToss").style.display = "block"
                if ((Math.round(Math.random()) === 0)) {
                    document.getElementById("lostTossBatBowl").src = "img/Ball.png"
                    document.getElementById("lostTossHeader").innerHTML = "You have lost the toss... The computer has chosen to bat first."
                    whoIsBattingFirst = "The Computer"
                    document.getElementById("lostTossButton").onclick = function() { goToGameScreen("Bowl") };
                }
                else {
                    document.getElementById("lostTossBatBowl").src = "img/Bat.png"
                    document.getElementById("lostTossHeader").innerHTML = "You have lost the toss... The computer has chosen to bowl first."
                    whoIsBattingFirst = "You"
                    document.getElementById("lostTossButton").onclick = function() { goToGameScreen("Bat") };
                }
            }
        }
    }
}

var totalRuns;
var actionNow;
var innings;
var chasingTarget;
var outRunsChosen;

function goToGameScreen(action) {
    chasingTarget = 0;
    outRunsChosen = 0;
    whoIsBattingFirst = "";
    actionNow = action
    innings = 1
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("wonToss").style.display = "none";
    document.getElementById("lostToss").style.display = "none";
    totalRuns = 0
    if (action === "Bat") {
        document.getElementById("gameScreenText").innerHTML = "You are batting now.<br>Your score: 0/0."
        document.getElementById("batOrBowlImg").src = "img/Bat.png";
        document.getElementById("batOrBowlImgRunsPressed").src = "img/Bat.png";
    }
    else {
        document.getElementById("gameScreenText").innerHTML = "The computer is batting now.<br>Computer's score: 0/0."
        document.getElementById("batOrBowlImg").src = "img/Ball.png";
        document.getElementById("batOrBowlImgRunsPressed").src = "img/Ball.png";
    }
}

function runButtonPressed(runs) {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    function on() {
        document.getElementById("countdownOnPress").style.display = "block";
        var count = 2;
      function anim() {
          if (count > 0) {
              document.getElementById("countingText").innerHTML = count;
              count--;
              setTimeout(anim, 1000);
          }
          else {
               document.getElementById("countdownOnPress").style.display = "none";
               gamePlayingButton()
      
          }
      }
      anim();
      }
    on()
    function gamePlayingButton() {
        if (innings === 1) {
            if (actionNow === "Bat") {
                if (randomNumber !== runs) {
                    document.getElementById("batOrBowlImg").src = "img/Bat.png";
                    document.getElementById("batOrBowlImgRunsPressed").src = "img/Bat.png";
                    document.getElementById("outOrNotRuns").innerHTML = "Not Out.";
                    document.getElementById("outOrNotRuns").style.color = "green";
                    document.getElementById("gameScreen").style.display = "none";
                    document.getElementById("runsPressedScreen").style.display = "block";
                    document.getElementById("userChoseWhat").src = "img/" + runs + "Runs.png"
                    document.getElementById("computerChoseWhat").src = "img/" + randomNumber + "Runs.png"
                    totalRuns += runs;
                    document.getElementById("scoreInRunsChosenUser").innerHTML = "Score: " + totalRuns + "/0"
                    document.getElementById("runsGotText").innerHTML = "You got " + runs + " runs!"//<br>The computer chose " + randomNumber + ".<br>Your Score: " + totalRuns + "/0";
                    document.getElementById("gameScreenText").innerHTML = "You are batting now.<br>Your score: " + totalRuns + "/0."
                }
                if (randomNumber === runs) {
                    document.getElementById("outOrNotOut").innerHTML = "OUT!!";
                    document.getElementById("outOrNotOut").style.color = "red";
                    document.getElementById("gameScreen").style.display = "none";
                    chasingTarget = totalRuns + 1;
                    outRunsChosen = runs
                    document.getElementById("gameScreen").style.display = "none";
                    document.getElementById("outScreen").style.display = "block";
                    document.getElementById("scoreInRunsChosenUserOut").innerHTML = "Score: " + totalRuns + "/1"
                    document.getElementById("scoreInRunsChosenComputerOut").innerHTML = "Score: " + "0" + "/0"
                    document.getElementById("userChoseWhatOut").src = "img/" + runs + "Runs.png"
                    document.getElementById("computerChoseWhatOut").src = "img/" + randomNumber + "Runs.png"
                    document.getElementById("outText").innerHTML = /*"You and the computer chose " + outRunsChosen + " and you got out...<br>You scored " + totalRuns + " runs.*/"<br>The computer needs to score " + chasingTarget + " runs to win."

                }
            }
            else if (actionNow === "Bowl") {
                if (randomNumber !== runs) {
                    document.getElementById("batOrBowlImg").src = "img/Ball.png";
                    document.getElementById("batOrBowlImgRunsPressed").src = "img/Ball.png";
                    document.getElementById("outOrNotRuns").innerHTML = "Not Out.";
                    document.getElementById("outOrNotRuns").style.color = "green";
                    document.getElementById("gameScreen").style.display = "none";
                    document.getElementById("runsPressedScreen").style.display = "block";
                    document.getElementById("userChoseWhat").src = "img/" + runs + "Runs.png"
                    document.getElementById("computerChoseWhat").src = "img/" + randomNumber + "Runs.png"
                    totalRuns += randomNumber;
                    document.getElementById("scoreInRunsChosenComputer").innerHTML = "Score: " + totalRuns + "/0"
                    document.getElementById("runsGotText").innerHTML = "The computer chose " + randomNumber + " and got " + randomNumber + " runs."//<br>You chose " + runs + ".<br>Computer's Score: " + totalRuns + "/0";
                    document.getElementById("gameScreenText").innerHTML = "The computer is batting now.<br>Computer's Score: " + totalRuns + "/0."
                }
                if (randomNumber === runs) {
                    document.getElementById("outOrNotOut").innerHTML = "OUT!!";
                    document.getElementById("outOrNotOut").style.color = "red";
                    document.getElementById("gameScreen").style.display = "none";
                    chasingTarget = totalRuns + 1;
                    outRunsChosen = runs
                    document.getElementById("gameScreen").style.display = "none";
                    document.getElementById("outScreen").style.display = "block";
                    document.getElementById("scoreInRunsChosenComputerOut").innerHTML = "Score: " + totalRuns + "/1"
                    document.getElementById("scoreInRunsChosenUserOut").innerHTML = "Score: " + "0" + "/0"
                    document.getElementById("userChoseWhatOut").src = "img/" + runs + "Runs.png"
                    document.getElementById("computerChoseWhatOut").src = "img/" + randomNumber + "Runs.png"
                    document.getElementById("outText").innerHTML = /*"The computer and you chose " + outRunsChosen + " and the computer got out!<br>The computer scored " + totalRuns + " runs.<br>*/"You need to score " + chasingTarget + " runs to win."
                }
            }
        }
        else if (innings === 2) {
            if (actionNow === "Bat") {
                if (randomNumber !== runs) {
                    document.getElementById("outOrNotRuns").innerHTML = "Not Out.";
                    document.getElementById("outOrNotRuns").style.color = "green";
                    totalRuns += runs;
                    if (totalRuns < chasingTarget)  {
                        document.getElementById("batOrBowlImg").src = "img/Bat.png";
                        document.getElementById("batOrBowlImgRunsPressed").src = "img/Bat.png";
                        document.getElementById("gameScreen").style.display = "none";
                        document.getElementById("runsPressedScreen").style.display = "block";
                        document.getElementById("scoreInRunsChosenUser").innerHTML = "Score: " + totalRuns + "/0"
                        document.getElementById("scoreInRunsChosenComputer").innerHTML = "Score: " + String(chasingTarget - 1) + "/1"
                        document.getElementById("userChoseWhat").src = "img/" + runs + "Runs.png"
                        document.getElementById("computerChoseWhat").src = "img/" + randomNumber + "Runs.png"
                        document.getElementById("runsGotText").innerHTML = "You got " + runs + " runs!"//<br>The computer chose " + randomNumber + ".<br>Your Score: " + totalRuns + "/0<br>You need " + chasingTarget + " runs to win.";
                        document.getElementById("gameScreenText").innerHTML = "You are batting now.<br>Your score: " + totalRuns + "/0.<br>You need " + chasingTarget + " runs to win.";
                    }
                    else if (totalRuns >= chasingTarget) {
                        document.getElementById("gameScreen").style.display = "none";
                        document.getElementById("gameOverScreen").style.display = "block";
                        document.getElementById("scoreInRunsChosenUserOver").innerHTML = "Score: " + totalRuns + "/0"
                        document.getElementById("scoreInRunsChosenComputerOver").innerHTML = "Score: " + String(chasingTarget - 1) + "/1"
                        document.getElementById("userChoseWhatOver").src = "img/" + runs + "Runs.png"
                        document.getElementById("computerChoseWhatOver").src = "img/" + randomNumber + "Runs.png"
                        document.getElementById("gameOverText").innerHTML = "You won the game!! You beat the computer's score of " + String(chasingTarget - 1) //+ ".<br>You chose " + runs + " and the computer chose " + randomNumber + "!<br>Your score: " + totalRuns + " runs.<br>Computer's score: " + String(chasingTarget - 1) + " runs.";
                    }
                }
                else if (randomNumber === runs) {
                    document.getElementById("outOrNotOver").innerHTML = "OUT!!";
                    document.getElementById("outOrNotOver").style.color = "red";
                    document.getElementById("gameScreen").style.display = "none";
                    document.getElementById("gameOverScreen").style.display = "block";
                    document.getElementById("scoreInRunsChosenUserOver").innerHTML = "Score: " + totalRuns + "/1"
                    document.getElementById("scoreInRunsChosenComputerOver").innerHTML = "Score: " + String(chasingTarget - 1) + "/1"
                    document.getElementById("userChoseWhatOver").src = "img/" + runs + "Runs.png"
                    document.getElementById("computerChoseWhatOver").src = "img/" + randomNumber + "Runs.png"
                    if (totalRuns === chasingTarget - 1) {
                        document.getElementById("gameOverText").innerHTML = "Game Tied! WHAT A GAME!!"// You and the computer chose " + runs + "!<br>Your and the Computer's score: " + totalRuns + " runs.";
                    }
                    else if (totalRuns < chasingTarget - 1) {
                        document.getElementById("gameOverText").innerHTML = "The computer won the game... It won by " + String((chasingTarget - 1) - totalRuns) + " runs."// You and the computer chose " + runs + "!<br>Your score: " + totalRuns + " runs.<br>Computer's score: " + String(chasingTarget - 1) + " runs.";
                    }
                }
            }
            else if (actionNow === "Bowl") {
                if (randomNumber !== runs) {
                    document.getElementById("outOrNotRuns").innerHTML = "Not Out.";
                    document.getElementById("outOrNotRuns").style.color = "green";
                    totalRuns += randomNumber;
                    if (totalRuns < chasingTarget)  {
                        document.getElementById("batOrBowlImg").src = "img/Ball.png";
                        document.getElementById("batOrBowlImgRunsPressed").src = "img/Ball.png";
                        document.getElementById("gameScreen").style.display = "none";
                        document.getElementById("runsPressedScreen").style.display = "block";
                        document.getElementById("scoreInRunsChosenComputer").innerHTML = "Score: " + totalRuns + "/0"
                        document.getElementById("scoreInRunsChosenUser").innerHTML = "Score: " + String(chasingTarget - 1) + "/1"
                        document.getElementById("userChoseWhat").src = "img/" + runs + "Runs.png"
                        document.getElementById("computerChoseWhat").src = "img/" + randomNumber + "Runs.png"
                        document.getElementById("runsGotText").innerHTML = "The computer chose " + randomNumber + " and got " + randomNumber + " runs."//<br>You chose " + runs + ".<br>Computer's Score: " + totalRuns + "/0<br>The computer needs " + chasingTarget + " runs to win.";
                        document.getElementById("gameScreenText").innerHTML = "The computer is batting now.<br>Computer's Score: " + totalRuns + "/0.<br>The computer needs " + chasingTarget + " runs to win.";
                    }
                    else if (totalRuns >= chasingTarget) {
                        document.getElementById("gameScreen").style.display = "none";
                        document.getElementById("gameOverScreen").style.display = "block";
                        document.getElementById("scoreInRunsChosenComputerOver").innerHTML = "Score: " + totalRuns + "/0"
                        document.getElementById("scoreInRunsChosenUserOver").innerHTML = "Score: " + String(chasingTarget - 1) + "/1"
                        document.getElementById("userChoseWhatOver").src = "img/" + runs + "Runs.png"
                        document.getElementById("computerChoseWhatOver").src = "img/" + randomNumber + "Runs.png"
                        document.getElementById("gameOverText").innerHTML = "The computer won the game... The computer beat your score of " + String(chasingTarget - 1 ) //+ ".<br>The computer chose " + randomNumber + " and you chose " + runs +  "<br>Computer's score: " + totalRuns + " runs.<br>Your score: " + String(chasingTarget - 1) + " runs.";

                            
                    }
                    
                }
                else if (randomNumber === runs) {
                    document.getElementById("outOrNotOver").innerHTML = "OUT!!";
                    document.getElementById("outOrNotOver").style.color = "red";
                    document.getElementById("gameScreen").style.display = "none";
                    document.getElementById("gameOverScreen").style.display = "block";
                    document.getElementById("scoreInRunsChosenComputerOver").innerHTML = "Score: " + totalRuns + "/1"
                    document.getElementById("scoreInRunsChosenUserOver").innerHTML = "Score: " + String(chasingTarget - 1) + "/1"
                    document.getElementById("userChoseWhatOver").src = "img/" + runs + "Runs.png"
                    document.getElementById("computerChoseWhatOver").src = "img/" + randomNumber + "Runs.png"
                    if (totalRuns === chasingTarget - 1) {
                        document.getElementById("gameOverText").innerHTML = "Game Tied! WHAT A GAME!!"// The computer and you chose " + runs + "!<br>The computer and your score: " + totalRuns + " runs.";

                    }
                    else if (totalRuns < chasingTarget - 1) {
                        document.getElementById("gameOverText").innerHTML = "You won the game!! You won by " + String((chasingTarget - 1) - totalRuns) + " runs."// You and the computer chose " + runs + "!<br>Your score: " + String(chasingTarget - 1) + " runs.<br>The Computer's score: " + totalRuns + " runs.";
                    }
                }
            }
        }
    }
}

function backToGame() {
    document.getElementById("runsPressedScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
}

function firstInningsOut() {
    document.getElementById("outScreen").style.display = "none";
    document.getElementById("runsPressedScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    totalRuns = 0;
    innings = 2
    if (actionNow === "Bat") {
        actionNow = "Bowl"
        document.getElementById("gameScreenText").innerHTML = "The computer is batting now.<br>Computer's score: 0/0.<br>The computer needs " + chasingTarget + " Runs to win."
        document.getElementById("batOrBowlImg").src = "img/Ball.png";
        document.getElementById("batOrBowlImgRunsPressed").src = "img/Ball.png";
    }
    else if (actionNow === "Bowl") {
        actionNow = "Bat"
        document.getElementById("gameScreenText").innerHTML = "You are batting now.<br>Your score: 0/0.<br>You need " + chasingTarget + " Runs to win."
        document.getElementById("batOrBowlImg").src = "img/Bat.png";
        document.getElementById("batOrBowlImgRunsPressed").src = "img/Bat.png";
    }
}

function homePressed(button) {
    if (button === 1) {
        totalRuns = 0;
        actionNow = "";
        innings = 1;
        chasingTarget = 0;
        outRunsChosen = 0;
        whoIsBattingFirst = "";
        document.getElementById("outOrNotOver").innerHTML = "";
        document.getElementById("scoreInRunsChosenUser").innerHTML = "";
        document.getElementById("scoreInRunsChosenComputer").innerHTML = "";
        document.getElementById("scoreInRunsChosenUserOut").innerHTML = "";
        document.getElementById("scoreInRunsChosenComputerOut").innerHTML = "";
        document.getElementById("scoreInRunsChosenUserOver").innerHTML = "";
        document.getElementById("scoreInRunsChosenComputerOver").innerHTML = "";
        document.getElementById("firstPage").style.display = "block";
        var divsToHide = document.getElementsByClassName("hideBegin");
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].style.display = "none";
        }

        

    }
}

function goHome() {
    navigator.notification.confirm("Are you sure you want to go home?", homePressed, "Exit?", ["Exit","Cancel"])

}


