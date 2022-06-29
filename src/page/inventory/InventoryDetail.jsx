import { Col, Modal, Row } from "antd";
import React, { useState } from "react";

import starImg from '../../asset/img/star.png'
import flashImg from '../../asset/img/flash.png'
import heartImg from '../../asset/img/heart.png'

import airBnbImg from '../../asset/img/air-bnb.png'
import leaseImg from '../../asset/img/lease.png'
import mintImg from '../../asset/img/mint.png'

export default function InventoryDetail({detail, showDetail, setShowDetail}) {
    const {imgUrl, velocity,name, price, level1, luck24, durability100, heart, flash, star} = detail;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setShowDetail(false)
  };

  const handleOk = () => {
    setShowDetail(false);
  };

  const handleCancel = () => {
    setShowDetail(false);
  };

  return (
    <Modal
    //   title="Basic Modal"
      visible={true}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
     <div>
        <Row justify="space-between">
            <Col span={12}>
                <img src={imgUrl} alt="" width='100%'/>
                <Row justify="space-between mg-top-10">
                    <Col>{name}</Col>
                    <Col>{velocity}</Col>
                </Row>
            </Col>
            <Col span={6}>
                <p>#1234</p>
                <p>Level 1</p>
                <p>Mint 2</p>
                <p>Durability 100</p>
                <p>Luck 24</p>
                <p>Resistance 26</p>
                <p>Efficiency 30</p>
            </Col>
        </Row>
        <Row align="middle" justify="space-between" className="mg-top-20">
            <Col span={8} className='txt-center'>
                <img src={starImg} alt="" height={60}/>
            </Col>
            <Col span={8} className='txt-center'>
                <img src={flashImg} alt="" height={60}/>
            </Col>
            <Col span={8} className='txt-center'>
                <img src={heartImg} alt="" height={60}/>
            </Col>
        </Row>
        <Row align="middle" justify="space-between" className="mg-top-20">
            <Col span={8} className='txt-center'>
                <img src={airBnbImg} alt="" height={60}/>
            </Col>
            <Col span={8} className='txt-center'>
                <img src={leaseImg} alt="" height={60}/>
            </Col>
            <Col span={8} className='txt-center'>
                <img src={mintImg} alt="" height={60}/>
            </Col>
        </Row>
     </div>
    </Modal>
  );
}
