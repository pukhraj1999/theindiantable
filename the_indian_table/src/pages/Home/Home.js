import React from "react";
import food1 from "../../assets/gallery/food1.jpg";
import food6 from "../../assets/gallery/food6.jpg";
import food7 from "../../assets/gallery/food7.jpg";
import food8 from "../../assets/gallery/food8.jpg";
import food9 from "../../assets/gallery/food9.jpg";

import Heading from "./Components/Heading";
import Welcome from "./Components/Welcome";
import StunningLocation from "./Components/StunningLocation";
import Functions from "./Components/Functions";
import Testinomials from "./Components/Testinomials";

function Home() {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Heading pic={food6} />
      <Welcome pic={food1} />
      <StunningLocation pic={food7} />
      <Functions pic={food8} />
      <Testinomials pic={food9} />
    </div>
  );
}

export default Home;
