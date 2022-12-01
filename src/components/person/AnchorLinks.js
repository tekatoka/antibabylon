import React, { useState, useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";

const TYPES = {
    bio: "bio",
    poem: "poem",
    translation: "translation"
}

export const AnchorLinks = ({ bioRef, poemRef, translationRef }) => {

    const [isActive, setIsActive] = useState(TYPES.bio);

    const isBioVisible = useOnScreen(bioRef)
    const isPoemVisible = useOnScreen(poemRef)
    const isTranslationVisible = useOnScreen(translationRef)

    useEffect(() => {
        if (isBioVisible) setIsActive(TYPES.bio)
        if (isPoemVisible && !isBioVisible && !isTranslationVisible) setIsActive(TYPES.poem)
        if (isTranslationVisible && !isPoemVisible) setIsActive(TYPES.translation)
    }, [isBioVisible, isPoemVisible, isTranslationVisible])

    const scrollToBio = () => {
        bioRef.current.scrollIntoView();
        setIsActive(TYPES.bio)
    };

    const scrollToPoem = () => {
        poemRef.current.scrollIntoView();
        setIsActive(TYPES.poem)
    };

    const scrollToTranslation = () => {
        translationRef.current.scrollIntoView();
        setIsActive(TYPES.translation)
    };

    return (
        <div className={"anchor-links"}>
            <span onClick={scrollToBio} className={(isActive === TYPES.bio) ? "active" : ""}>Bio</span>
            <span onClick={scrollToPoem} className={(isActive === TYPES.poem) ? "active" : ""}>Poem</span>
            <span onClick={scrollToTranslation} className={(isActive === TYPES.translation) ? "active" : ""}>Translation</span>
        </div>
    );
};
