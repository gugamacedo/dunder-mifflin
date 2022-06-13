import Image from 'next/image'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'

const SlideShow = styled.div`
  width: 100%;

  .rec.rec-pagination {
    display: none;
  }

  .rec.rec-arrow:focus {
    background-color: rgba(103,58,183,0.1);
    color: #333;
  }
  
  .rec.rec-arrow:enabled:hover {
    background-color: ${(props) => props.theme.colors.primary} !important;
    color: ${(props) => props.theme.colors.secondary} !important;  
  }

  @media (min-width: 1900px) {
    .rec.rec-arrow {
      width: 100px;
      height: 100px;
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    .rec.rec-arrow {
      display: none;
    }

    .rec.rec-pagination {
      display: flex;
    }
    .rec-dot {
      margin: 10px;
    }

    .rec-dot_active {
      background-color: rgba(0, 48, 133, 0.5);
      box-shadow: ${(props) => props.theme.colors.primary} 0px 0px 1px 3px !important;
    }

    .rec-dot:hover,
    .rec-dot:focus {
      box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .rec.rec-slider-container,
    .rec.rec-item-wrapper div {
      margin: 0;
    }
  }
  
`

const Slides = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  margin: 15px;
  font-size: 4em;
  pointer-events: none;

  @media (min-width: 1900px) {
    height: 720px;
    max-width: 1600px;
  }

  @media (max-width: 1199px) {
    height: 400px;

    span {
      height: 100% !important;
    }
  }

  @media (max-width: 500px) {
    height: 225px;
  }
`

const Slider = () => {
  const items = [
    {
      path: '/slides/6.jpg',
      alt: 'Kill Michael',
      width: 1360,
      height: 720,
    },
    {
      path: '/slides/4.jpg',
      alt: 'Jim and Dwight',
      width: 1360,
      height: 720,
    },
    {
      path: '/slides/3.jpg',
      alt: 'Michael Tots',
      width: 1304,
      height: 720,
    },
    {
      path: '/slides/2.jpg',
      alt: 'Michael Scott and Jim Halpert',
      width: 1318,
      height: 720,
    },
    {
      path: '/slides/1.jpg',
      alt: 'Christimas',
      width: 1335,
      height: 720,
    },
    {
      path: '/slides/5.jpg',
      alt: 'Daryl and others',
      width: 1280,
      height: 720,
    },
  ]

  return (
    <SlideShow>
      <Carousel itemsToShow={1}>
        {items.map((item) => (
          <Slides key={item.alt}>
            <Image
              src={item.path}
              quality={100}
              alt={item.alt}
              width={item.width}
              height={item.height}
              priority={item.alt === 'Kill Michael' ? true : false}
            />
          </Slides>
        ))}
      </Carousel>
    </SlideShow>
  )
}

export default Slider