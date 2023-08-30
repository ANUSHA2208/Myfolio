import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../../blocks/loading/Loading";
import Header from "../../blocks/header/Header";
import Footer from "../../blocks/footer/Footer";

// import PageTitleJournalSingle from "../../blocks/page-title/PageTitleJournalSingle";
import JournalDescription from "../../blocks/journal/Tech-Metaverse/JournalDescription";
import JournalMeta from "../../blocks/journal/Tech-Metaverse/JournalMeta";
import JournalDate from "../../blocks/journal/Tech-Metaverse/JournalDate";
// import JournalComments from "../../blocks/journal/Tech-Metaverse/JournalComments";
import JournalTags from "../../blocks/journal/Tech-Metaverse/JournalTags";
import Widget from "../../blocks/widget/Widget";
import img from '../../assets/journalImages/Metaverse/mockup.jpg'


const Metaverse = () => {
  document.body.classList.add("single-post");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Metaverse</title>

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

      <main id="main" className="site-main">
        {/* <PageTitleJournalSingle/> */}

        <section id="page-title">
          <div className="wrapper">
            <div className="title position-relative">
              <h1 className="small">
                Metaverse :<br />
                The Future of <span className="line">Internet</span>
              </h1>

              <div className="title-clone">Journal.</div>
            </div>
          </div>
        </section>

        <section id="page-content" className="spacer m-top-xl">
          <div className="wrapper">
            <div id="single">
              <div className="row gutter-width-lg">
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 position-static single-content">
                  <div className="img object-fit">
                    <div className="object-fit-cover">
                      <img
                        src={img}
                        alt="What to do when holidays go wrong"
                      />
                    </div>
                  </div>

                  <div className="bg-half-ring-left"></div>

                  <JournalDate />

                  <JournalMeta />

                  <JournalDescription />

                  <JournalTags />

                  {/* <JournalComments /> */}
                </div>

                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                  <Widget />
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

export default Metaverse;
