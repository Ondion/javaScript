import React from "react";
import catalog from "../data";
import TvShow from "./TvShow";

class TvShowList extends React.Component {

  render() {
    
    return (
      <div>
        <section>
          {catalog
            .map((tvShow) => (
              <TvShow key={tvShow.id} tvShowInfo={tvShow} />
            ))}
        </section>
      </div>
    );
  }
}

export default TvShowList;
