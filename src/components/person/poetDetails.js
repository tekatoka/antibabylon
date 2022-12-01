import React, { useRef } from 'react';
import PropTypes from "prop-types";
import { AnchorLinks } from './AnchorLinks';
import PersonInfo from './personInfo';
import Poem from '../poem';
import poemsData from '../../data/poems';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';

const PoetDetails = ({ person, fullBio, onClick }) => {

    const bioRef = useRef();
    const poemRef = useRef();
    const translationRef = useRef();

    const poem = poemsData.find(p => p.poetId === person.id)

    return (
        <>
            {fullBio &&
                <AnchorLinks bioRef={bioRef} poemRef={poemRef} translationRef={translationRef} />
            }
            <div className={`poet p-4 mb-20 relative`}>
                <div onClick={onClick} style={fullBio && { paddingRight: "1.75rem" }}>
                    <PersonInfo person={person} fullBio={fullBio} reference={bioRef} />

                    {fullBio &&
                        <>
                            <section ref={poemRef}><Poem poem={poem} author={`by ${person.name}`} titleColor={person.country.toLowerCase()} /></section>
                            <section ref={translationRef}><Poem poem={poem} translation={true} author={poem.translationBy && poem.translationBy} titleColor={person.country.toLowerCase()} /></section>
                        </>
                    }

                </div>
                {fullBio && <ScrollToTop topRef={bioRef} />}
            </div>
        </>
    );
};

PoetDetails.propTypes = {
    person: PropTypes.object.isRequired
};

export default PoetDetails;
