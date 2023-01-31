import React from "react";
import "./App.css";

//Transform the App.js into a class-based component
class App extends React.Component {
  //Implement a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows
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
  //Add a button that toggles the show state. When the show state is true the person's profile will appear
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
