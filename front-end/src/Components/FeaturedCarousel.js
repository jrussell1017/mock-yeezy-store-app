import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function FeaturedCarousel() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Carousel>
        {products.map((el) => {
          if (el.featured) {
            return (
              <Carousel.Item key={el.id} interval={2500}>
                <img
                  className="d-block w-100"
                  id="carousel-image"
                  src={el.image}
                  alt="First product"
                />
                <Carousel.Caption>
                  <h3>Featured Yeezys</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          }
        })}
      </Carousel>
    </div>
  );
}

export default FeaturedCarousel;
