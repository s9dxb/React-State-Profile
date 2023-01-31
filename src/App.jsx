import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Elvis Presley",
      bio: "U.S. popular singer, the “King of Rock and Roll.",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/PresleyPromo1954PhotoOnly.jpg",
      profession: "Singer - Actor",
    },
    show: true,
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="Elvis Presley"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}

export default App;
