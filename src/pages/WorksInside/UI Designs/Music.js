import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../../../blocks/loading/Loading";
import Header from "../../../blocks/header/Header";
import Footer from "../../../blocks/footer/Footer";
import img from "../../../assets/Work (UI)/mockup-spotify.png";

const Music = () => {
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
                    Harmonious Tunes Music Player: Duel of Designs
                  </h1>

                  <div className="description">
                    <p>
                      Check out my Dueling Music Player UI Designs!
                      <br />
                      <span>
                        Dive into my practice project where I explored two
                        distinct yet captivating music player interfaces using
                        Figma. I'd love your feedback on which design hits all
                        the right notes for an immersive listening experience.
                        Give your feedback{" "}
                        <a href="https://www.linkedin.com/posts/anusha-patil-167b79162_uidesign-webdesign-webdevelopment-activity-7027372034921811968-t13i?utm_source=share&utm_medium=member_desktop">
                          here
                        </a>
                      </span>
                    </p>

                    <h5>Idea</h5>

                    <p>
                      Ever wondered how a single concept can take on different
                      vibes? I tackled that challenge by crafting two
                      contrasting music player screens. From color palettes to
                      layout, see how creative choices influence user perception
                      and interaction.
                    </p>

                    <h5>Product features</h5>

                    <ul>
                      <li>
                        Modern vs. Classic: Experience the dynamic contrast
                        between a sleek, modern UI and a nostalgic, classic
                        design. These screens embody two different moods to suit
                        varying user preferences.
                      </li>
                      <li>
                        Visual Harmony: Compare the use of typography, color
                        schemes, and visual hierarchy to understand how they
                        contribute to an engaging and harmonious user
                        experience.
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

export default Music;
