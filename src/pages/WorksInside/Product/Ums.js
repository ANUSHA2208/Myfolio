import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../../../blocks/loading/Loading";
import Header from "../../../blocks/header/Header";
import Footer from "../../../blocks/footer/Footer";
import img from "../../../assets/Work (UI)/mockup-ums.png";
import img1 from '../../../assets/Work (UI)/mockup-ums-1.png'
import img2 from '../../../assets/Work (UI)/mockup-ums-2.png'

const Ums = () => {
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
                      <img src={img} alt="UMS" />
                    </div>
                  </div>

                  <div className="img object-fit">
                    <div className="object-fit-cover">
                      <img src={img1} alt="Student Portal" />
                    </div>
                  </div>

                  <div className="img object-fit">
                    <div className="object-fit-cover">
                      <img src={img2} alt="Faulty Portal" />
                    </div>
                  </div>
                </div>

                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                  <p className="date">
                    <span className="large">25</span> May, 2020
                  </p>

                  <h1 className="small">University Management System</h1>

                  <div className="description">
                    <p>
                      Streamline university operations with an all-in-one
                      management solution designed to empower students and
                      faculty. Seamlessly manage student records, academic
                      progress, and administrative tasks within an intuitive
                      platform, enhancing communication and efficiency across
                      the campus community.
                    </p>

                    <h5>Idea</h5>

                    <p>
                      Imagine a digital hub that simplifies university life for
                      both students and faculty. This University Management
                      System, meticulously crafted using Figma, offers a
                      user-centric experience that transforms administrative
                      processes into a seamless, connected journey. From
                      academic data and attendance tracking to resource-sharing
                      and lesson planning, this system optimizes education
                      management for modern campuses.
                    </p>

                    <h5>Product features</h5>

                    <ul>
                      <li>
                        Comprehensive Student Profiles: Store and access
                        essential student details, academic history, and
                        personal information in one organized platform.
                      </li>
                      <li>
                        Faculty Dashboard: Manage student records, upload notes,
                        and create comprehensive timetables for a streamlined
                        teaching experience.
                      </li>
                      <li>
                        Administration Tools: Seamlessly promote students to the
                        next semester, access lesson plans, and oversee the
                        academic ecosystem.
                      </li>
                      <li>
                        Document Repository: Students access subject notes,
                        documents, and learning resources uploaded by faculty.
                      </li>
                      <li>
                        Customizable Timetables: Faculty design and manage
                        course schedules, ensuring efficient class allocation
                        and student engagement.
                      </li>
                      <li>
                        User-Focused Design: Figma's innovative design ensures a
                        user-centric experience, enhancing accessibility and
                        ease of use.
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

export default Ums;
