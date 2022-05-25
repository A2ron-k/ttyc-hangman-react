import "./App.css";
import React, { Component } from "react";
import Header from "./Components/Header";
import Graphic from "./Components/Graphic";

class App extends Component {
	defaultState = Graphic();

	/**
	 * The constructor function is called when the component is first created.
	 * It @sets the initial state of the component
	 * */

	constructor(props) {
		super(props);

		this.state = {
			mistake: 0,
			guess: new Set([]),
			random_ans: "",
			desc: "",
		};
	}

	/** Fetching the data from the API and setting the state of the component.
	 * Updates the State with the new answer and desciption upon initilization of App
	 */
	componentDidMount() {
		fetch("https://random-words-api.vercel.app/word")
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					random_ans: data[0]["word"].toLowerCase(),
					desc: data[0]["definition"],
				})
			);
	}

	// Refetches when reset button is clicked
	reFetch() {
		fetch("https://random-words-api.vercel.app/word")
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					random_ans: data[0]["word"],
					desc: data[0]["definition"],
				})
			);
	}

	/**
	 * This function generates a keyboard of letters that the user can click on to guess the word
	 * @returns An array of buttons.
	 */
	generateKeyboard() {
		const keys = "qwertyuiopasdfghjklzxcvbnm";
		return keys.split("").map((letter) => (
			<>
				<button
					key={letter}
					value={letter}
					onClick={this.handleGuess}
					disabled={this.state.guess.has(letter)}
				>
					{letter.toUpperCase()}
				</button>
				<div class="space"></div>
			</>
		));
	}


	/** This is a function that is called when the user clicks on a letter.
	 * It takes the value of the letter and adds it to the state.guess.
	 * It also updates the state.mistake by adding 1 if the letter is not in the answer.
	 */

	handleGuess = (event) => {
		let letter = event.target.value;
		this.setState((new_stat) => ({
			guess: new_stat.guess.add(letter),
			mistake:
				new_stat.mistake +
				(new_stat.random_ans.includes(letter) ? false : true),
		}));
	};

	/**
	 * If the letter is in the state.guess, then return the letter, otherwise return a blank space
	 * @returns The guessedWord function is returning the state of the answer.
	 */

	guessedWord() {
		return this.state.random_ans
			.split("")
			.map((letter) => (this.state.guess.has(letter) ? letter : " _ "));
	}

	/* Resetting the game. */
	resetGame = () => {
		this.setState({
			mistake: 0,
			guess: new Set([]),
			random_ans: "",
			desc: "",
		});
		this.reFetch();
	};

	render() {
		/* This is a boolean that is checking if the game is over. */
		const gameFin = this.state.mistake >= this.defaultState.maxWrong;
		let keyboard = this.generateKeyboard();
		const isWinner = this.guessedWord().join("") === this.state.random_ans;

		if (isWinner === true) {
			keyboard = " You have won";
		}

		if (gameFin === true) {
			keyboard = "You have lost";
		}

		return (
			<div className="main-container">
				<Header />

				<div>
					Wrong Guesses: {this.state.mistake} of{" "}
					{this.defaultState.maxWrong}
				</div>

				<div className="graphic-container">
					<img
						src={this.defaultState.graphics[this.state.mistake]}
						alt=""
					></img>
				</div>

				<div className="input-container">
					<p>Hint: {this.state.desc}</p>
					<p>Win/Loss</p>
					<p>
						{!gameFin ? this.guessedWord() : this.state.random_ans}
					</p>
					<div className="keyboard-container">{keyboard}</div>
          <br/>
					<button onClick={this.resetGame}>Reset</button>
				</div>
			</div>
		);
	}
}

export default App;
