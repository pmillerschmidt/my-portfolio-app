import React from 'react';
import mg from '../static/images/ai_music.jpg';
import lp from '../static/images/lilypad.jpg'
import lg from '../static/images/music-logic.png';
import cg from '../static/images/chess-robot.png';
import gb from '../static/images/groove_blocks.png';
import wh from '../static/images/walk-home.png';
import BootstrapCard from '../components/BootstrapCard';
import "../styles/Projects.css";


function ProjectWide() {

    return (


        <div className='content'>

            <div className='row'>
                <div class="project-badge">
                    <BootstrapCard title="MelGen" imageUrl={mg} info="Harmonically-attentive LSTM Melody Generator"
                                   link="https://github.com/pmillerschmidt/MelGen"/>
                </div>

                <div class="project-badge">
                    <BootstrapCard title="Groove Blocks" imageUrl={gb}
                                   info="Progressive Tools for Composition-based Music"
                                   link="https://github.com/pmillerschmidt/GrooveBlocks"/>
                </div>

                <div className="project-badge">
                    <BootstrapCard title="Music Logic" imageUrl={lg} info="Markov-based Melody Generator"
                                   link="https://github.com/pmillerschmidt/Artiphon-Music-Logic"/>
                </div>


            </div>

            <div className='row'>

                <div className="project-badge">
                    <BootstrapCard title="LilyPad" imageUrl={lp} info="Levenshtein-inspired word game"
                                   link="https://github.com/pmillerschmidt/lilypad"/>
                </div>

                <div className="project-badge">
                    <BootstrapCard title="Walk Home" imageUrl={wh} info="Vue-based PWA for safe commutes"
                                   link="https://github.com/pmillerschmidt/Walk-Home"/>
                </div>

                <div className="project-badge">
                    <BootstrapCard title="AlphaBot" imageUrl={cg} info="Minimax Chess Engine with AB pruning"
                                   link="https://github.com/pmillerschmidt/Chess-Alpha-Beta"/>
                </div>


            </div>
        </div>
    );

};

export default ProjectWide;