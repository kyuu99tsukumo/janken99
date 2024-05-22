function playGame(playerChoice) {
    const choices = ['グー', 'チョキ', 'パー'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    if (playerChoice === computerChoice) {
        result = '引き分け！';
    } else if (
        (playerChoice === 'グー' && computerChoice === 'チョキ') ||
        (playerChoice === 'チョキ' && computerChoice === 'パー') ||
        (playerChoice === 'パー' && computerChoice === 'グー')
    ) {
        result = 'あなたの勝ち！';
    } else {
        result = 'コンピューターの勝ち！';
    }

    document.getElementById('result').textContent = `あなた: ${playerChoice}, コンピューター: ${computerChoice} - ${result}`;
}

