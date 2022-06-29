import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Modal,
  notification,
  Row,
  Space,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../asset/img/logo.png";
import { linkAccountAction } from "../redux/action/linkAccount-action";
import { connectMetamaskAction } from "../redux/action/metamask-action";
import { metamaskUtil } from "../util/metamask-util";
import menuImg from "../asset/img/menu.png";

export default function BaseHeader() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { pathname } = location;

  const accountMetamask = useSelector((state) => state.metamask.address);
  const username = useSelector((state) => state.linkAccount.username);
  const size = useSelector((state) => state.size.size);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  console.log({ size });
  const connectMetaMask = async () => {
    if (accountMetamask) return;

    const account = await metamaskUtil.connectMetamask();
    dispatch(connectMetamaskAction(account));
  };

  useEffect(() => {
    connectMetaMask();
  }, []);

  console.log({ accountMetamask });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    const { username, password } = values;
    if (username !== "walkman@gmail.com" || password !== "123456") {
      notification.error({
        message: "Login failure",
        description: "Username or password is incorrect",
      });
      return;
    }
    localStorage.setItem("linkAccount", JSON.stringify(values));
    notification.success({
      message: "Login success",
      placement: "topLeft",
    });
    dispatch(linkAccountAction(username));
    setIsModalVisible(false);
  };

  useEffect(() => {
    const linkAccount = JSON.parse(localStorage.getItem("linkAccount"));
    if (linkAccount) {
      dispatch(linkAccountAction(linkAccount.username));
    }
  }, []);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <header className="txt-color-common fs-1dot5rem">
      <Row align="middle">
        <Col span={4}>
          <img src={logo} alt="" height={70} />
        </Col>
        {size == "xl" && (
          <Col flex={1} className="fw-bold line-h-0">
            <Row align="middle" gutter={100}>
              <Col
                className={`cu-po ${
                  pathname.includes("market") ? "active-header" : ""
                }`}
              >
                <Link className=" txt-color-common" to="/market">
                  MARKET
                </Link>
              </Col>
              <Col
                className={`cu-po ${
                  pathname.includes("inventory") ? "active-header" : ""
                }`}
              >
                <Link className=" txt-color-common" to="/inventory">
                  INVENTORY
                </Link>
              </Col>
              <Col
                className={`cu-po ${
                  pathname.includes("my-game-wallet") ? "active-header" : ""
                }`}
              >
                <Link className=" txt-color-common" to="/my-game-wallet">
                  MY GAME WALLET
                </Link>
              </Col>
            </Row>
          </Col>
        )}
        {size != "xl" && (
          <Col flex={1} className="fw-bold line-h-0">
            <div className="txt-right pd-hor-1rem">
              <img
                src={menuImg}
                alt=""
                height={60}
                className="cu-po"
                onClick={showDrawer}
              />
            </div>
          </Col>
        )}
        <Col>
          {pathname.includes("inventory") && (
            <Button
              className="bd-rad-20 hv-1 fw-bold bd-1-sl-cl-common txt-color-common mg-right-10"
              style={{ height: 50 }}
              onClick={showModal}
            >
              {(username || "@").split("@")[0] || "Link account"}
            </Button>
          )}
          <Button
            className="bd-rad-20 hv-1 fw-bold bd-1-sl-cl-common txt-color-common"
            style={{ height: 50 }}
            onClick={connectMetaMask}
          >
            {metamaskUtil.splitAddress(accountMetamask) || "Connect Wallet"}
          </Button>
        </Col>
      </Row>

      {isModalVisible && (
        <Modal
          title="Link Account"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className="txt-center">
            <img src={logo} alt="" width={120} />
          </div>
          <Form
            name="basic"
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item className="txt-center">
              <Button
                htmlType="submit"
                className="bd-rad-20 hv-1 fw-bold bd-1-sl-cl-common txt-color-common"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
      <Drawer
        title={
          <div>
            
            <img src={logo} alt="" height={50} />
            <span>Menu</span>
          </div>
        }
        closeIcon={false}
        placement="left"
        onClose={onClose}
        visible={visible}
        width={300}
        className='txt-color-common fs-1dot5rem fw-bold'
      >
        <div
          className={`cu-po ${
            pathname.includes("market") ? "active-header" : ""
          } mg-top-10`}
        >
          <Link className=" txt-color-common" to="/market">
            MARKET
          </Link>
        </div>
        <div
          className={`cu-po ${
            pathname.includes("inventory") ? "active-header" : ""
          } mg-top-10`}
        >
          <Link className=" txt-color-common" to="/inventory">
            INVENTORY
          </Link>
        </div>
        <div
          className={`cu-po ${
           pathname.includes("my-game-wallet") ? "active-header" : ""
          } mg-top-10`}
        >
          <Link className=" txt-color-common" to="/my-game-wallet">
            MY GAME WALLET
          </Link>
        </div>
      </Drawer>
    </header>
  );
}
