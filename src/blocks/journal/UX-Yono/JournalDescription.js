import React from "react";
import userinterview from "../../../assets/journalImages/Yono/analysis.png";
import ab from "../../../assets/journalImages/Yono/a-b testing.png";
import ui from "../../../assets/journalImages/Yono/UI.png";

const JournalDescription = () => {
  return (
    <div className="description">
      <h5 style={{ color: "black" }}>1. Introduction</h5>
      <p>
        <i>Overview : </i>
        <br />
        The purpose of this case study is to showcase the redesign of a mobile
        banking app with a focus on improving the user experience and addressing
        usability challenges. The project aimed to enhance the app’s interface,
        increase user engagement, and provide a seamless banking experience for
        our target audience, primarily millennials and small business owners.
      </p>

      <p>
        <blockquote>
          Goals: <br />
          - Enhance the app’s visual appeal and modernize the interface. <br />-
          Streamline the navigation and simplify complex banking processes.{" "}
          <br />
          - Improve the overall usability and accessibility. <br />- Increase
          user adoption and engagement with the app.
        </blockquote>
      </p>

      <h5 style={{ color: "black" }}>2. Research and Analysis</h5>
      <p>
        <i>Research Methodologies: </i>
      </p>
      <p>
        <p>
          <strong>I. </strong>User interviews: Conducted in-depth interviews
          with a diverse range of users to understand their needs, pain points,
          and expectations from a mobile banking app.
        </p>
        <img src={userinterview} alt="user interview" />
      </p>

      <p>
        <strong>II. </strong>Surveys: Administered online surveys to gather
        quantitative data about user preferences and behaviors.
      </p>

      <p>
        <strong>III. </strong>Competitor analysis: Analyzed the features and
        user experiences of leading mobile banking apps to identify industry
        best practices and areas for improvement.
        <img src={ab} alt="A/B testing" />
      </p>

      <p>
        <p>Key Findings :</p>

        <ul>
          <li>
            Users found the current app interface outdated and difficult to
            navigate.
          </li>
          <li>
            Common pain points included complex transaction processes, confusing
            terminology, and lack of personalized financial insights.
          </li>
          <li>
            Users desired a more intuitive and visually appealing experience
            that aligned with their digital expectations.
          </li>
          <li>
            Competitor analysis revealed several opportunities for improving
            features, such as quick balance overview, transaction
            categorization, and budgeting tools.
          </li>
        </ul>
      </p>

      <h5 style={{ color: "black" }}>3. User Personas</h5>
      <p>
        Based on the research findings, two primary user personas were
        identified:
      </p>

      <p>
        <p>
          <strong>Persona 1: Gouri, the Millennial Entrepreneur </strong>
        </p>

        <ul>
          <li>Demographics: Age 28, small business owner</li>
          <li>
            Goals: Efficiently manage business finances, access financial
            insights, and make informed decisions.
          </li>
          <li>
            Pain Points: Complex transaction processes, difficulty tracking
            expenses, lack of real-time notifications.
          </li>
        </ul>
      </p>

      <p>
        <p>
          <strong>Persona 2: Aman, the Tech-Savvy Professional </strong>
        </p>

        <ul>
          <li>Demographics: Age 32, employed in the IT industry</li>
          <li>
            Goals: Seamlessly manage personal finances, track expenses, and
            monitor investment portfolios.
          </li>
          <li>
            Pain Points: Overwhelming interface, limited budgeting capabilities,
            lack of personalized financial guidance.
          </li>
        </ul>
      </p>

      <h5 style={{ color: "black" }}>4. High fidelity wireframes</h5>
      <p>
        Using the research insights and journey maps as a guide, low-fidelity
        wireframes were created to address the identified pain points and
        enhance the user experience. Examples of key wireframes are shown below:
        <img src={ui} alt="UI" />
      </p>

      <h5 style={{ color: "black" }}>5. Prototyping</h5>
      <p>
        Interactive prototypes were developed to provide a realistic experience
        of the redesigned app. Clickable prototypes were shared with users for
        feedback and further iterations. The link is given below :- <br />
        <a href="https://www.figma.com/proto/yNfRbLCGiSxruX5EnpsAz0/Redesigning-a-Mobile-Banking%C2%A0App?page-id=0%3A1&type=design&node-id=16-203&viewport=-204%2C-27%2C0.46&t=s7CB66sJeNRvsr2y-1&scaling=min-zoom&starting-point-node-id=16%3A198&mode=design">
          Figma Link
        </a>
      </p>

      <h5 style={{ color: "black" }}>6. Usability Testing and Iteration</h5>
      <p>
        <p>Usability Testing:</p>
        <p>
          To validate the design decisions and ensure usability, a series of
          usability tests were conducted with representative users. The tests
          focused on task completion, ease of use, and overall satisfaction.
          User feedback and observations were collected through various methods,
          including screen recordings and surveys.
        </p>

        <p>Key Findings from Usability Testing:</p>
        <ul>
          <li>
            Users appreciated the simplified transaction processes, which
            improved task completion time.
          </li>
          <li>
            Positive feedback was received regarding the visual enhancements and
            intuitive navigation.
          </li>
          <li>
            Some users requested more customization options for personalizing
            their banking experience.
          </li>
        </ul>

        <p>Iteration:</p>
        <p>
          Based on the usability test findings, several design iterations were
          made to address user feedback and improve the overall user experience.
          Notable changes included refining the transaction flow, adding
          customization features, and adjusting the visual hierarchy.
        </p>
      </p>

      <h5 style={{ color: "black" }}>Conclusion</h5>
      <p>
        By showcasing this comprehensive case study, I aim to demonstrate my
        expertise in user-centered design, research methodologies, iterative
        prototyping, and visual design. The redesign of the mobile banking app
        successfully addressed usability challenges and significantly improved
        the user experience, resulting in increased user adoption and
        engagement.
      </p>
      <span>Thank You.</span>
    </div>
  );
};

export default JournalDescription;
