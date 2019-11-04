import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchGoodsRequest from "@/store/actions/products";
import {
  selectProductsList,
  selectProductsLoaded,
  selectProductsLoading
} from "@/store/selectors";
import Card from "@/components/Card/Card";
import Filter from "@/components/Filter/Filter";
import { Preloader } from "@/components/UI";
import { Row, Col } from "react-bootstrap";
import styles from "./Goods.module.scss";

const Goods = () => {
  const dispatch = useDispatch();

  const productsList = useSelector(selectProductsList);
  const isLoaded = useSelector(selectProductsLoaded);
  const isLoading = useSelector(selectProductsLoading);

  useEffect(() => {
    if (!isLoaded && !isLoading) dispatch(fetchGoodsRequest());
  }, []);

  return (
    <div className={styles.goods}>
      <Row className={styles.goodsRow}>
        <Col md={9}>
          <Row style={{ height: "100%" }}>
            {isLoading && (
              <Col className={styles.preloaderCol}>
                <Preloader />
              </Col>
            )}
            {isLoaded &&
              productsList.map(product => (
                <Col md={4} key={product.id} className={styles.goodsCol}>
                  <Card {...product} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={3} className={styles.goodsCol}>
          <Filter />
        </Col>
      </Row>
    </div>
  );
};

export default Goods;
