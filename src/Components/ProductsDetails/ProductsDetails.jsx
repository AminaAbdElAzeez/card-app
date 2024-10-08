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
    setLoading(true);
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  const product = products.find((b) => b.id === +productId);

  return (
    <>
      {loading ? (
        <SkeletonComponent />
      ) : product ? (
        <Card
          hoverable
          styles={{
            body: {
              padding: "30px 20px",
              width: "90%",
              margin: "0px auto",
            },
          }}
          style={{
            width: "90%",
            margin: "0px auto 40px auto",
          }}
        >
          <Flex justify="center" wrap vertical align="center">
            <Image
              alt={product.description}
              src={product.image}
              style={{ width: "190px", padding: "15px" }}
            />
            <Flex vertical align="center" justify="center">
              <Meta
                title={product.title}
                style={{
                  margin: "15px 0px",
                }}
              />
              <Meta
                description={product.description}
                style={{ marginBottom: "15px" }}
              />
              <Tag
                color="#cd201f"
                style={{
                  marginBottom: "15px",
                  padding: "10px 20px",
                  fontSize: "16px",
                }}
              >
                ${product.price}
              </Tag>
              <Tag
                color="red"
                style={{
                  padding: "10px 20px",
                  textTransform: "capitalize",
                  fontSize: "16px",
                }}
              >
                {product.category}
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
