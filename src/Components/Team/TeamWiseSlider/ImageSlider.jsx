import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ImageSlider.module.scss";
import MemberSlider from "./MemberSlider";

const ImageSlider = ({ images }) => {

    
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2500,
    leftArrow: true,
    nexttArrow: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.imgslider}>
        <p className={styles.Designation}>Web Team</p>
        <div className={styles.sliderWrapper}>
          <Slider {...settings} className={styles.slide}>
            {MemberSlider &&
              MemberSlider.map((item) => (
                <div className={styles.sliderDiv} key={item.id}>
                  <img className={styles.Card} src={item.card} />
                  <p className={styles.TextForRotation}>{item.text}</p>
                  <img className={styles.Images} src={item.src} alt={item.alt} />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default ImageSlider;
