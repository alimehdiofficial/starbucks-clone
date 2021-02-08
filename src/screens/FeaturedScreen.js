import React from "react";
import Featured from "../Featured";
import "./FeaturedScreen.css";
import Heading from "../Heading";
import Info from "../Info";
import { Fade } from "react-awesome-reveal";

function FeaturedScreen() {
  return (
    <div className="featuredScreen">
      <Fade>
        <Heading heading="SELF-CARE IS COOL" />
      </Fade>
      <Fade>
        <div className="featuredScreen__discover">
          <Info
            title="Honey Almondmilk Flat White"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67893.png"
            info="Our signature espresso meets creamy sweetness."
            link="Order"
            color="#1e3932"
            background="#f0ebe0"
            className="info__hoverLight"
          />
          <Info
            title="NEW Honey Almondmilk Cold Brew"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67894.png"
            info="With a hint of honey and an almondmilk finish. "
            link="Order"
            color="#1e3932"
            background="#f0ebe0"
            className="info__hoverLight"
          />
        </div>
      </Fade>

      <Fade>
        <Heading heading="CREAMY, DREAMY COFFEE" />
      </Fade>
      <Fade>
        <div className="featuredScreen__discover">
          <Info
            title="NEW Pistachio Latte"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67901.png"
            info="Espresso, steamed milk and nutty pistachio sauce."
            link="Order"
            color="white"
            background="#1e3932"
            className="info__hoverDark"
          />
          <Info
            title="NEW Pistachio Frappuccino® blended beverage"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67900.png"
            info="Finished with whipped cream and a brown-buttery topping. "
            link="Order"
            color="white"
            background="#1e3932"
            className="info__hoverDark"
          />

          <Info
            title="Nitro Cold Brew"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67905.png"
            info="Velvety-smooth with a lush, cascading texture. "
            link="Order"
            color="white"
            background="#1e3932"
            className="info__hoverDark"
          />

          <Info
            title="Nitro Cold Brew with Sweet Cream"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67906.png"
            info="Topped with house-made sweet cream."
            link="Order"
            color="white"
            background="#1e3932"
            className="info__hoverDark"
          />
        </div>
      </Fade>

      <Fade>
        <Heading heading="GOOD FOOD, GOOD MOOD" />
      </Fade>
      <Fade>
        <div className="featuredScreen__discover">
          <Info
            title="NEW Kale & Portabella Mushroom Sous Vide Egg Bites"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67911.png"
            info="With cage-free eggs and Monterey Jack cheese."
            link="Order"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
          <Info
            title="Impossible™ Breakfast Sandwich*"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67912.png"
            info="Featuring savory Impossible™ Sausage Made from Plants."
            link="Order"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
        </div>
      </Fade>
      <Fade>
        <div className="featuredScreen__featured">
          <Featured
            title="MEATLESS MONDAYS AT STARBUCKS"
            info="Enjoy $2 off any vegetarian breakfast sandwich or wrap every Monday in January.**"
            link="Order now"
            path=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67916.png"
            order="2"
            background="#1e3932"
            color="white"
            className="featured__hoverDark"
          />
        </div>
      </Fade>
    </div>
  );
}

export default FeaturedScreen;
