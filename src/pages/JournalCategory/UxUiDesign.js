import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Loading from "../../blocks/loading/Loading";
import Header from "../../blocks/header/Header";
import Footer from "../../blocks/footer/Footer";
import PageTitleJournal from "../../blocks/page-title/PageTitleJournal";
import Widget from "../../blocks/widget/Widget";
import LoadMoreButton from "../../components/loadmore/LoadMore";

// Import your journal items and images
import {
  JournalItems,
} from "../../data/journal/journalItems.js";

const UxUiDesign = () => {
  document.body.classList.add("blog");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <MetaTags>
        {/* Your meta tags */}
      </MetaTags>

      <Loading />

      <Header />

      <main id="main" className="site-main">
        <PageTitleJournal />

        <section id="page-content" className="spacer p-top-xl">
          <div id="blog">
            <div className="wrapper">
              <div className="row gutter-width-lg">
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                  <div className="row gutter-width-lg with-pb-lg">
                    {JournalItems &&
                      JournalItems.filter((item) => item.categoryTitle === "UI/UX Design").map((item, key) => {
                        return (
                          <div key={key} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="card card-post">
                              <div className="card-top position-relative">
                                <a title={item.title} href={process.env.PUBLIC_URL + item.link}>
                                  <div className="img object-fit overflow-hidden">
                                    <div className="object-fit-cover transform-scale-h">
                                      <img className="card-top-img" src={item.imgLink} alt={item.imgAlt} />
                                    </div>
                                  </div>
                                </a>

                                <div className="card-category">
                                  <a title={item.categoryTitle} className="btn btn-sm btn-light transform-scale-h border-0" href={process.env.PUBLIC_URL + item.categoryLink}>
                                    {item.categoryTitle}
                                  </a>
                                </div>
                              </div>

                              <div className="card-body border">
                                <h5 className="card-title">
                                  <a title={item.title} href={process.env.PUBLIC_URL + item.link}>
                                    {item.title}
                                  </a>
                                </h5>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  <LoadMoreButton />
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

export default UxUiDesign;
