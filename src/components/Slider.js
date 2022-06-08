import Image from 'next/image'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'

const SlideShow = styled.div`
  width: 100%;

  .rec-dot_active {
    background-color: rgba(0, 48, 133, 0.5);
    box-shadow: ${(props) => props.theme.colors.primary} 0px 0px 1px 3px;
  }

  .rec-dot:hover {
    box-shadow: ${(props) => props.theme.colors.primary} 0px 0px 1px 3px;
  }

  .rec.rec-arrow:focus,
  .rec.rec-arrow:enabled:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 576px) {

    .rec.rec-arrow {
      height: 40px;
      width: 40px;
      min-width: 40px;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .rec.rec-slider-container, .rec.rec-pagination {
      margin: -10px;
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

  @media (max-width: 576px) {
    height: 250px;
  }
`

const Slider = () => {
  const items = [
    {
      path: '/slides/1.jpg',
      alt: 'Christimas',
      width: 1500,
      height: 885,
    },
    {
      path: '/slides/6.jpg',
      alt: 'Kill Michael',
      width: 1720,
      height: 880,
    },
    {
      path: '/slides/3.jpg',
      alt: 'Michael Tots',
      width: 1355,
      height: 791,
    },
    {
      path: '/slides/2.jpg',
      alt: 'Michael Scott and Jim Halpert',
      width: 1366,
      height: 768,
    },
    {
      path: '/slides/4.jpg',
      alt: 'Jim and Dwight',
      width: 1500,
      height: 800,
    },
    {
      path: '/slides/5.jpg',
      alt: 'Daryl and others',
      width: 1280,
      height: 720,
    }
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
            />
          </Slides>
        ))}
      </Carousel>
    </SlideShow>
  )
}

export default Slider
