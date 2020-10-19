import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/WAVE1-GW/2_Desktop-Hero_Rec_1500x600._CB419165735_.jpg"
        />
        <div className="home__row">
          <Product
            id="12"
            title="The Lean StartupThe Lean Startup The Lean Startup "
            price={19.95}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            }
          />
          <Product
            id="12"
            title="The Lean StartupThe Lean Startup The Lean Startup "
            price={19.95}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            }
          />
          <Product
            id="12"
            title="The Lean StartupThe Lean Startup The Lean Startup "
            price={19.95}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="12"
            title="The Lean StartupThe Lean Startup The Lean Startup "
            price={19.95}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="12"
            title="The Lean StartupThe Lean Startup The Lean Startup "
            price={19.95}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            }
          />
          <Product
            id="12"
            title="The Lean StartupThe Lean Startup The Lean Startup "
            price={19.95}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
