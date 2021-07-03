let random = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

function message(message) {
    document.querySelector('.message').textContent = message;
}

// Again
document.querySelector('.head_button').addEventListener('click', function () {
    score = 20;
    random = Math.trunc(Math.random() * 20);
    document.querySelector('.play_in').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.final_n').textContent = '?';
    message('Start guessing...');
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.message').style.color = 'white';
})

// PLay
document.querySelector('.play_btn').addEventListener('click', function () {
    let guess = Number(document.querySelector('.play_in').value);

    if (!guess) {
        message('No number  ❓');
    }


    else if (guess !== random) {
        if (score > 1) {

            message(guess < random ? 'Too low  📉' : 'Too high  📈');
            score--;
            document.querySelector('.score').textContent = score;


        }
    }
    else if (guess === random) {
        message('You Win🥇');
        document.querySelector('.final_n').textContent = guess;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.final_n').style.paddingRight = '65px';
        document.querySelector('.final_n').style.paddingLeft = '55px';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }

    else {
        message('You loose! TRY AGAIN🔴');
        document.querySelector('.score').textContent = '0'
        document.querySelector('.message').style.color = 'red';
    }
})


