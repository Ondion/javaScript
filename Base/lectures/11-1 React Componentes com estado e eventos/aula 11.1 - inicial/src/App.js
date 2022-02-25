import React from "react";
import TvShowList from "./components/TvShowList";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>🍿 Fantástica Fábrica - Filmes</h1>
        <TvShowList />
      </main>
    );
  }
}

export default App;
