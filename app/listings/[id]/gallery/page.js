"use client"
import { useState, useEffect } from "react";
import { db } from "../../../../firebase-config";
import { doc, getDoc } from "firebase/firestore"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import "./Gallery.css"
export default function Gallery(props) {
    const [house, setHouse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [options, setOptions] = useState([]);
    useEffect(() => {
        // Function to fetch the document
        const fetchHouse = async () => {
            try {
                const docRef = doc(db, "Houses", props.params.id);
                const docSnapshot = await getDoc(docRef);

                if (docSnapshot.exists) {
                    // Document found
                    setHouse(docSnapshot.data());
                    const houseOptions = docSnapshot.data().Options.split(',').map(Number);
                    setOptions(houseOptions);
                } else {
                    // Document does not exist
                    console.log("Document does not exist.");
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHouse();
    }, []);
    return (
        <>
            {loading && <p>Loading...</p>}
            {!loading && house && (
                <>
                    <div className="grid-wrapper">
                        {house.Photo.map((item, index) => (
                            <div className="" key={index}>
                                <img className="img" src={house.Photo[index]} alt={`Photo ${index}`} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
    // mx-6 grid grid-cols-4 gap-6
    // relative pics filter object-cover opacity-80
}