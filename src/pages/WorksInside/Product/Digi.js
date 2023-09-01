import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../../../blocks/loading/Loading";
import Header from "../../../blocks/header/Header";
import Footer from "../../../blocks/footer/Footer";
import img from "../../../assets/Works/product/digi/mockup-digi.jpg";
import img1 from "../../../assets/Works/product/digi/mockup-digi-1.jpg";

const Digi = () => {
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
                  <div className="img object-fit">
                    <div className="object-fit-cover">
                      <img src={img1} alt="Product photography" />
                    </div>
                  </div>
                </div>

                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                  <p className="date">
                    <span className="large">01</span> Nov, 2022
                  </p>

                  <h1 className="small">
                    Introducing DigiAyu - Your Gateway to Holistic Wellbeing!
                  </h1>

                  <div className="description">
                    <p>
                      <span>
                        DigiAyu is your passport to a new era of holistic
                        health. Seamlessly connecting you with seasoned Ayurveda
                        practitioners, we bring you bespoke, genuine, and
                        impactful solutions for your overall wellbeing.
                        Experience the future of healthcare through our
                        all-in-one platform, offering Video Consultations, Chat
                        Consultations, rejuvenating Yoga Therapy, and expert
                        Medicine Consultations. Your journey to a healthier you
                        starts here with DigiAyu. Website{" "}
                        <a href="https://dev.digiayu.com/">link</a>
                      </span>
                    </p>

                    <h5>Idea</h5>

                    <p>
                      DigiAyu is redefining health solutions, making Ayurveda
                      expertise accessible and convenient. We believe in
                      personalized care that combines traditional wisdom with
                      modern technology.
                    </p>

                    <h5>Product features</h5>

                    <ul>
                      <li>
                        Video Consultation: Connect face-to-face with certified
                        Ayurveda experts from the comfort of your home. Receive
                        personalized guidance and treatment plans.
                      </li>
                      <li>
                        Chat Consultations: Get quick answers to your health
                        queries and expert advice through our secure chat
                        feature. Ayurveda wisdom at your fingertips.
                      </li>
                      <li>
                        Seamless Experience: User-friendly interface, secure
                        data handling, and hassle-free scheduling. We prioritize
                        your comfort and safety.
                      </li>
                      <li>
                        24/7 Access: Consult with experts anytime, anywhere.
                        Your health journey doesn't wait for office hours.
                      </li>
                      <li>
                        Quality Assurance: Our practitioners are rigorously
                        vetted, ensuring the highest standards of Ayurvedic
                        care.
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

export default Digi;
