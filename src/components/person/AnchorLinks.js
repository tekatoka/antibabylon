import React, { useState, useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";

const TYPES = {
    bio: "bio",
    poem: "poem",
    translationEnglish: "translationEnglish",
    translation1: "translation1",
    translation2: "translation2",
    translation3: "translation3",
    translation4: "translation4"
}

export const AnchorLinks = ({ bioRef, poemRef, translationEnglishRef, translation1Ref, translation2Ref, translation3Ref, translation4Ref, otherTranslations }) => {

    const [isActive, setIsActive] = useState(TYPES.bio);

    const isBioVisible = useOnScreen(bioRef)
    const isPoemVisible = useOnScreen(poemRef)
    const isTranslationEnglishVisible = useOnScreen(translationEnglishRef)
    const isTranslation1Visible = useOnScreen(translation1Ref)
    const isTranslation2Visible = useOnScreen(translation2Ref)
    const isTranslation3Visible = useOnScreen(translation3Ref)
    const isTranslation4Visible = useOnScreen(translation4Ref)

    useEffect(() => {
        if (isBioVisible) setIsActive(TYPES.bio)
        if (isPoemVisible && !isBioVisible && !isTranslationEnglishVisible) setIsActive(TYPES.poem)
        if (isTranslationEnglishVisible && !isPoemVisible) setIsActive(TYPES.translationEnglish)
        if (isTranslation1Visible && !isTranslationEnglishVisible) setIsActive(TYPES.translation1)
        if (isTranslation2Visible && !isTranslation1Visible) setIsActive(TYPES.translation2)
        if (isTranslation3Visible && !isTranslation2Visible) setIsActive(TYPES.translation3)
        if (isTranslation4Visible && !isTranslation3Visible) setIsActive(TYPES.translation4)
    }, [isBioVisible, isPoemVisible, isTranslationEnglishVisible, isTranslation1Visible, isTranslation2Visible, isTranslation3Visible, isTranslation4Visible])

    const scrollToBio = () => {
        bioRef.current.scrollIntoView();
        setIsActive(TYPES.bio)
    };

    const scrollToPoem = () => {
        poemRef.current.scrollIntoView();
        setIsActive(TYPES.poem)
    };

    const scrollToTranslation = (num) => {
        var reference = translationEnglishRef;
        var type = TYPES.translationEnglish;
        switch(num) {
            case 1:
                reference = translation1Ref;
                type = TYPES.translation1;
                break;
            case 2:
                reference = translation2Ref;
                type = TYPES.translation2;
                break;
            case 3:
                reference = translation3Ref;
                type = TYPES.translation3;
                break;
            case 4:
                reference = translation4Ref;
                type = TYPES.translation4;
                break;
            default:
                reference = translationEnglishRef;
                type = TYPES.translationEnglish;
        }
        reference.current.scrollIntoView();
        setIsActive(type)
    };

    const getType = (number) => {
        switch(number) {
            case 1:
                return TYPES.translation1;
            case 2:
                return TYPES.translation2;
            case 3:
                return TYPES.translation3;
            case 4:
                return TYPES.translation4;
            default:
                return null;
        }
    }

    return (
        
        <div className={"anchor-links"}>
            <span onClick={scrollToBio} className={(isActive === TYPES.bio) ? "active" : ""}>Bio</span>
            <span onClick={scrollToPoem} className={(isActive === TYPES.poem) ? "active" : ""}>Poem</span>
            <span onClick={() => scrollToTranslation(0)} className={(isActive === TYPES.translationEnglish) ? "active" : ""}>English</span>
            {
                otherTranslations && otherTranslations.map((t, i) => <span onClick={() => scrollToTranslation(i+1)} 
                className={(isActive === getType(i+1)) ? "active " + t.country : ""}>{t.lang}</span>)
            }
        </div>
    );
};
