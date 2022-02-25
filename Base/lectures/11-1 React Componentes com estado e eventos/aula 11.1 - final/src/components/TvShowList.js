import React from "react";
import catalog from "../data";
import TvShow from "./TvShow";

class TvShowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterGenre: ""
    }
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    console.log(this.state)

    return (
      <div>
        <input type='text' name='filterName' onChange={this.handleFilter} />
        <input type='text' name='filterGenre' onChange={this.handleFilter} />
        <section>
          {catalog
            .filter((serie) => serie.name.includes(this.state.filterName))
            .filter((serie) => serie.genre.includes(this.state.filterGenre))
            .map((tvShow) => (
              <TvShow key={tvShow.id} tvShowInfo={tvShow} />
            ))}
        </section>
      </div>
    );
  }
}

export default TvShowList;
