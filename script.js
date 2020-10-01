const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const randomDamage = () => {
	return getRandomInt(1, 11);
};

const chooseOption = (opt1, opt2) => {
	randNum = Math.round(Math.random());
	return randNum ? opt2 : opt1;
};

const attackPlayer = (health) => {
	return health - randomDamage();
};

const logHealth = (player, health) => {
	console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
	console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
	return health <= 0;
};

const fight = (player1, player2, player1health, player2health) => {
	while (true) {
		attacker = chooseOption(player1, player2);
		if (attacker === player1) {
			player2health = attackPlayer(player2health);
			logHealth(player2, player2health);
			if (isDead(player2health)) {
				logDeath(player1, player2);
				break;
			}
		} else {
			player1health = attackPlayer(player1health);
			logHealth(player1, player1health);
			if (isDead(player1health)) {
				logDeath(player2, player1);
				break;
			}
		}
	}
};

fight("Mihir ", "Aditya", 100, 100);
