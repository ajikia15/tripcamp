"use client"
import React, { useState } from "react";

// import Img1 from '../public/burger.jpg'
import './components/Gallery.css'

const Gallery = () => {
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempimgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempimgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <div className={model ? "model open w-full h-screen fixed top-0 left-0 bottom-0 flex justify-center items-center bg-black" : "model"}>
                <img src={tempimgSrc} className="box-border block w-auto max-w-full max-h-full p-5 m-auto leading-0" />
                <svg className="fixed w-8 h-8 p-1 text-white cursor-pointer top-4 right-4 b-black" onClick={() => setModel(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z" />
                </svg>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4 gallery md:grid-cols-2 lg:grid-cols-3">
                {data.map((item, index) => {
                    return (
                        <div className="relative pics filter opacity-80" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery;