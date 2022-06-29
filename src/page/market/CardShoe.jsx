import { Button, Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import bnb from "../../asset/img/bnb.png";
export default function CardShoe({ item }) {
  const accountMetamask = useSelector((state) => state.metamask.address);
  const { velocity, imgUrl, name, price, level1, luck24, durability100 } = item;
  return (
    <div className="bd-1-sl-cl-common bd-rad-20 pd-1rem cu-po hv-shadow trans-0dot4s">
      <Row justify="space-between">
        <Col className="fw-bold">#1234</Col>
        <Col className="fw-bold">Epic</Col>
      </Row>
      <p className="txt-center">{velocity}</p>
      <div className="h-300 ov-fl-hidden bd-rad-20">
        <img src={imgUrl} alt="" width="100%" className="bd-rad-20" />
      </div>
      <p className="txt-center fs-1dot5rem">{name}</p>
      <p className="fs-1dot5rem txt-center fw-bold">
        {price} <img src={bnb} alt="" height={40} />
      </p>

      <div className="h-150">
        <Row>
          <Col flex={1}>Level 1</Col>
          <Col span={8}>{level1}</Col>
        </Row>
        <Row>
          <Col flex={1}>Luck 24</Col>
          <Col span={8}>{luck24}</Col>
        </Row>
        <Row>
          <Col flex={1}>Durability 100</Col>
          <Col span={8}>{durability100}</Col>
        </Row>
      </div>

      <div className="txt-center">
        <Button
          className={`bd-rad-20 hv-1 fw-bold bd-1-sl-cl-common txt-color-common ${accountMetamask? 'pd-hor-2rem': ''}`}
          style={{ height: 50 }}
       
        >
          {accountMetamask ? 'Buy': 'Connect Wallet'}
        </Button>
      </div>
    </div>
  );
}
