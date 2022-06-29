import { Col, Pagination, Row } from "antd";
import React, { useState } from "react";
import CardShoe from "./CardShoe";
import Filter from "./Filter";
import InventoryDetail from "./InventoryDetail";

const data = [
  {
    velocity: "1-6km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: "0.05 BNB",
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
    heart: "6.0",
    flash: "100.0",
    star: "8.0",
  },
  {
    velocity: "1-10km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: "0.05 BNB",
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
    heart: "6.0",
    flash: "100.0",
    star: "8.0",
  },
  {
    velocity: "1-12km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: "0.05 BNB",
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
    heart: "6.0",
    flash: "100.0",
    star: "8.0",
  },
  {
    velocity: "1-4km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: "0.05 BNB",
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
    heart: "6.0",
    flash: "100.0",
    star: "8.0",
  },

  {
    velocity: "1-6km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: "0.05 BNB",
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
    heart: "6.0",
    flash: "100.0",
    star: "8.0",
  },
  {
    velocity: "1-10km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: "0.05 BNB",
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
    heart: "6.0",
    flash: "100.0",
    star: "8.0",
  },
  {
    velocity: "1-12km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: "0.05 BNB",
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
    heart: "6.0",
    flash: "100.0",
    star: "8.0",
  },
  {
    velocity: "1-4km/h",
    imgUrl:
      "https://preview.redd.it/88ax2h7m6p481.jpg?width=640&crop=smart&auto=webp&s=c5e0ebc05299a3bce7761099934c9b4db8063f3c",
    name: "Walking shoes",
    price: "0.05 BNB",
    level1: "Mint 2",
    luck24: "Resistance 26",
    durability100: "Efficiency 30",
    heart: "6.0",
    flash: "100.0",
    star: "8.0",
  },
];

export default function Inventory() {
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState({});
  const onShowDetail = (item) => {
    setShowDetail(true);
    setDetail(item);
  };
  return (
    <div className="pd-top-1rem pd-bot-3rem">
      <Filter />
      <div className="mg-top-50">
        <Row gutter={[24, 24]}>
          {data.map((item, index) => {
            return (
              <Col key={index}  xl={6} lg={8} md={12} xs={24} sm={24}onClick={() => onShowDetail(item)}>
                <CardShoe item={item} />
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
      {showDetail && (
        <InventoryDetail
          detail={detail}
          showDetail={showDetail}
          setShowDetail={setShowDetail}
        />
      )}
    </div>
  );
}
