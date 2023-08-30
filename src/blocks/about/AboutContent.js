import React from "react";
import avatarReverse from "../../assets/img/placeholder/avatarRev.jpg";

const AboutContent = () => {
  return (
    <div id="about" className="block">
      <h2>
        <span className="line">A passionate</span>
        <br /> ui/ux designer.
      </h2>

      <div className="row bg-half-ring-left gutter-width-lg">
        <div className="col align-self-top pl-0">
          <div className="img object-fit">
            <div className="object-fit-cover">
              <img
                src={avatarReverse}
                alt="Anusha Patil"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="col align-self-center description">
          <h4>I’m Anusha Patil</h4>

          <p>
            Passionate UI/UX designer with over 1 year of hands-on experience
            shaping digital experiences. My journey has been a blend of
            creativity and strategy, expertly uniting user insights with
            innovative designs. Proficient in every phase of the design process,
            from immersive UX research and sleek UI design to wireframing,
            dynamic prototyping, and turning visions into reality with HTML,
            CSS, and ReactJS.
          </p>

          <p>
            My goal is to craft intuitive, pixel-perfect solutions that
            captivate users and drive meaningful connections. Let's collaborate
            to bring your digital aspirations to life!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
