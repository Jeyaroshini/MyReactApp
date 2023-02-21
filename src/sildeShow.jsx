import React from "react";
import { Fade } from "react-slideshow-image";
const slideImages = [
  {
    image:
      "https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000",
    caption: "First Slide",
  },
  {
    image:
      "https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000",
    caption: "Second Slide",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551__340.png",
    caption: "Third Slide",
  },
];
const Slideshow = () => {
  return (
    <div>
      <Fade>
        {slideImages.map((fadeImage, index) => (
          <div key={index}>
            <div>
              <img src={fadeImage.url} alt="Images" />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};
export default Slideshow;
