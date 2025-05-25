import styles from '../Carousel.module.css'
import {img} from './data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function CarouselEffect() {
  return (
    <div>
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      
      >
        {
          img.map((imglink, index)=>{
            return  <img src={imglink} key={index} alt="" />
            
          })
        }

      </Carousel>
  <div className={styles.heroImg}></div>
      
    </div>
  )
}

export default CarouselEffect
