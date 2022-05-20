import "./WordBank.css";

function WordBank() {
	const words = [
		"Apple",
		"Avocado",
		"Banana",
		"Cherry",
		"Coconut",
		"Durian",
		"Pear",
		"Papaya",
		"Watermelon",
		"Pineapple",
	];
	let correctWord = words[Math.floor(Math.random() * words.length)];
	return (
		<div className="wordbank">
			<h1>{correctWord}</h1>
		</div>
	);
}

export default WordBank;
