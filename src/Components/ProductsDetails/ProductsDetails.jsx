import { useParams } from "react-router-dom";
import { Card, Flex, Image, Tag } from "antd";
import { useEffect, useState } from "react";
import SkeletonComponent from "../SkeletonComponent/SkeletonComponent";
const { Meta } = Card;

function ProductsDetails() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [productId]);

  //   const product = products.find((b) => b.id === +productId);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonComponent />
      ) : products ? (
        <Card
          hoverable
          styles={{
            body: {
              padding: "30px 30px",
              whiteSpace: "wrap",
            },
          }}
          style={{
            width: "90%",
            margin: "0px auto 40px auto",
          }}
        >
          <Flex justify="center" wrap vertical align="center">
            <Image
              alt={products.description}
              src={products.image}
              style={{ width: "200px", padding: "15px" }}
            />
            <Flex vertical align="center" justify="center">
              <Meta
                title={products.title}
                style={{
                  margin: "15px 0px",
                  whiteSpace: "wrap",
                }}
              />
              <Meta
                description={products.description}
                style={{ marginBottom: "15px", whiteSpace: "wrap" }}
              />
              <Tag
                color="#cd201f"
                style={{
                  marginBottom: "15px",
                  padding: "10px 20px",
                  fontSize: "16px",
                }}
              >
                ${products.price}
              </Tag>
              <Tag
                color="red"
                style={{
                  padding: "10px 20px",
                  textTransform: "capitalize",
                  fontSize: "16px",
                }}
              >
                {products.category}
              </Tag>
            </Flex>
          </Flex>
        </Card>
      ) : (
        ""
      )}
    </>
  );
}

export default ProductsDetails;
