import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../../../blocks/loading/Loading";
import Header from "../../../blocks/header/Header";
import Footer from "../../../blocks/footer/Footer";
import img from "../../../assets/Work (UI)/mockup-chatgpt.png";

const Chatgpt = () => {
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
                    Explore My Figma Creation: Unveiling the ChatGPT Landing
                    Page
                  </h1>

                  <div className="description">
                    <p>
                      <span>
                        Dive into my latest UI practice masterpiece—an
                        imaginative ChatGPT landing page concept that merges
                        design finesse with user-centric elements. Experience
                        the magic of design thinking as ChatGPT comes to life in
                        a captivating digital space. Give your feedback{" "}
                        <a href="https://www.linkedin.com/posts/anusha-patil-167b79162_chatgpt-ai-aitool-activity-7049410778851921920-kW4e?utm_source=share&utm_medium=member_desktop">
                          here
                        </a>
                      </span>
                    </p>

                    <h5>Idea</h5>

                    <p>
                      Step into a realm of innovation where ChatGPT meets
                      intuitive design. This Figma creation showcases my prowess
                      in crafting user-centered interfaces. Seamlessly blending
                      aesthetics and functionality, it envisions how ChatGPT
                      could be presented to users in an engaging, interactive
                      way.
                    </p>

                    <h5>Product features</h5>

                    <ul>
                      <li>
                        Visually Stunning Interface: Immerse yourself in a
                        visually striking design that resonates with ChatGPT's
                        futuristic essence.
                      </li>
                      <li>
                        Interactive Elements: Engage with dynamic elements that
                        enhance the user experience, such as animated
                        transitions and engaging hover effects.
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

export default Chatgpt;
