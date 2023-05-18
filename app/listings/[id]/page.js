"use client"
import { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import { doc, getDoc } from "firebase/firestore"
export default function Listing(props) {
    const [house, setHouse] = useState(null);

    useEffect(() => {
        // Function to fetch the document
        const fetchHouse = async () => {
            try {
                const docRef = doc(db, "Houses", props.params.id);
                const docSnapshot = await getDoc(docRef);

                if (docSnapshot.exists) {
                    // Document found
                    setHouse(docSnapshot.data());
                } else {
                    // Document does not exist
                    console.log("Document does not exist.");
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        fetchHouse();
    }, []);

    return (
        <div>
            {/* Render the house data */}
            {house && (
                <div>
                    <h1>{house.Price}</h1>
                    <p>{house.Description}</p>
                    {/* Render other properties as needed */}
                </div>
            )}
        </div>
    );
}
