import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import Form from "react-bootstrap/Form";
// import { FormControl } from "react-bootstrap";
// import { FormGroup } from "react-bootstrap";
// import { FormText } from "react-bootstrap";
// import { FormLabel } from "react-bootstrap";
// import  {Button} from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    featured: null,
    image: "",
    price: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, navigate]);

  const handleTextChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/products/${id}`, product)
      .then(() => {
        navigate(`/products`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheckboxChange = (e) => {
    setProduct({ ...product, featured: !product.featured });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name:</label>
        <input
          id="name"
          value={product.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name.."
          required
        />
        <label htmlFor="description">Product Description:</label>
        <input
          id="description"
          type="text"
          value={product.description}
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          name="price"
          value={product.price}
          onChange={handleTextChange}
        />
        <label htmlFor="image">Product image:</label>
        <input
          id="image"
          type="text"
          value={product.image}
          onChange={handleTextChange}
        />
        <label htmlFor="featured">Featured: </label>
        <input
          id="featured-button"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={product.featured}
        />
        <br />
        <br />
        <input type="submit" />
      </form>

      {/* <Form onSubmit={()=>handleSubmit()}>
        <FormGroup className="mb-3" controlId="formBasicText">
          <FormLabel>Product Name</FormLabel>
          <FormControl type="text" defaultValue={product.name} onChange={handleTextChange} placeholder="Enter product name..." />
          <FormText className="text-muted">i.e. ("Yeezy 350")</FormText>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicText">
          <FormLabel>Description</FormLabel>
          <FormControl type="text" defaultValue={product.description} onChange={handleTextChange} placeholder="Description..." />
          <FormText className="text-muted">i.e. ("Oat & Fire")</FormText>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicNumber">
          <FormLabel>Price</FormLabel>
          <FormControl type="number" defaultValue={product.price} onChange={handleTextChange} placeholder="Price..." />
          <FormText className="text-muted">i.e. ("200")</FormText>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicText">
          <FormLabel>Image</FormLabel>
          <FormControl type="text" defaultValue={product.image} onChange={handleTextChange} placeholder="Image Url..." />
          <FormText className="text-muted">
            i.e.
            ("http://sneakerbardetroit.com/wp-content/uploads/2021/06/adidas-Yeezy-Boost-350-V2-MX-Oat-GW3773-On-Foot.jpg")
          </FormText>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" onChange={handleCheckboxChange} defaultChecked={product.featured} label="Featured" />
        </FormGroup>

        <Button variant="primary" onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </Form> */}
    </div>
  );
}


export default EditProduct;
