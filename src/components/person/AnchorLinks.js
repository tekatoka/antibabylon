import React, { useState, useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";

export const AnchorLinks = ({ bioRef, poemRef, translationRef }) => {

    const [isActive, setIsActive] = useState("bio");

    const isBioVisible = useOnScreen(bioRef)
    const isPoemVisible = useOnScreen(poemRef)
    const isTranslationVisible = useOnScreen(translationRef)

    useEffect(() => {
        if (isBioVisible) setIsActive("bio")
        if (isPoemVisible && !isBioVisible && !isTranslationVisible) setIsActive("poem")
        if (isTranslationVisible && !isPoemVisible) setIsActive("translation")
    }, [isBioVisible, isPoemVisible, isTranslationVisible])

    const scrollToBio = () => {
        bioRef.current.scrollIntoView();
        setIsActive("bio")
    };

    const scrollToPoem = () => {
        poemRef.current.scrollIntoView();
        setIsActive("poem")
    };

    const scrollToTranslation = () => {
        translationRef.current.scrollIntoView();
        setIsActive("translation")
    };

    return (
        <div className={"anchor-links"}>
            {/* {isBioVisible && "bio visible"}
            {isPoemVisible && "isPoemVisible"}
            {isTranslationVisible && "isTranslationVisible"} */}
            <span onClick={scrollToBio} className={(isActive === "bio") ? "active" : ""}>Bio</span>
            <span onClick={scrollToPoem} className={(isActive === "poem") ? "active" : ""}>Poem</span>
            <span onClick={scrollToTranslation} className={(isActive === "translation") ? "active" : ""}>Translation</span>
        </div>
    );
};
