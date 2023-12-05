import React, { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

const YouTube = React.lazy(() => import("react-youtube"));

const YouTubeVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleButtonClick = () => {
    setShowVideo(!showVideo);
  };

  return (
    <>
      <button
        className="text-[12px] self-end hover:opacity-70"
        type="button"
        onClick={handleButtonClick}>
        {showVideo ? "(Hide Video)" : "(Show Video)"}
      </button>
      <AnimatePresence>
        {showVideo && (
          <div className="w-full absolute h-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.8 }}
              className={showVideo ? "video-animation flex flex-col w-[641px] h-[410px]" : ""}>
              <button
                className="text-[12px] hover:text-blue-500"
                type="button"
                onClick={handleButtonClick}>
                {showVideo ? "(Hide Video)" : "(Show Video)"}
              </button>
              <Suspense fallback={<div>Loading...</div>}>
                <YouTube videoId="wIc0YhcqZH4" opts={opts} />
              </Suspense>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(YouTubeVideo);
