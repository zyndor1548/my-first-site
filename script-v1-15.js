window.onload = function() {
    weather();
    quote();
    numberfact();
    joke();
}

function toggleSettings() {

    var settingsPopup = document.getElementById('settings-popup');
    settingsPopup.style.visibility = (settingsPopup.style.visibility === 'visible') ? 'hidden' : 'visible';
    var colorbutton = document.getElementById('colorbutton');
    colorbutton.style.right = (colorbutton.style.right === '320px') ? '10px' : '320px';
}

function bgcolor(input) {
    for (let i = 0; i < 30; i++)
        for (let j = 0; j < 30; j++)
            if (input == 1) {
                document.body.style.backgroundColor = "rgb(48, 48, 48)";
                let aboutme = document.getElementsByClassName('aboutme')[0];
                aboutme.style.color = 'white';
            } else if (input == 2) {
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
        let aboutme = document.getElementsByClassName('aboutme')[0];
        aboutme.style.color = 'black';
    }
}
var imageindex = 0;

function changewallpaper1(input) {
    let images = [
        'image/background.png',
        'image/background1.png',
        'image/background2.png',
        'image/background3.png',
    ];
    let a = document.getElementById('wallpaperchange');
    if (input == 1) {
        imageindex = (imageindex - 1 + images.length) % images.length;
    }
    if (input == 2) {
        imageindex = (imageindex + 1 + images.length) % images.length;
    }
    a.src = images[imageindex];
}

function changescreen() {
    if (imageindex == 0) {
        resetwallpaper();
    } else if (imageindex == 1) {
        changewallpaper(2);
    } else if (imageindex == 2) {
        changewallpaper(3);
    } else if (imageindex == 3) {
        changewallpaper(4);
    }
}

function changewallpaper(input) {
    if (input == 1) {
        let x = document.getElementById('wallpaper-url').value;
        document.body.style.backgroundImage = `url('${x}')`;
    } else if (input == 2) {

        document.body.style.backgroundImage = `url('image/background1.png')`;
    } else if (input == 3) {

        document.body.style.backgroundImage = `url('image/background2.png')`;
    } else if (input == 4) {

        document.body.style.backgroundImage = `url('image/background3.png')`;
    }
}

function resetwallpaper() {
    document.body.style.backgroundImage = `url('image/background.png')`;
}

function openfeaturespopup() {
    let popup = document.getElementById('features-popup');
    popup.style.visibility = (popup.style.visibility === "visible") ? 'hidden' : 'visible';
}

function closefeaturespopup() {
    let popup = document.getElementById('features-popup');
    popup.style.visibility = "hidden";
}
//login signup start
function openlogin(input) {
    if (input == 1) {
        let popup = document.getElementById('login');
        popup.style.visibility = "visible";
    } else {
        let popup = document.getElementById('signup');
        popup.style.visibility = "visible";
    }
}

function closelogin() {
    let popup = document.getElementById('login');
    popup.style.visibility = "hidden";
}

function closesignup() {
    let popup = document.getElementById('signup');
    popup.style.visibility = "hidden";
}

function showlogininfo() {
    var name = document.getElementById('login-name').value,
        password = document.getElementById('login-password').value,
        alertmsg = "name = " + name + ", password = " + password;
    alert(alertmsg);
}

function showsignupinfo() {
    var name = document.getElementById('signup-name').value,
        age = document.getElementById('signup-age').value,
        password = document.getElementById('signup-password').value;
    var alertMessage = "Name: " + name + "\nAge: " + age + "\nPassword: " + password;
    alert(alertMessage);
}
//increment decrement start 
function increment() {
    let x = parseInt(document.getElementById("display").value);
    let y = x + 1;
    document.getElementById('display').value = y;
}

function decrement() {
    let x = parseInt(document.getElementById("display").value);
    let y = x - 1;
    document.getElementById('display').value = y;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        alert(' press increment or decrement ')
    }
}
//age start
function agekey(key) {
    if (key.keyCode === 13) {

        age();
    }
}

function age() {
    buttonsound(3);
    setTimeout(() => {
        let year = document.getElementById('year').value;
        let age = 2024 - parseInt(year);
        document.getElementById('ageout').value = age;
    }, 1000);
}
//weather start
function weatherkey(key) {
    if (key.keyCode === 13) {
        weather();
    }
}

function weather() {
    let city = document.getElementById('search').value || 'trivandrum';
    let api = "04c66087984c93917071354255f2b05c";

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api + "&units=metric")
        .then(response => response.json())
        .then(data => {
            const name = data.name
            const temp = data.main.temp
            const weather = data.weather[0].main
            const icon = data.weather[0].icon
            const country = data.sys.country
            let temptext = `${Math.round(temp)}℃`
            let nametext = `${name},${country}`
            let weathertext = `weather : ${weather}`
            const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

            document.getElementById('cityname-output').textContent = nametext;
            document.getElementById('weather').textContent = weathertext;
            document.getElementById('temp').textContent = temptext;
            document.getElementById('icon').innerHTML = `<img src="${iconUrl}" alt="weather icon"></img>`;

            console.log('weather:', data)
        })
        .catch(error => console.error('Error weather:', error));
}
// clickme start
function opengamepopup() {
    let gamepopup = document.getElementById('popup0')
    gamepopup.style.visibility = "visible";
    let ground = document.getElementById('ground')
    ground.style.visibility = "visible";
}

