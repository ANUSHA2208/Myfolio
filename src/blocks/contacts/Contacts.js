import React from "react";

const Contacts = () => {
  return (
    <section id="contact" className="block spacer p-top-xl">
      <div className="wrapper">
        <div className="text-center">
          <h3 className="mb-0 after">
            Impressed by my work? Eager for top-tier web and mobile app designs?
            <br /> Let's make your vision a reality – reach out today!
          </h3>

          <div className="block spacer p-top-lg">
            <a
              title="Contact"
              href={process.env.PUBLIC_URL + "/contacts"}
              className="btn btn-dark btn-bold transform-scale-h border-0"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
