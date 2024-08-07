import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-end Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating visually appealing and user-friendly websites that adapt seamlessly across different devices and screen sizes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficiency in writing clean and semantic HTML code and utilizing CSS to style and enhance the presentation and reactivity of web pages.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Building interactive and dynamic web experiences using JavaScript frameworks such as React.js or Vue.js.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in using version control systems like Git to manage and track changes to the codebase, enabling seamless collaboration and code management.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Expertise in utilizing frontend frameworks and libraries to accelerate development and enhance productivity.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Frontend Frameworks/Libraries: Expertise in utilizing frontend frameworks and libraries to accelerate development and enhance productivity.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Database Management</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing project plans, defining timelines, and allocating resources to ensure successful project delivery within budget and schedule constraints.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Mentoring and coaching team members, providing guidance on technical challenges, best practices, and professional development to enhance their skills and performance.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Fostering a collaborative team environment, promoting effective communication channels, and facilitating cross-functional collaboration to drive innovation and problem-solving.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Defining technical strategies, evaluating technology options, and guiding architectural decisions to ensure scalable, maintainable, and high-quality software solutions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Identifying and mitigating project risks, proactively addressing challenges, and making informed decisions to minimize potential disruptions to project timelines and deliverables.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Back-end Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficiency  in server-side programming languages such as Java, PHP to develop robust and scalable backend solutions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Expertise  in designing and implementing efficient database structures, utilizing technologies like SQL or NoSQL databases (e.g., MySQL, MongoDB) to store and manage data.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Building secure and efficient RESTful APIs to facilitate communication between the frontend and backend systems, allowing data retrieval and manipulation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficiency in utilizing popular backend frameworks such as Laravel (PHP), Spring Boot (Java), or Node.js (JavaScript) to accelerate development and streamline backend processes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implementing measures to safeguard user data and protect against security threats, including encryption, secure data storage, and adherence to industry-standard security protocols.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Services;
