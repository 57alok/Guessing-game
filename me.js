
const random = Math.trunc(Math.random() * 20);
let score = 20;
document.querySelector('.play_btn').addEventListener('click', function () {
    let guess = Number(document.querySelector('.play_in').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number  ❓';
    }
    else if (guess === random) {
        document.querySelector('.message').textContent = 'You Win🥇';
        document.querySelector('.final_n').textContent = guess;

    }
    else if (guess !== random) {
        if (guess < random) {
            document.querySelector('.message').textContent = 'Too low  📉';
            score--;
            document.querySelector('.score').textContent = score;
        }


        else if (guess > random) {
            document.querySelector('.message').textContent = 'Too high  📈';
            score--;
            document.querySelector('.score').textContent = score;
        }

    }

})


