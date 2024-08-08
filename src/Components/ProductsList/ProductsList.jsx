import { useEffect } from "react";
import { useState } from "react";
import { Card, Flex, Image, Tag } from "antd";
import { Link } from "react-router-dom";
import { DoubleRightOutlined } from "@ant-design/icons";
const { Meta } = Card;

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Flex gap="middle" align="start" justify="center" wrap>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            hoverable
            style={{
              width: 240,
              marginBottom: 15,
              padding: 15,
            }}
            cover={
              <Image
                alt={product.description}
                src={product.image}
                style={{
                  height: 195,
                }}
              />
            }
          >
            <Meta title={product.title} style={{ marginBottom: 10 }} />
            <Meta
              description={product.description.slice(0, 160)}
              style={{ textAlign: "left", fontSize: 13, marginBottom: "10px" }}
            />
            <Tag color="#cd201f" style={{ margin: "0px 12px 10px 0px" }}>
              ${product.price}
            </Tag>
            <Link color="#3b5999" to={`${product.id}`}>
              Read More!
              <DoubleRightOutlined style={{ marginLeft: "5px" }} />
            </Link>
          </Card>
        );
      })}
    </Flex>
  );
}

export default ProductsList;
