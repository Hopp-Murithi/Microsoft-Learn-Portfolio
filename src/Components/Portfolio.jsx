/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/background-mlsa.jpg";

const imageAltText = "Blak gamers background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "WaveAtMe🎉",
    description:
      "A web3 app that lets you share your favourite track of the day anonymously and who knows?;Someone might send yu some ETH",
    url: "https://github.com/Hopp-Murithi/my-wave-portal",
  },
  {
    title: "JilitodoV1 API",
    description:
      "This is a feature-rich, secure, and scalable Node.js todo application built with Express and Knex, complete with user authentication using cookies and role-based access control",
    url: "https://github.com/Hopp-Murithi/jilitodov1",
  },
  {
    title: "EasyManage",
    description:
      "A training management system built with custom wordpress(PHP)",
    url: "https://github.com/Hopp-Murithi/easymanage",
  },
  {
    title: "Snappy",
    description:
      "A picture-collection social media web application built with reactjs and sanity client",
    url: "https://github.com/Hopp-Murithi/snappy",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