function openplaypopup(ground) {
    let popup = document.getElementById('popup');
    popup.style.visibility = "visible";
    if (ground == 1) {
        let ground = document.getElementById('popup');
        ground.style.backgroundImage = 'url(image/canvas1.png)';
    } else if (ground == 2) {
        let ground = document.getElementById('popup');
        ground.style.backgroundImage = 'url(image/canvas.jpg)';
    }
    let selectable = document.getElementById('ground')
    selectable.style.visibility = "hidden";
}

function move() {
    let button = document.querySelector('.move');
    let maxX = 545;
    let maxY = 380;
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function cheater() {
    alert('oh cheater using phone');
}

function closegame() {
    let popup = document.getElementById('popup');
    popup.style.visibility = "hidden";
    let gamepopup = document.getElementById('popup0')
    gamepopup.style.visibility = "hidden";
    let ground = document.getElementById('ground')
    ground.style.visibility = "hidden";
}

function buttonsound(input) {
    if (input == 1) {
        let audio = new Audio('audio/mouseclick.mp3');
        audio.play();
    } else if (input == 2) {
        let audio = new Audio('audio/mouseclick1.mp3');
        audio.play();
    } else if (input == 3) {
        let audio = new Audio('audio/agecalculate.mp3');
        audio.play();
    } else if (input == 4) {
        let audio = new Audio('audio/gamestart.mp3');
        audio.play();
    }
}
// quote
function quote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quotesentence = data.content
            const author = data.author
            document.getElementById('quotesentence').textContent = quotesentence;
            document.getElementById('quoteauthor').textContent = author;
            console.log("Quote ", data)
        })
        .catch(error => console.error('Error quote:', error));
}

function numberfact() {
    let number = document.getElementById('numberfactinput').value || Math.round(Math.random() * 100);
    fetch('http://numbersapi.com/' + number)
        .then(response => response.text())
        .then(data => {
            document.getElementById('numberfactoutput').value = data
            console.log('Number fact :', data)
        })
        .catch(error => console.error('Error numberfact :', error));
}

function joke() {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('jokeoutput').value = data
            console.log('Joke :', data)
        })
        .catch(error => console.error('Error Joke :', error));
}
let currentPlayer = 'O';
let tictactoecount = 0;

function tictactoe(input) {
    let button = document.getElementById(`tic${input}`);
    if (button.value === '') {
        button.value = currentPlayer;
        currentPlayer = (currentPlayer === 'O') ? 'X' : 'O';
        tictactoecount += 1;
        let winner = checkwinner();
        if (winner) {
            alert(`Player ${winner} wins!`);
            resetboard();
        } else if (tictactoecount === 9) {
            alert("It's a draw!");
            resetboard();
        }
    }
}

function checkwinner() {
    const buttons = [];
    for (let i = 1; i <= 9; i++) {
        buttons.push(document.getElementById(`tic${i}`).value);
    }
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
            return buttons[a];
        }
    }

    return null;
}

function resetboard() {
    tictactoecount = 0;

    for (let i = 1; i <= 9; i++) {
        document.getElementById(`tic${i}`).value = '';
    }
}

function opentictactoe() {
    window.location.href = 'tictactoe.html';
    document.body.style.overflowY = 'hidden';
}

function mainpage() {
    window.location.href = 'index.html';
    document.body.style.overflowY = 'scroll';
}
//calculator
function display(input) {
    let calculatortext = document.getElementById('calculatortext');
    calculatortext.value += input;
}

function backspace() {
    let calculatortext = document.getElementById('calculatortext');
    calculatortext.value = calculatortext.value.slice(0, -1);
}

function calculate() {
    let calculatortext = document.getElementById('calculatortext');
    calculatortext.value = eval(calculatortext.value);
}

function cleartext() {
    let calculatortext = document.getElementById('calculatortext');
    calculatortext.value = '';
}

function keyanimation(key) {
    console.log('Key pressed:', key.key);
    console.log('Key pressed code :', key.keyCode);
    if (key.keyCode === 13) {
        let button = document.getElementById('equal');
        button.classList.add('pressed')
        setTimeout(() => {
            button.classList.remove('pressed')
        }, 200);
        calculate();
    } else {
        const button = document.querySelector(`[value="${key.key}"]`)
        button.classList.add('pressed');

        setTimeout(() => {
            button.classList.remove('pressed');
        }, 200);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.calculatorbutton');

    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.classList.add('pressed');
        });

        button.addEventListener('mouseup', () => {
            button.classList.remove('pressed');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('pressed');
        });
    });
});
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key === 'Backspace') {
        let button = document.getElementById('backspace');
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 200);
    }
});
//password generator
function keytopass(key) {
    if (key.keyCode === 13) {
        generatepassword();
    }
}

function generatepassword() {
    const samplespace = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQESTUVWXYZ1234567890!@#$%^&*()_+{}|[]:";<>,.?/~'
    let passwordlength = document.getElementById('passwordlength').value;
    if (passwordlength == 69) {
        document.getElementById('passwordoutput').value = "oh bro wtf";
    } else if (passwordlength > 25) {
        alert("i really dont think you need that much as it will take 13.8 billion years to crack a password of 25 characters ");
        let password = '';
        for (let j = 0; j < passwordlength; j++) {
            var randompick = Math.round(Math.random() * samplespace.length);
            password += samplespace[randompick];
        }
        document.getElementById('passwordoutput').textContent = password;
    } else {
        let password = '';
        for (let i = 0; i < passwordlength; i++) {
            var randompick = Math.round(Math.random() * samplespace.length);
            password += samplespace[randompick];
        }
        document.getElementById('passwordoutput').textContent = password;
    }
}
console.log('hello')