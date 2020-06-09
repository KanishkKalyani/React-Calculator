import React from "react";

class CalcDisplay extends React.Component {
	render() {
		return (
			<div className="display">
				<p>{this.props.disp}</p>
			</div>
		);
	}
}

export default CalcDisplay;
