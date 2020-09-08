import React from "react";
import Brick from "../brick/index.js";
import "./style.css";

class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bricks: [1, 2, 3, 4, 5],
    };
  }

  //   add bricks button
  addMoreBricks = () => {
    const newBricksArray = [...this.state.bricks];
    newBricksArray.push(newBricksArray.length + 1);
    this.setState({
      bricks: newBricksArray,
    });
  };
  //   @override method
  // render method returns what is being display on the browser
  render = () => {
    return (
      <div className="wall-container">
        {this.state.bricks.map((brick) => {
          return <Brick key={brick} name={brick} />;
        })}
        <button className="btn" onClick={this.addMoreBricks}>
          Add More
        </button>
      </div>
    );
  };
}

export default Wall;
