import { Button, Col, Progress, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import bnb from "../../asset/img/bnb.png";
import heartImg from "../../asset/img/heart.png";
import flashImg from "../../asset/img/flash.png";
import starImg from "../../asset/img/star.png";
export default function CardShoe({ item }) {
  const accountMetamask = useSelector((state) => state.metamask.address);
  const { velocity, imgUrl, name, price, level1, luck24, durability100, heart, flash, star } = item;
  return (
    <div className="bd-1-sl-cl-common bd-rad-20 pd-1rem cu-po hv-shadow trans-0dot4s">

      <p className="txt-center fw-bold bg-gd-inventory fs-1rem bd-rad-10">JOGGING COMMON</p>
      <div className="h-300 ov-fl-hidden bd-rad-20">
        <img src={imgUrl} alt="" width="100%" className="bd-rad-20" />
      </div>
      <p className="fs-1dot5rem txt-center fw-bold">
        {price} <img src={bnb} alt="" height={40} />
      </p>

      <Progress percent={50} status="active" strokeColor='#572CE7'/>
      <div className="mg-top-20">
        <Row justify="space-around">
          <Col>
              <img src={heartImg} alt="" height={40}/>&nbsp;
              <span>{heart}</span>
          </Col>
          <Col>
              <img src={flashImg} alt="" height={40}/>&nbsp;
              <span>{flash}</span>
          </Col>
          <Col>
              <img src={starImg} alt="" height={40}/>&nbsp;
              <span>{star}</span>
          </Col>
        </Row>
      </div>


{/* 
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
      </div> */}

      {/* <div className="txt-center">
        <Button
          className={`bd-rad-20 hv-1 fw-bold bd-1-sl-cl-common txt-color-common ${accountMetamask? 'pd-hor-2rem': ''}`}
          style={{ height: 50 }}
       
        >
          {accountMetamask ? 'Buy': 'Connect Wallet'}
        </Button>
      </div> */}
    </div>
  );
}
