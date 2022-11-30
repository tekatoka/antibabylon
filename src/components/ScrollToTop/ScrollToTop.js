import React from "react";

export const ScrollToTop = ({ topRef }) => {
    const scrollToTop = () => {
        topRef.current.scrollIntoView();
    };
    return <span className='scroll-to-top' onClick={scrollToTop}><i className="fa fa-angle-double-up"></i></span>
}