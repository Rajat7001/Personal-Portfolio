import React, { useEffect, useState } from "react";
import './GoToTop.css'

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {

        let heightToHidden = 1360;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
    }, []);
    return (
        <>
            {isVisible && (
                <div className="sec-1">
                    <div className="top-btn" onClick={goToBtn}>
                        <i className="fa-solid fa-arrow-up"></i>
                    </div>
                </div>
            )}
        </>
    )
}
export default GoToTop;