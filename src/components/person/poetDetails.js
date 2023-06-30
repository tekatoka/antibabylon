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
    const translationEnglishRef = useRef();
    const translation1Ref = useRef();
    const translation2Ref = useRef();
    const translation3Ref = useRef();
    const translation4Ref = useRef();

    const poem = poemsData.find(p => p.poetId === person.id);
    const otherTranslations = poem.otherTranslations;

    const getReference = (index) => {
        switch(index){
            case 1:
                return translation1Ref;
            case 2:
                return translation2Ref;
            case 3:
                return translation3Ref;
            case 4:
                return translation4Ref;
            default:
                return null;
        }
    }

    return (
        <>
            {fullBio && [
                    <AnchorLinks 
                        bioRef={bioRef} 
                        poemRef={poemRef} 
                        translationEnglishRef={translationEnglishRef} 
                        translation1Ref={translation1Ref}
                        translation2Ref={translation2Ref} 
                        translation3Ref={translation3Ref}
                        translation4Ref={translation4Ref}
                        otherTranslations={otherTranslations && otherTranslations} />
                ]
            }
            <div className={`poet p-4 mb-20 relative`}>
                <div onClick={onClick} style={fullBio && { paddingRight: "1.75rem" }}>
                    <PersonInfo person={person} fullBio={fullBio} reference={bioRef} />

                    {fullBio &&
                        <>
                            <section ref={poemRef}><Poem poem={poem} author={`by ${person.name}`} titleColor={person.country.toLowerCase()} /></section>
                            <section ref={translationEnglishRef}>
                                <Poem poem={poem} translation={true} author={poem.translationBy && poem.translationBy} titleColor={person.country.toLowerCase()} />
                            </section>
                            {
                                otherTranslations && otherTranslations.map((t, i) => {
                                    return <section ref={getReference(i+1)}>
                                        <Poem poem={t} translation={false} author={t.translationBy && t.translationBy} titleColor={person.country.toLowerCase()} />
                                    </section>
                                })
                            }
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
