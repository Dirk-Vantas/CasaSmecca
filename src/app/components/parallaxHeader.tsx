"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ParallaxHeader() {
    // const [scrollPosition, setScrollPosition] = useState(0);
    // const parallaxHeaderRef = useRef(null);
    // useEffect(() => {

    //     const handleScroll = () => {
    //         setScrollPosition(window.scrollY);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    

    return (
        <div className="parallax-container">
            {/* style={{ transform: `translateY(${scrollPosition * 0.5}px)` }} */}
            <div className="parallax-header" >
                <div className="header-content">
                    <Image src={"/header2.png"} alt="company logo" className="w-full h-full" width={960} height={200} />
                </div>
            </div>
        </div>
    );
}