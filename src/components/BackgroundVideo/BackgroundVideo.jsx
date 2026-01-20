import React, { useEffect, useRef, useState } from "react";
import screen from "/screen.png";

function BackgroundVideo() {
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onLoad = () => setLoaded(true);
        video.addEventListener("loadeddata", onLoad);

        return () => video.removeEventListener("loadeddata", onLoad);
    }, []);

    return (
        <>
            {!loaded && (
                <img
                    src={screen}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt=""
                />
            )}

            <video
                ref={videoRef}
                src="/vid.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
            />
        </>
    );
}

export default React.memo(BackgroundVideo);
