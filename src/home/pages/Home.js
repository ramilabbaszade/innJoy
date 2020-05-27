import React from "react";
import { Link } from "react-router-dom";

import Slider from "../components/Slider";
import Quotes from "../components/Quotes";
import MainNavigation from "../../shared/components/Navigation/MainNavigation";

import icon1 from "../../img/icons/group.svg";
import icon2 from "../../img/icons/handshake.svg";
import icon3 from "../../img/icons/books.svg";

import photo1 from "../../img/photos/entertain.jpg";
import ielts from "../../img/logos/ielts.png";
import sat from "../../img/logos/sat.png";
import toefl from "../../img/logos/toefl.png";
// import english from "../../img/logos/english.png";
// import russian from "../../img/logos/russian.jpg";

import "./Home.scss";

const Home = () => {
  const DUMMY_SLIDES = [
    { id: 1, image: "../../assets/img/fullscreen1.jpg" },
    { id: 2, image: "../../assets/img/edu.jpg" },
    { id: 3, image: "../../assets/img/fullscreen2.jpg" },
    { id: 4, image: "../../assets/img/fullscreen1.jpg" },
    { id: 5, image: "../../assets/img/fullscreen2.jpg" },
  ];

  const DUMMY_POSTS = [
    {
      id: 1,
      title:
        "Welcome to our blog post. Welcome to our blog post.Welcome to our blog post",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
      image: "",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
      time: "27 MAY 2020",
      postId: "p1",
      category: "english",
    },
    {
      id: 2,
      title: "Welcome to our blog post,",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
      image: "",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
      time: "27 MAY 2020",
      postId: "p2",
      category: "english",
    },
    {
      id: 3,
      title: "Welcome to 3 post",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
      image: "",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
      time: "27 MAY 2020",
      postId: "p3",
      category: "english",
    },
    {
      id: 4,
      title: "Welcome to our 4. blog post,",
      description:
        "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
      image: "",
      content:
        "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.4",
      time: "27 MAY 2020",
      postId: "p4",
      category: [
        { id: "1", name: "russian" },
        { id: "2", name: "english" },
        { id: "3", name: "ielts" },
        { id: "4", name: "sat" },
      ],
    },
  ];

  return (
    <div className='home'>
      <MainNavigation transparent='transparent' />
      <Slider key={DUMMY_SLIDES.id} slides={DUMMY_SLIDES} />

      <section className='section1'>
        <div className='section1_container'>
          <div className='tab'>
            <img src={ielts} alt='' />
          </div>
          <div className='tab'>
            <img src={toefl} alt='' />
          </div>
          <div className='tab'>
            <img src={sat} alt='' />
          </div>
        </div>
      </section>

      <section className='section2'>
        <div className="section2-lang">
          <div className="lang-card"></div>
        </div>
        <div className='section2_container'>
          <div className='card'>
            <img src={icon3} alt='' />
            <h4>Kommunikativ üsullarla təlim</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus odio culpa suscipit
            </p>
          </div>
          <div className='card'>
            <img src={icon2} alt='' />
            <h4>Zəmanət və münasib şərtlər</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus odio culpa suscipit minima dolore porro!
            </p>
          </div>
          <div className='card'>
            <img src={icon1} alt='' />
            <h4>Conversation club, Movie Night</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus odio culpa suscipit minima dolore porro!
            </p>
          </div>
        </div>
      </section>

      <section className='section3'>
        <div className='section3_container'>
          <Link to="/blog" className='section3_header'>
            <h4>BLOG</h4>
            <i className='fa fa-chevron-right'></i>
          </Link>
          <div className='section3-blog'>
            {DUMMY_POSTS.slice(0, 6).map((post) => {
              return (
                <Link key={post.id} to={`/blog/${post.postId}`}>
                  <div className='post'>
                    <div className='post-hover'>{post.title}</div>
                    <img src={photo1} alt='' />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Quotes />
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12154.338424975667!2d49.860607!3d40.3958982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10cb3a7f1cc2f34d!2sInn%20joy!5e0!3m2!1sen!2s!4v1590594519577!5m2!1sen!2s" width="100%" height="450" title='map' aria-hidden="true" tabIndex="0"></iframe>
    </div>
  );
};

export default Home;
