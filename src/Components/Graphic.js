import stepStart from "../imgs/zero.png";
import stepOne from "../imgs/one.png";
import stepTwo from "../imgs/two.png";
import stepThree from "../imgs/three.png";
import stepFour from "../imgs/four.png";
import stepFive from "../imgs/five.png";
import stepSix from "../imgs/six.png";

function Graphic() {
	const defaultState = {
		maxWrong: 6,
		graphics: [
			stepStart,
			stepOne,
			stepTwo,
			stepThree,
			stepFour,
			stepFive,
			stepSix,
		],
	};

	return defaultState;
}

export default Graphic;
