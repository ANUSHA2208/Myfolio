import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../../../blocks/loading/Loading";
import Header from "../../../blocks/header/Header";
import Footer from "../../../blocks/footer/Footer";
import img from "../../../assets/Work (UI)/ecom.png";

const Ecom = () => {
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
                    <span className="large">01</span> Nov, 2022
                  </p>

                  <h1 className="small">
                  Unveiling Elegance: Dynamic E-commerce Landing Page Design
                  </h1>

                  <div className="description">
                    <p>
                      Checkout My design on E-com Landing Page!
                      <br />
                      <span>
                        Dive into the world of fashion with my latest
                        creation—an enchanting e-commerce landing page that
                        invites you to embrace the latest trends. Designed to
                        radiate confidence and beauty, this practice screen
                        showcases my skills in UI/UX design using Figma. From
                        the layout that guides your journey to the colors that
                        evoke emotions, every element has been meticulously
                        crafted to provide a captivating experience. Give your
                        feedback{" "}
                        <a href="https://www.linkedin.com/posts/anusha-patil-167b79162_uxdesign-uxui-uxdesigner-activity-7043099397915607040-Pxx5?utm_source=share&utm_medium=member_desktop">
                          here
                        </a>
                      </span>
                    </p>

                    <h5>Idea</h5>

                    <p>
                      The landing page invites fashion enthusiasts to discover
                      the power of style and self-expression. Through an
                      enticing blend of visuals and text, users are welcomed to
                      explore a curated collection that empowers their wardrobe
                      choices. It's a celebration of individuality and the joy
                      that comes from feeling your best.
                    </p>

                    <h5>Product features</h5>

                    <ul>
                      <li>
                        Captivating Visuals: Immerse yourself in a visually
                        stunning world where fashion comes alive through
                        high-quality images and thoughtful placements.
                      </li>
                      <li>
                        Trend Showcase: Experience a seamless flow of fashion
                        trends, each presented in a way that sparks curiosity
                        and engagement.
                      </li>
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

export default Ecom;
