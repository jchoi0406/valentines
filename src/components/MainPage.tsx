import { useState, useEffect } from "react";
import img1 from "/src/assets/1.jpg";
import img2 from "/src/assets/2.jpg";
import img3 from "/src/assets/3.jpg";
import img4 from "/src/assets/4.jpg";
import img5 from "/src/assets/5.jpg";
import gif from "/src/assets/6.gif";
import spongebob from "/src/assets/spongebob.gif";
import RunawayButton from "./RunawayButtons";

const images = [img1, img2, img3, img4, img5];

function MainPage() {
  const [visible, setVisible] = useState(true);
  const [celebrationType, setCelebrationType] = useState<"yes" | "no" | null>(null);  
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCelebrationType("yes");
    setVisible(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={visible ? "visible" : "invisible"}>
        <div className="image-container">
          <img
            src={images[current]}
            className={`fade ${fade ? "in" : "out"}`}
            alt="Slideshow"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <button type="submit" className="yes-button">
            YES
          </button>
          <RunawayButton onClick={() => {
            setCelebrationType("no");
            setVisible(false); // hide slideshow
          }} />
        </form>
      </div>

      {/* Celebration */}
      <div className={visible ? "invisible" : "visible"}>
        <div className="celebration">
          {celebrationType === "yes" && <img className="gif" src={gif} />}
          {celebrationType === "no" && <img className="gif" src={spongebob} />}
        </div>
      </div>
    </div>
  );
}


export default MainPage;
