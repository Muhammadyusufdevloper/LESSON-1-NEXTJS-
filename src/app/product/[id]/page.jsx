"use client";
import { useParams } from "next/navigation";
import { PRODUCT } from "@/static";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import "./single.scss";
import Products from "@/components/products/Products";

const Detail = () => {
  let { id } = useParams();
  let product = PRODUCT.find((el) => el.id === +id);
  const [count, setCount] = useState(1);

  console.log(product);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="single">
        <div className="single__card container">
          <div className="single__left">
            <div className="single__left__img">
              <Image alt="rasm" src={product?.img} />
            </div>
            <p>
              All hand-made with natural soy wax, Candleaf is made for your
              pleasure moments.
            </p>
            <button>🚚 FREE SHIPPING</button>
          </div>
          <div className="single__right">
            <h3>{product?.title}</h3>
            <div className="single__right__top">
              <p className="single__right__top-price">{Number(product?.price) * count}</p>
              <div className="single__right__top__radio">
                <input type="radio" />
                <p>One time purchase</p>
              </div>
            </div>
            <div className="single__right__middle">
              <div>
                <p>Quantity</p>
                <div className="single__right__middle-counter">
                  <button onClick={() => setCount((p) => p + 1)}>+</button>
                  <p>{count}</p>
                  <button
                    disabled={count === 0}
                    onClick={() => setCount((p) => p - 1)}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="single__right__middle-item">
                <div className="single__right__middle-card">
                  <h3>
                    <input type="radio" /> Subscribe and delivery every{" "}
                  </h3>
                  <p>
                    Subscribe now and get the 10% of discount on every recurring
                    order. The discount will be applied at checkout. See details
                  </p>
                </div>
                <button className="single__right__middle-btn">
                  + Add to cart
                </button>
              </div>
            </div>
            <div className="single__bottom">
              <p>
                <span>Wax:</span> Top grade Soy wax that delivers a smoke less,
                consistent burn
              </p>
              <p>
                <span>Fragrance:</span> Premium quality ingredients with natural
                essential oils{" "}
              </p>
              <p>
                <span>Burning Time:</span> 70-75 hours <span>Dimension:</span>{" "}
                10cm x 5cm <span>Weight:</span> 400g
              </p>
            </div>
          </div>
        </div>
        <Products limit={4} />
      </div>
    </>
  );
};

export default Detail;
