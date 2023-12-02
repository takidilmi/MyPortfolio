import React, { useState, useEffect } from "react";

const NameWriter = () => {
  const [name, setName] = useState("");
  const fullName = "Takieddine Dilmi";
  const characters = "&é@/.w-+ç9$=+}|[ه";
  let lastUpdate = Date.now();

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const interval = setInterval(() => {
      if (currentIndex < fullName.length) {
        timeoutId = setInterval(() => {
          if (Date.now() - lastUpdate < 800) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            setName(fullName.slice(0, currentIndex) + characters[randomIndex]);
          } else {
            setName(fullName.slice(0, currentIndex));
          }
        }, 100);

        setTimeout(() => {
          clearInterval(timeoutId);
          setName(fullName.slice(0, currentIndex + 1));
          currentIndex++;
          lastUpdate = Date.now();
        }, 400);
      } else {
        clearInterval(interval);
        clearInterval(timeoutId);
      }
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <>
      <p>{name}</p>
    </>
  );
};

export default NameWriter;
