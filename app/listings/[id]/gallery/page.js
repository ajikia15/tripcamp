"use client"
import { useState, useEffect } from "react";
import { db } from "../../../../firebase-config";
import { doc, getDoc } from "firebase/firestore"
import "./Gallery.css"
export default function Gallery(props) {
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchHouse();
  }, []);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (house && house.Photo) {
        return (prevIndex + house.Photo.length - 1) % house.Photo.length;
      }
      return prevIndex;
    });
  };


  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (house && house.Photo) {
        return (prevIndex + 1) % house.Photo.length;
      }
      return prevIndex;
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevImage();
      } else if (event.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrevImage, handleNextImage]);
  useEffect(() => {
    if (house && house.Photo) {
      setCurrentImageIndex(0);
      setSelectedImageIndex(null);
    }
  }, [house]);
  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDifference = touchEndX - touchStartX;

    if (touchDifference > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + house.Photo.length) % house.Photo.length);
    } else if (touchDifference < 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % house.Photo.length);
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="overlay" onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}>
          <div className="modal">
            <button className="hidden md:block arrow-btn left" onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + house.Photo.length) % house.Photo.length)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.121 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122L7.938 13.06Z" /></g></svg>
            </button>
            <img
              className="modal-img"
              src={house.Photo[currentImageIndex]}
              alt={`Photo ${currentImageIndex}`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            />
            <button className="hidden md:block arrow-btn right" onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % house.Photo.length)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.121 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122L7.938 13.06Z" /></g></g></svg>
            </button>
            <button
              className="close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 7l10 10M7 17L17 7" /></svg>
            </button>
          </div>
        </div>
      )}
      {loading && <p>Loading...</p>}
      {!loading && house && (
        <>
          <div className="px-4 gallery">
            {house.Photo.map((item, index) => (
              <div
                className={`pics transition-all duration-350 ease mb-3 hover:opacity-80 ${selectedImageIndex === index ? 'selected' : ''}`}
                key={index}
                onClick={() => {
                  setIsModalOpen(true);
                  setCurrentImageIndex(index);
                  setSelectedImageIndex(index);
                }}
              >
                <img className="rounded-md cursor-pointer img" src={house.Photo[index]} style={{ width: '100%' }} alt={`Photo ${index}`} />
              </div>
            ))
            }
          </div>
        </>
      )}
    </>
  );
}