"use client"
import React,{useState} from "react";

// import Img1 from '../public/burger.jpg'
import './components/Gallery.css'

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: 'https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
        {
            id: 2,
            imgSrc: 'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
        {
            id: 3,
            imgSrc: 'https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
        {
            id: 2,
            imgSrc: 'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
        {
            id: 3,
            imgSrc: 'https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
        {
            id: 2,
            imgSrc: 'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
    ]
    const [model, setModel] = useState (false);
    const [tempimgSrc, setTempimgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempimgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
        <div className={model? "model open w-full h-screen fixed top-0 left-0 bottom-0 flex justify-center items-center bg-black": "model"}>
            <img src={tempimgSrc} className="w-auto max-w-full max-h-full block leading-0 box-border p-5 m-auto"/>
            <svg className="fixed top-4 right-4 w-8 h-8 p-1 b-black text-white cursor-pointer" onClick={() => setModel(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"/></svg>
        </div>
        <div className="gallery mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, index)=>{
                return (
                    <div className="pics filter opacity-80" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery;