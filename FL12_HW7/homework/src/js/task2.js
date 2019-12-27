let uprize, maxN, maxpprize , pprize, Nuser, attempts, N;
while(confirm('Do you want to play a game?')) {
    maxN = 8;
    uprize = 0;
    maxpprize = 100;
    do {
        attempts = 3;
        pprize = maxpprize;
        N = Math.floor(Math.random() * maxN) + 1;
        for (; attempts > 0; attempts--) {
            Nuser = +prompt('Choose a roulette pocket number from 0 to '
            + maxN + ' \nAttempts left: ' + attempts + '\nTotal prize: ' + uprize +
            '$ \nPossible prize on current attempt: ' + pprize + '$');
            if (Nuser === N) {
                maxN = maxN + 4;
                uprize += pprize;
                maxpprize = maxpprize * 2;
                break;
            }
            pprize = pprize/2;
        }
        if (attempts <= 0) {
            alert('Thank you for your participation. Your prize is: ' + uprize + '$');
            break;
        }
    } while (confirm('Congratulation, you won! Your prize is: '
        + uprize + '$. Do you want to play a game again?'));
}
alert('You did not become a billionaire, but can.');
