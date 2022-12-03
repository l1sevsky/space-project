import React from "react";
import { TAsteroid } from "resources/helpers/asteroidsUtils/types";
import InfoSection from "components/Asteroids/UI/InfoSection";
import MapWrapper from "components/Asteroids/UI/MapWrapper";

type Tprops = {
  infoList: TAsteroid[][];
  refProp: React.LegacyRef<HTMLDivElement>;
  selected: Function;

  asteroidInfo: TAsteroid | null;
  sourceRef: string;
};

const Main = ({
  infoList,
  refProp,
  selected,
  asteroidInfo,
  sourceRef,
}: Tprops) => {
  return (
    <main>
      <div className="title">
        <h1>NEAR - EARTH ASTEROIDS</h1>
      </div>
      <div className="astro-section">
        <MapWrapper
          refProp={refProp}
          infoList={infoList}
          selected={selected}
          asteroidInfo={asteroidInfo}
        />
        <InfoSection asteroidInfo={asteroidInfo} sourceRef={sourceRef} />
      </div>
    </main>
  );
};

export default Main;
