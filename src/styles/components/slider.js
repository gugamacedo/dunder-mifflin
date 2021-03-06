import styled from 'styled-components'

export const SlideShow = styled.div`
  width: 100%;

  .rec.rec-pagination {
    display: none;
  }

  .rec.rec-arrow:focus {
    background-color: rgba(103, 58, 183, 0.1);
    color: #333;
  }

  .rec.rec-arrow:enabled:hover {
    background-color: ${(props) => props.theme.colors.primary} !important;
    color: ${(props) => props.theme.colors.secondary} !important;
  }

  @media (min-width: 1900px) {
    .rec.rec-arrow {
      width: 100px;
      height: 90px;
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

export const Slides = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 540px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  margin: 15px;
  font-size: 4em;
  pointer-events: none;
  max-width: 1200px;


  @media (min-width: 1900px) {
    height: 720px;
    max-width: 1600px;
  }

  @media (max-width: 1300px) {
    height: 480px;
  }

  @media (max-width: 1100px) {
    height: 420px;

    span {
      height: 100% !important;
    }
  }

  @media (max-width: 500px) {
    height: 225px;
  }
`