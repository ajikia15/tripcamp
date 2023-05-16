"use client";
import React, { useEffect } from "react";

function GoogleMap() {
  useEffect(() => {
    const iframeData = document.getElementById("iframeId");
    const latitude = 41.6938;
    const longitude = 44.8015;
    iframeData.src = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`;
  });
  return (
    <div className="w-full">
      <iframe
        className="object-cover w-full h-96"
        id="iframeId"
        src="https://maps.google.com/maps?q=1.305385,30.923029&hl=es;&output=embed"></iframe>
    </div>
  );
}
export default GoogleMap;
