import { useEffect, useState } from "react";

function Header() {
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxOpacity = 0.8; // Adjust as needed
      const maxTranslateY = 100; // Adjust as needed

      // Calculate opacity based on scroll position
      const calculatedOpacity = Math.min(scrollPosition / 300, maxOpacity);
      const calculatedTranslateY = Math.min(scrollPosition * 0.5, maxTranslateY);

      // Set the opacity and translation state
      setOpacity(calculatedOpacity);
      setTranslateY(calculatedTranslateY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="iframe-container" style={{ position: "relative", overflow: "hidden", width: "100%", height: '100%' }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: `rgba(0, 0, 0, ${opacity})` }}></div>
      <iframe
  id="parallaxIframe"
  width="100%"
  height="415"
  src="https://www.youtube.com/embed/WSTf9Bja7is?si=ZZOQS_Mcu-vqhy1-&autoplay=1&controls=0&mute=1&modestbranding=1"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  className="parallax-iframe"
  style={{ opacity: 1 - opacity, transform: `translateY(${translateY}px)`, transition: "opacity 0.3s ease, transform 0.3s ease" }}
></iframe>


    </div>
  );
}

export default Header;
