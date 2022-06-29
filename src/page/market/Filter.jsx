import { Col, Row, Select } from "antd";
import React from "react";
const { Option } = Select;
export default function Filter() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="fs-1dot2rem">
      <Row align="middle" justify="space-between" gutter={[, 20]}>
        <Col xl={6} lg={6} md={24} sm={24} xs={24} className='fw-bold'>Total: 500 Shoes</Col>
        <Col xl={18} lg={18} md={24} sm={24} xs={24}>
          <Row gutter={[30, 12]} justify='end'>
            <Col xl={10} lg={10} md={24} sm={24} xs={24}>
              <Select
                defaultValue="1"
                // style={{ width: 120 }}
                onChange={handleChange}
                size='large'
                style={{width: '100%'}}
              >
                <Option  value="1">From the lowest to highest price</Option>
                <Option >From the lowest to highest rarity</Option>
                <Option  value="2">From the lowest to highest level</Option>
                <Option  value="3">From the highest to lowest price</Option>
                <Option  value="4">From the hightest to lowest rarity</Option>

                <Option  value="5">From the hightest to lowest level</Option>
              </Select>
            </Col>

            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <Select
                defaultValue="1"
                // style={{ width: 120 }}
                onChange={handleChange}
                size='large'
                style={{width: '100%'}}

              >
                <Option value="1">All NFT types</Option>
                <Option value="2">Walking Shoes</Option>
                <Option value="3">Running Shoes</Option>
                <Option value="4">Hiking Shoes</Option>
                <Option value="5">Shoeboxes</Option>

                <Option value="6">Bikes</Option>
                <Option value="7">Swimsuits</Option>
                <Option value="8">Boxing Gloves</Option>

                <Option value="9">Triathlon Package</Option>
                <Option value="10">Loot Boxes</Option>
              </Select>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <Select defaultValue="1" size="large"                 style={{width: '100%'}}
>
                <Option value="1">All rarity</Option>
                <Option value="2">Common</Option>
                <Option value="3">Uncommon</Option>
              </Select>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
