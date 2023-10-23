import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_3.jpg";
import image1 from '../../assets/images/gallery1.jpg'
import image2 from '../../assets/images/gallery2.jpg'
import image3 from '../../assets/images/gallery3.jpg'
import image4 from '../../assets/images/gallery4.jpg'
import image5 from '../../assets/images/gallery5.jpg'
import image6 from '../../assets/images/gallery6.jpg'
import image7 from '../../assets/images/gallery7.jpg'
import image8 from '../../assets/images/gallery8.jpg'
import image9 from '../../assets/images/gallery9.jpg'
import image10 from '../../assets/images/gallery10.jpg'
import image11 from '../../assets/images/gallery11.jpg'
import image12 from '../../assets/images/gallery12.jpg'
import image13 from '../../assets/images/gallery13.jpg'
import image14 from '../../assets/images/gallery14.jpg'
import image15 from '../../assets/images/gallery15.jpg'

import "./gallery.css";

const Gallery = () => {
  // const galleryLength = 15;
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15];

  

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
