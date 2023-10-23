import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_3.jpg";
import image1 from '../../assets/images/gallery1.jpg'

import "./gallery.css";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 0; i < galleryLength; i++) {
    images.push(`/src/assets/images/gallery${i + 1}.jpg`);
  }

  console.log(image1)
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error aliquam,
        molestias distinctio cumque culpa sunt?
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => (
              <article key={image}>
                  <img src={image} alt={`image ${index}`} />
              </article>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Gallery;
