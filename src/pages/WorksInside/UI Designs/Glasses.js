import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../../../blocks/loading/Loading";
import Header from "../../../blocks/header/Header";
import Footer from "../../../blocks/footer/Footer";
import img from "../../../assets/Work (UI)/mockup.png";

const Glasses = () => {
  document.body.classList.add("single");
  document.body.classList.add("single-portfolio");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");
  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Works Inside | Anusha Patil - UX & UI Designer Portfolio</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <Loading />

      <Header />

      <main id="main" className="site-main bg-half-ring-right bg-half-ring-top">
        <section id="page-content">
          <div className="wrapper">
            <div id="single">
              <div className="row gutter-width-lg single-content">
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                  <div className="img object-fit">
                    <div className="object-fit-cover">
                      <img src={img} alt="Product photography" />
                    </div>
                  </div>
                </div>

                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                  <p className="date">
                    <span className="large">22</span> Dec, 2022
                  </p>

                  <h1 className="small">Sunglasses Landing page Design</h1>

                  <div className="description">
                    <p>
                      Checkout my latest Sunglasses Landing Page Design!
                      <br />
                      <span>
                        Dive into the world of style and sophistication with my
                        Figma-crafted Sunglasses Landing Page. This project was
                        my playground for mastering UI/UX skills.Give your
                        feedback {" "}
                        <a href="https://www.linkedin.com/posts/anusha-patil-167b79162_uxdesign-uidesign-webdesign-activity-7025358256298483712-SJR5?utm_source=share&utm_medium=member_desktop">
                          here
                        </a>
                      </span>
                    </p>

                    <h5>Idea</h5>

                    <p>
                      Imagine a virtual haven where sun-seekers can explore an
                      array of trendy sunglasses. This sleek and immersive
                      landing page aims to create an enticing gateway to a
                      collection that's as diverse as it is chic.
                    </p>

                    <h5>Product features</h5>

                    <ul>
                      <li>Color : Used black and #F7950F color</li>
                      <li>Typography : Poppins</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Glasses;
