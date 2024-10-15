
import React from 'react';
import { useEffect, useState } from 'react';

import NavigationBar from '../components/NavigationBar';
import bio from '../static/images/bio.webp'
import '../styles/About.css';

const About = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      document.title = 'About';
    }, []);
  
  
    useEffect(() => {
      // Function to update window width in state
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Add an event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
  <div className="site-wrapper">
    <div className="site-wrapper-inner">
      <div className="cover-container">
      
        
          <div className="about">
            {windowWidth >= 1200 ? (
              <div className='about-row'>
                  <div className="about-block">

                      {/*<img src={bio} className="bio" alt="bio"/>*/}
                      <img src={`${process.env.PUBLIC_URL}/bio.webp`} className="bio" alt="bio"/>
                      {/* <p className='photo-text'>
                    I'm a software engineer, AI researcher, and musician.
                  </p> */}
                  </div>


                  <div className="about-block">

                  <div className="about-section">
                  <h1>About </h1>
                  <div class="horizontal-line"></div>
                  
                  <div class="bio-text">
                    <p>As a Machine Learning Engineer at Mathpix, a leader in document extraction and optical character recognition (OCR), I specialize in OCR and segmentation model pipelines. My expertise spans end-to-end project management, including data handling, model training, and performance optimization. I've enhanced model development pipelines by improving testability, visibility, and telemetry while designing robust synthetic data generation systems to boost multi-domain performance. In the realm of data annotation, I developed automatic annotation and verification tools, increasing annotator productivity by 30%. My role also involves client-facing responsibilities, where I conduct product demonstrations and provide technical representation in customer meetings.</p>
                    <p> I graduated from <strong>Yale University</strong> with a B.S. in <strong>Computer Science</strong> in 2023. I focused my studies on the intersection of <strong>artificial intelligence and music.</strong> For my senior thesis, I built a <strong>harmonically-attentive LSTM melody generator.</strong> In 2022, I interned as a <strong>Software Engineer</strong> at <strong>Artiphon</strong>, a modern instrument startup. Alongside designing MIDI communication optimizations for their flagship product (Orba 2), I independently built a <strong>Markov-based melody generator in C++.</strong> In 2021, I worked at Gravitate AI, where I developed various <strong>AI/ML</strong> tools for customers, including an <strong>NLP matching algorithm</strong> to assign patients to providers.</p>
                    <p> At Yale, my chosen electives demonstrate my specific interests within computer science. For <strong><i>Software Engineering</i> (React, Vue, NodeJS, Firebase)</strong>, I worked with a team of engineers to build a portable web application that allows users to track their friends’ commutes home with a variety of safety features, including messaging and location services. In <strong><i>Computational Intelligence For Games</i> (Python)</strong>, I built <strong>AlphaBot</strong>, a minimax chess engine with Alpha-beta pruning and Scout optimizations. For <strong><i>Algorithmic Music</i> (Supercollider, MaxMSP)</strong>, I built numerous automated and responsive musical generation tools. In <strong><i>Natural Language Processing</i> (TensorFlow, Word2Vec, Keras)</strong>, I designed sequence-to-sequence text models using RNNs, LSTMs, and Transformers.</p>
                    <p> In addition to pursuing internships at startups, I have explored my interest in entrepreneurship by building organizations. In 2020, I co-founded <strong>Elite Suite Tutoring</strong>, a tutoring business dedicated to filling the educational gap left by virtual education during the pandemic. Additionally, I founded <strong>Grooveblocks</strong>, an edtech company with the goal of making music education more accessible and compelling. Grooveblocks takes a progressive, composition-based approach to music education and is grounded in physical, combinatory instruments. For Grooveblocks, I developed <strong>Teensy-driven hardware prototypes</strong>, a complementary <strong>Java-based Android application</strong>, and a formal pedagogy.</p>
                    <p> In my free time, I enjoy producing music, writing and performing comedy sketches, and skiing (this photo was taken when I worked as a lift attendant in Colorado). </p>
                    </div>
                  </div>
                  

              </div>
              
            </div>
            ) : (
              <div className="about-center">
              <h1>About </h1>
              <div class="horizontal-line"></div>
              <div class="bio-text">
                <p>As a Machine Learning Engineer at Mathpix, a leader in document extraction and optical character recognition (OCR), I specialize in OCR and segmentation model pipelines. My expertise spans end-to-end project management, including data handling, model training, and performance optimization. I've enhanced model development pipelines by improving testability, visibility, and telemetry while designing robust synthetic data generation systems to boost multi-domain performance. In the realm of data annotation, I developed automatic annotation and verification tools, increasing annotator productivity by 30%. My role also involves client-facing responsibilities, where I conduct product demonstrations and provide technical representation in customer meetings.</p>
                <p> I graduated from <strong>Yale University</strong> with a B.S. in <strong>Computer Science</strong> in 2023. I focused my studies on the intersection of <strong>artificial intelligence and music.</strong> For my senior thesis, I built a <strong>harmonically-attentive LSTM melody generator.</strong> In 2022, I interned as a <strong>Software Engineer</strong> at <strong>Artiphon</strong>, a modern instrument startup. Alongside designing MIDI communication optimizations for their flagship product (Orba 2), I independently built a <strong>Markov-based melody generator in C++.</strong> In 2021, I worked at Gravitate AI, where I developed various <strong>AI/ML</strong> tools for customers, including an <strong>NLP matching algorithm</strong> to assign patients to providers.</p>
                <p> At Yale, my chosen electives demonstrate my specific interests within computer science. For <strong><i>Software Engineering</i> (React, Vue, NodeJS, Firebase)</strong>, I worked with a team of engineers to build a portable web application that allows users to track their friends’ commutes home with a variety of safety features, including messaging and location services. In <strong><i>Computational Intelligence For Games</i> (Python)</strong>, I built <strong>AlphaBot</strong>, a minimax chess engine with Alpha-beta pruning and Scout optimizations. For <strong><i>Algorithmic Music</i> (Supercollider, MaxMSP)</strong>, I built numerous automated and responsive musical generation tools. In <strong><i>Natural Language Processing</i> (TensorFlow, Word2Vec, Keras)</strong>, I designed sequence-to-sequence text models using RNNs, LSTMs, and Transformers.</p>
                <p> In addition to pursuing internships at startups, I have explored my interest in entrepreneurship by building organizations. In 2020, I co-founded <strong>Elite Suite Tutoring</strong>, a tutoring business dedicated to filling the educational gap left by virtual education during the pandemic. Additionally, I founded <strong>Grooveblocks</strong>, an edtech company with the goal of making music education more accessible and compelling. Grooveblocks takes a progressive, composition-based approach to music education and is grounded in physical, combinatory instruments. For Grooveblocks, I developed <strong>Teensy-driven hardware prototypes</strong>, a complementary <strong>Java-based Android application</strong>, and a formal pedagogy.</p>
                <p> In my free time, I enjoy producing music, writing and performing comedy sketches, and skiing (I learned in 2020 while working as a lift attendant in Colorado). </p>
              </div>
              </div>
            )}
        </div>
        <NavigationBar active_page='About' />
      </div>
     
    </div>
  </div>

    );

  };
  
  export default About;