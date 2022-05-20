import "./ProgressBar.css";
import stepStart from "../imgs/zero.png";
import stepOne from "../imgs/one.png";
import stepTwo from "../imgs/two.png";
import stepThree from "../imgs/three.png";
import stepFour from "../imgs/four.png";
import stepFive from "../imgs/five.png";
import stepSix from "../imgs/six.png";

function ProgressBar(props) {
    // const maxMistakes = 6;
    // const noOfMistakes = props.noOfMistakes;
    let noOfMistakes = 0;
	const imgStepsArr = [
		stepStart, // 0
		stepOne,   // 1
		stepTwo,   // 2
		stepThree, // 3
		stepFour,  // 4
		stepFive,  // 5
		stepSix,   // 6
	];

    


	return (
		<div className="ProgressBar">
			<img src={imgStepsArr[noOfMistakes]} alt=""></img>
		</div>
	);
}

export default ProgressBar;
