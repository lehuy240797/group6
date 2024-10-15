import React, { useState } from "react";
import "../css/LD.css";

const Developments = () => {
  const articles = [
    {
      img: "./assets/images/LD/image01.webp",
      title: "Webb Telescope Finds Massive Early Galaxies",
      date: "Date: September 06, 2024",
      link: "https://skyandtelescope.org/astronomy-news/webb-telescope-images-massive-early-galaxies-still-finding-more-than-expected/",
      description:
        "Webb Telescope data are still turning up more massive galaxies in the early universe than astronomers expect.",
    },
    {
      img: "./assets/images/LD/image02.webp",
      title: "Solved: The Case of the Universe’s 'Extra' Light",
      date: "Date: September 05, 2024",
      link: "https://skyandtelescope.org/astronomy-news/solved-the-case-of-the-universes-extra-light/",
      description:
        "Astronomers may have finally solved the mystery of how dark space really is.",
    },
    {
      img: "./assets/images/LD/image03.webp",
      title: "Neutron Stars Might Be Squishy Inside",
      date: "Date: August 6, 2024",
      link: "https://skyandtelescope.org/astronomy-news/neutron-stars-might-be-squishy-inside/",
      description:
        "New data on the brightest pulsar observed with a telescope on the International Space Station suggests neutron star interiors are 'squishy.'",
    },
    {
      img: "./assets/images/LD/image04.webp",
      title: "Astronomers Find 21 “Dark” Neutron Stars Orbiting Sun-like Stars",
      date: "July 25, 2024",
      link: "https://skyandtelescope.org/astronomy-news/astronomers-find-21-dark-neutron-stars-orbiting-sun-like-stars/",
      description:
        "New analysis has revealed 21 Sun-like stars in mutual orbit around dark objects of neutron star–like masses — rare systems that have escaped destruction by supernova.",
    },
    {
      img: "./assets/images/LD/image05.webp",
      title: "A Closer Look at a Potential 'Eyeball Planet'",
      date: "Date: July 24, 2024",
      link: "https://skyandtelescope.org/astronomy-news/a-closer-look-at-a-potential-eyeball-planet/",
      description:
        "New James Webb Space Telescope observations of LHS 1140b hint at a temperate water world with a nitrogen-rich atmosphere.",
    },
    {
      img: "./assets/images/LD/image06.webp",
      title: "Explore Norma: The right (angle) constellation for July",
      date: "Date: July 16, 2024",
      link: "https://skyandtelescope.org/astronomy-news/explore-norma-right-angle-constellation-july/",
      description:
        "Little-known Norma, a small constellation in the southern sky, contains several stellar and deep-sky delights.",
    },
    {
      img: "./assets/images/LD/image07.webp",
      title: "New Simulation Sheds Light on Black Hole Growth",
      date: "Date: July 11, 2024",
      link: "https://skyandtelescope.org/astronomy-news/new-simulation-sheds-light-on-black-hole-growth/",
      description:
        "New supercomputer simulations reveal the journey gas takes to enter a galaxy and surround and enter its black hole. That journey holds a few surprises for astronomers.",
    },
    {
      img: "./assets/images/LD/image08.webp",
      title: "Webb Telescope Reveals Parallel Jets from Baby Stars",
      date: "Date: July 02, 2024",
      link: "https://skyandtelescope.org/astronomy-news/webb-telescope-reveals-parallel-jets-from-baby-stars/",
      description:
        "A new image taken by the James Webb Space Telescope reveals a stunning alignment among the infant stars in the Serpens Nebula.",
    },
    {
      img: "./assets/images/LD/image09.webp",
      title: "Astronomers Trace the Family Tree of Stars Clustered in the Solar Neighborhood",
      date: "Date: June 21, 2024",
      link: "https://skyandtelescope.org/astronomy-news/astronomers-trace-the-family-tree-of-star-clusters-in-the-solar-neighborhood/",
      description:
        "Astronomers have pressed rewind on a cosmic video of the solar neighborhood, tracing the origins of young star clusters within 3,000 light-years of the Sun.",
    },
    {
      img: "./assets/images/LD/image10.webp",
      title: "Dwarf Star Caught Speeding; Could Escape the Galaxy",
      date: "Date: June 18, 2024",
      link: "https://skyandtelescope.org/astronomy-news/dwarf-star-caught-speeding-could-escape-the-galaxy/",
      description:
        "Citizen scientists discovered a star speeding through the Milky Way. Now, astronomers are trying to track down its origins.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <h1 className="h1-content">LATEST DEVELOPMENT</h1>
      {currentArticles.map((article, index) => (
        <div key={index} className="news-container">
          <img src={article.img} alt={`news${index + 1}`} className="news-image" />
          <div className="news-content">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="news-title"
            >
              <h3>{article.title}</h3>
            </a>
            <div className="news-date">{article.date}</div>
            <p>{article.description}</p>
          </div>
        </div>
      ))}

      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
};

export default Developments;
