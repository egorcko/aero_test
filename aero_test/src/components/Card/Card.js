import React from "react";
import { useDispatch } from "react-redux";
import toggleFavoriteRequest from "@/store/actions/favorite";
import { Row, Col } from "react-bootstrap";
import { Rating, Availability, Parameters, Price } from "./components";
import Icon from "@/components/Icon/Icon";
import { Button } from "@/components/UI";
import camera from "@/assets/images/camera.jpg";
import "./Card.scss";

const Card = ({ id, code, availability, title, params, inFav }) => {
  const dispatch = useDispatch();
  const toggleFavorite = () => {
    dispatch(toggleFavoriteRequest(id));
  };
  return (
    <div className="Card">
      <Row>
        <Col>
          <Rating />
        </Col>
        <Col>
          <span className="Card__article">{`Арт. ${code}`}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="Card__image" src={camera} alt="" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Availability status={availability} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="Card__title">{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Parameters params={params} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Price />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            icon={<Icon width={18} height={18} src="./icons/cart.svg" />}
            value="Купить"
          />
        </Col>
        <Col>
          <div className="Card__right-icons">
            <button
              type="button"
              onClick={toggleFavorite}
              className="Card__right-icons__icon"
            >
              <Icon
                width={20}
                height={20}
                src={`./icons/heart${inFav ? "" : "-o"}.svg`}
              />
            </button>
            <button type="button" className="Card__right-icons__icon">
              <Icon width={20} height={20} src="./icons/comparsion.svg" />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Card;
