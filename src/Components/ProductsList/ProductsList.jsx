import { useEffect } from "react";
import { useState } from "react";
import { Card, Flex, Image, Tag } from "antd";
import { Link } from "react-router-dom";
import { DoubleRightOutlined } from "@ant-design/icons";
import NoData from "../NoData/NoData";
const { Meta } = Card;

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    setNoData(true);
    setTimeout(() => {
      setNoData(false);
    }, 1500);
  }, []);

  return (
    <Flex
      gap="middle"
      align="start"
      justify="center"
      wrap
      style={{ marginBottom: "30px" }}
    >
      {noData ? (
        <NoData />
      ) : (
        products.map((product) => {
          return (
            <Card
              key={product.id}
              hoverable
              style={{
                width: 240,
                height: 480,
                marginBottom: 15,
                padding: 15,
              }}
              cover={
                <Image
                  alt={product.description}
                  src={product.image}
                  style={{
                    height: 200,
                  }}
                />
              }
            >
              <Meta
                title={product.title.slice(0, 17)}
                style={{ marginBottom: 10 }}
              />
              <Meta
                description={product.description.slice(0, 160)}
                style={{
                  textAlign: "left",
                  fontSize: 13,
                  marginBottom: "10px",
                }}
              />
              <Tag color="#cd201f" style={{ margin: "0px 10px 10px 0px" }}>
                ${product.price}
              </Tag>
              <Link color="#3b5999" to={`${product.id}`}>
                Read More!
                <DoubleRightOutlined style={{ marginLeft: "4px" }} />
              </Link>
            </Card>
          );
        })
      )}
    </Flex>
  );
}

export default ProductsList;
