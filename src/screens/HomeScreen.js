import React from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import Featured from "../Featured";
import Heading from "../Heading";
import Info from "../Info";
import { Fade } from "react-awesome-reveal";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Fade>
        <div className="homeScreen__top">
          <h4>
            We’re working hard to put the health and well-being of our partners
            and customers first in all that we do. <Link>Learn more</Link>
          </h4>
        </div>
      </Fade>
      <Fade>
        <div className="homeScreen__bottom">
          <div className="homeScreen__bottomLeft">
            <h4>Investing in our communities</h4>
            <p>
              The Starbucks Foundation awarded grants to over 400 nonprofits
              serving communities of color. Recipients were nominated by
              Starbucks partners (employees).
            </p>
            <button>Learn more</button>
          </div>
          <div className="homeScreen__bottomRight">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68026.jpg"
              alt=""
            />
          </div>
        </div>
      </Fade>
      <Fade>
        <Heading heading="TODAY IS YOURS" />
      </Fade>
      <div className="homeScreen__featured">
        <Fade>
          <Featured
            title="NICELY NONDAIRY"
            info="Say yes to sips of delight with our Honey Almondmilk Flat White and new Honey Almondmilk Cold Brew."
            link="Explore the honey drinks"
            path=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68069.png"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
        <Fade>
          <Featured
            title="PISTACHIOOOOOOO"
            info="Embrace creamy coffee bliss with our new Pistachio Latte and Pistachio Frappuccino® blended beverage."
            link="Try the new pistachio drinks"
            path=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67826.png"
            order="2"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
      </div>
      <Fade>
        <Heading heading="MORE TO DISCOVER" />
      </Fade>
      <Fade>
        <div className="homeScreen__discover">
          <Info
            title="Order and pick up. Easy as that."
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67828.jpg"
            info="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
            link="See pickup options"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
          <Info
            title="Coffee delivered. Day made."
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67829.jpg"
            info="Make everything a little brighter. Enjoy a $0 Delivery Fee* on your first Uber Eats order over $15 through 1/31."
            link="Order now"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
        </div>
      </Fade>
    </div>
  );
}

export default HomeScreen;
