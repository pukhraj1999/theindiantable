import React from "react";
import food1 from "../../assets/banner/food1.jpg";
import food6 from "../../assets/banner/food6.jpg";
import food7 from "../../assets/banner/food7.jpg";
import food8 from "../../assets/banner/food8.jpg";
import food9 from "../../assets/banner/food9.jpg";

import Heading from "./Components/Heading";
import Welcome from "./Components/Welcome";
import StunningLocation from "./Components/StunningLocation";
import Functions from "./Components/Functions";
import Testinomials from "./Components/Testinomials";

function Home() {
  return (
    <div>
      <Heading pic={food6} />
      <Welcome pic={food1} />
      <StunningLocation pic={food7} />
      <Functions pic={food8} />
      <Testinomials pic={food9} />
    </div>
  );
}

export default Home;
