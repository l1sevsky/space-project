import React from "react";
import MiniInfoBlock from "components/Asteroids/MinInfoBlock/MinInfoBlock";
import { TAsteroid } from "resources/helpers/asteroidsUtils/types";

import { getStringDate } from "resources/helpers/asteroidsUtils/getStringDate";
import { round } from "resources/helpers/asteroidsUtils/round";

type Tprops = {
  infoList: TAsteroid[][];
  refProp: React.LegacyRef<HTMLDivElement>;
  selected: Function;

  asteroidInfo: TAsteroid | null;
};

const MapWrapper = ({ infoList, refProp, selected, asteroidInfo }: Tprops) => {
  return (
    <section
      className="map-wrapper"
      onClick={() => {
        selected(null);
      }}
    >
      <div ref={refProp} className="margin-wrapper">
        {infoList.map((arc, id) => (
          <div key={id} className="arc">
            {arc.map((asteroid) => (
              <button
                key={asteroid.id}
                onClick={(event) => {
                  selected(asteroid);
                  event.stopPropagation();
                }}
                className="asteroid"
              ></button>
            ))}
          </div>
        ))}

        <div className="earth"></div>
      </div>

      {asteroidInfo ? (
        <div className="modal">
          <MiniInfoBlock id="name" textTitle="NAME:">
            <p>{asteroidInfo.name}</p>
          </MiniInfoBlock>

          <MiniInfoBlock id="diameter" textTitle="DIAMETER SIZES:">
            <p>
              {round(
                asteroidInfo.estimated_diameter.kilometers
                  .estimated_diameter_min
              )}{" "}
              -{" "}
              {round(
                asteroidInfo.estimated_diameter.kilometers
                  .estimated_diameter_max
              )}{" "}
              Kilometers
            </p>
          </MiniInfoBlock>

          <MiniInfoBlock id="close-a-date" textTitle="CLOSE APPROACH DATE:">
            <p>{getStringDate(asteroidInfo)}</p>
          </MiniInfoBlock>

          <MiniInfoBlock id="" textTitle="MISS DISTANCE:">
            <p>
              {round(
                asteroidInfo.close_approach_data[0].miss_distance.kilometers
              )}{" "}
              Kilometers
            </p>
          </MiniInfoBlock>

          <MiniInfoBlock id="velocity" textTitle="RELATIVE VELOCITY:">
            <p>
              {round(
                asteroidInfo.close_approach_data[0].relative_velocity
                  .kilometers_per_hour
              )}{" "}
              Km / Hour
            </p>
          </MiniInfoBlock>

          <MiniInfoBlock id="hazardous" textTitle="POTENTIALLY HAZARDOUS:">
            <p>
              {asteroidInfo.is_potentially_hazardous_asteroid
                ? "True"
                : "False"}
            </p>
          </MiniInfoBlock>
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default MapWrapper;
