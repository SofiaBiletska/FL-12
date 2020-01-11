let uprize, maxN, maxpprize , pprize, Nuser, attempts, N;
while(confirm('Do you want to play a game ?')===true) {
    maxN = 8;
    uprize = 0;
    maxpprize = 100;
    outer: do {
        attempts = 3;
        pprize = maxpprize;
        N = Math.floor(Math.random() * maxN) + 1;
        inner: for (; attempts > 0; attempts--) {
            Nuser = +prompt('Choose a roulette pocket number from 0 to '
             + maxN + ' \nAttempts left: ' + attempts + '\nTotal prize: ' + uprize +
             '$ \nPossible prize on current attempt: ' + pprize + '$');
            if (Nuser === N) {
                maxN = maxN + 4;
                uprize += pprize;
                maxpprize = maxpprize * 2;
                break inner;
            }
            pprize = pprize/2;
        }
        if (attempts <= 0) {
            alert('Thank you for your participation. Your prize is: ' + uprize + '$');
            break outer;
        }
    } while (confirm('Congratulation, you won! Your prize is: '
        + uprize + '$. Do you want to continue?')===true);
<<<<<<< HEAD
} alert('You did not become a billionaire, but can.');
=======
} alert('You did not become a billionaire, but can.');
>>>>>>> b5736841c6d0c8a3ed13a3b0d598ca2afa121ee5
