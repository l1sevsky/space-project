import React from "react";
import RefInfoButton from "components/Asteroids/UI/RefInfoButton";
import InfoBlock from "components/Asteroids/InfoBlock";
import { TAsteroid } from "resources/helpers/asteroidsUtils/types";

import { getStringDate } from "resources/helpers/asteroidsUtils/getStringDate";
import { round } from "resources/helpers/asteroidsUtils/round";

type Tprops = {
  asteroidInfo: TAsteroid | null;
  sourceRef: string;
};

const InfoSection = ({ asteroidInfo, sourceRef }: Tprops) => {
  return (
    <aside className="info-section">
      {asteroidInfo ? (
        <section className="asteroid-info">
          <InfoBlock id="name" textTitle="NAME">
            <p>{asteroidInfo.name}</p>
          </InfoBlock>

          <InfoBlock id="diameter" textTitle="DIAMETER SIZES">
            <p>
              {round(
                asteroidInfo.estimated_diameter.meters.estimated_diameter_min
              )}{" "}
              -{" "}
              {round(
                asteroidInfo.estimated_diameter.meters.estimated_diameter_max
              )}{" "}
              Meters
            </p>
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
            <p>
              {round(
                asteroidInfo.estimated_diameter.miles.estimated_diameter_min
              )}{" "}
              -{" "}
              {round(
                asteroidInfo.estimated_diameter.miles.estimated_diameter_max
              )}{" "}
              Miles
            </p>
            <p>
              {round(
                asteroidInfo.estimated_diameter.feet.estimated_diameter_min
              )}{" "}
              -{" "}
              {round(
                asteroidInfo.estimated_diameter.feet.estimated_diameter_max
              )}{" "}
              Feet
            </p>
          </InfoBlock>

          <InfoBlock id="close-a-date" textTitle="CLOSE APPROACH DATE">
            <p>{getStringDate(asteroidInfo)}</p>
            <p>
              MISS DISTANCE:{" "}
              {round(
                asteroidInfo.close_approach_data[0].miss_distance.kilometers
              )}{" "}
              Kilometers
            </p>
          </InfoBlock>

          <InfoBlock id="velocity" textTitle="RELATIVE VELOCITY">
            <p>
              {round(
                asteroidInfo.close_approach_data[0].relative_velocity
                  .kilometers_per_hour
              )}{" "}
              Km / Hour
            </p>
            <p>
              {round(
                asteroidInfo.close_approach_data[0].relative_velocity
                  .kilometers_per_second
              )}{" "}
              Km / Sec
            </p>
            <p>
              {round(
                asteroidInfo.close_approach_data[0].relative_velocity
                  .miles_per_hour
              )}{" "}
              Miles / Hour
            </p>
          </InfoBlock>

          <InfoBlock id="hazardous" textTitle="POTENTIALLY HAZARDOUS">
            <p>
              {asteroidInfo.is_potentially_hazardous_asteroid
                ? "True"
                : "False"}
            </p>
          </InfoBlock>
        </section>
      ) : (
        <section className="asteroid-info">
          <p style={{ textAlign: "center" }}>
            Click on Asteroid Icon on Interactive Map to get information about
            Near - Earth Object.
          </p>
        </section>
      )}

      <RefInfoButton>
        <a href={sourceRef}>
          <span>NASA API Information Source</span>
        </a>
      </RefInfoButton>
    </aside>
  );
};

export default InfoSection;
