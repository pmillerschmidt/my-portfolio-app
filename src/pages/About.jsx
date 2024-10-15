import React from 'react';
import {useEffect, useState} from 'react';

import NavigationBar from '../components/NavigationBar';
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
    const paragraphContent = (
        <>
            <p>As a Machine Learning Engineer at <strong><a href="https://www.mathpix.com" target="_blank"
                                                            rel="noopener noreferrer">Mathpix</a></strong>, I specialize
                in <strong>OCR and segmentation</strong> model pipelines. My work covers data handling, model training,
                performance
                optimization, and enhancing development pipelines for testability and telemetry. I've designed <strong>synthetic
                    data systems</strong> to improve multi-domain performance and developed automatic annotation and
                verification tools that <strong>increased annotator productivity by 30%</strong>. I also handle
                client-facing responsibilities, including
                product demos and technical representation in customer meetings.</p>
            <p>I graduated from <strong>Yale University</strong> with a B.S. in <strong>Computer Science</strong> in
                2023. I focused my studies on the intersection of <strong>artificial intelligence and
                    music.</strong> For my senior thesis, I built a <strong>harmonically-attentive LSTM melody
                    generator.</strong> In 2022, I interned as a <strong>Software Engineer</strong> at <strong><a
                    href="https://artiphon.com/" target="_blank">Artiphon</a></strong>, a modern instrument startup.
                Alongside designing MIDI communication optimizations for their flagship product (Orba 2), I
                independently built a <strong>Markov-based melody generator in C++.</strong> In 2021, I worked at <strong>
                    <a href="https://www.gravitate.ai/" target="_blank" rel="noopener noreferrer">Gravitate AI</a></strong>,
                    where I developed various <strong>AI/ML</strong> tools for customers, including
                an <strong>NLP matching algorithm</strong> to assign patients to providers.</p>
            <p>At Yale, my chosen electives demonstrate my specific interests within computer science. For <strong><i>Software
                Engineering</i> (React, Vue, NodeJS, Firebase)</strong>, I worked with a team of engineers to build a
                portable web application that allows users to track their friends’ commutes home with a variety of
                safety features, including messaging and location services. In <strong><i>Computational Intelligence For
                    Games</i> (Python)</strong>, I built <strong>AlphaBot</strong>, a minimax chess engine with
                Alpha-beta pruning and Scout optimizations. For <strong><i>Algorithmic Music</i> (Supercollider, MaxMSP)</strong>,
                I built numerous automated and responsive musical generation tools. In <strong><i>Natural Language
                    Processing</i> (TensorFlow, Word2Vec, Keras)</strong>, I designed sequence-to-sequence text models
                using RNNs, LSTMs, and Transformers.</p>
            <p>Alongside internships at startups, I explored entrepreneurship by founding <strong>
                <a href="https://github.com/pmillerschmidt/GrooveBlocks" target="_blank"
                                                            rel="noopener noreferrer">Grooveblocks</a></strong>, an edtech
                company focused on making music education more accessible through a composition-based approach and
                combinatory instruments. I developed hardware prototypes, an Android app, and a formal pedagogy. I also
                co-founded <strong><a href="https://www.elitesuitetutoring.com/" target="_blank"
                                                            rel="noopener noreferrer">Elite Suite Tutoring</a></strong> to
                address the educational gap left by virtual learning during the
                pandemic.</p>
            <p>In my free time, I enjoy producing music, DJing, writing and performing comedy sketches, and skiing (this
                photo was taken when I worked as a lift attendant in Colorado).</p>
        </>
    );

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
                                </div>


                                <div className="about-block">
                                    <div className="about-section">
                                        <div className="about-section-wrapper">

                                            <h1>About </h1>
                                            <div class="horizontal-line"></div>

                                            <div class="bio-text">
                                                {paragraphContent}
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        ) : (
                            <div className="about-center">
                                <h1>About </h1>
                                <div class="horizontal-line"></div>
                                <div class="bio-text">
                                    {paragraphContent}
                                </div>
                            </div>
                        )}
                    </div>
                    <NavigationBar active_page='About'/>
                </div>

            </div>
        </div>

    );

};

export default About;