import Image from 'next/image'
import Carousel from 'react-elastic-carousel'

import { Slides, SlideShow } from '../styles/components/slider'

const Slider = ({ slides }) => {
  return (
  <SlideShow>
    <Carousel itemsToShow={1}>
      {slides.map((slide) => (
        <Slides key={slide.alt}>
          <Image
            src={slide.path}
            quality={100}
            alt={slide.alt}
            width={slide.width}
            height={slide.height}
          />
        </Slides>
      ))}
    </Carousel>
  </SlideShow>
)}

export default Slider
