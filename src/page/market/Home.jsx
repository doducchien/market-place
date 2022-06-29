import { Button, Col, Pagination, Row } from "antd";
import React from "react";
import CardShoe from "./CardShoe";
import Filter from "./Filter";

const data = [
  {
    velocity: "1-6km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: '0.05 BNB',
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
  },
  {
    velocity: "1-10km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: '0.05 BNB',
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
  },
  {
    velocity: "1-12km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: '0.05 BNB',
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
  },
  {
    velocity: "1-4km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: '0.05 BNB',
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
  },


  {
    velocity: "1-6km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: '0.05 BNB',
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
  },
  {
    velocity: "1-10km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: '0.05 BNB',
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
  },
  {
    velocity: "1-12km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: '0.05 BNB',
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
  },
  {
    velocity: "1-4km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: '0.05 BNB',
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
  },
];

export default function Home() {
  return (
    <div className="pd-top-1rem pd-bot-3rem">
      <Filter />
      <div className="mg-top-50">
        <Row gutter={[24,24]}>
          {data.map((item, index) => {
            return (
              <Col key={index} xl={6} lg={8} md={12} xs={24} sm={24}>
                <CardShoe item={item}/>
              </Col>
            );
          })}
        </Row>
        <Row className="mg-top-20">
          <Col span={24} className='txt-center'>
            <Pagination defaultCurrent={1} total={50} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
