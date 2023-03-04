import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ImageSlider.module.scss";
import TeamsData from "./teamsData.json";

const ImageSlider = ({ images, title, countTeam = 100 }) => {
  // const [slidesToShow, setSlidesToShow] = useState(3);
  // const numSlides = React.Children.count(children);
  // if (numSlides < 3) {
  //   setSlidesToShow(numSlides);
  // }

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: countTeam >= 3 ? 3 : 2,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: true,
    // autoplay: true,
    autoplaySpeed: 2900,
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
        <p className={styles.Designation}>{title}</p>
        <div className={styles.sliderWrapper}>
          <Slider {...settings} className={styles.slide}>
            {TeamsData[`${title}`] &&
              TeamsData[`${title}`].map((item, i) => (
                <div className={styles.sliderDiv} key={i}>
                  <img
                    className={styles.Card}
                    src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677669844/posua/card_nniokv.webp"
                  />
                  <p className={styles.Name}>{item.name}</p>
                  <p className={styles.Des}>
                    {item.designation ? item.designation : "Head"}
                  </p>
                  <p className={styles.TextForRotation}>{item.text}</p>
                  <img className={styles.Images} src={item.img} alt={item.alt} />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default ImageSlider;
