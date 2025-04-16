import styled from 'styled-components';

const Wrapper = styled.div`
  .carousel-container {
    width: 70vw;
    overflow: hidden;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
  }

  .carousel-item {
    display: flex;
    justify-content: center;
  }

  .carousel-item img {
    width: 600px;        
    height: 400px;         
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }

 .carousel-caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  max-width: 90%;
  text-align: center;
}

  .carousel-header {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #37b24d;
  }

  .carousel-text {
    margin: 0.5rem 0 0;
    font-size: 1rem;
  }

  .carousel-inner {
    transition: transform 1s ease-in-out;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: #000;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .carousel-control-prev:hover,
  .carousel-control-next:hover {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

   @media (max-width: 768px) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      width: 30px;
      height: 30px;
    }
    .carousel-container {
    width: 90vw;
  }

  .carousel-item img {
  height: 300px;
}

   .carousel-caption {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    bottom: 15px;
  }

    .carousel-header {
      font-size: 1.2rem;
    }

    .carousel-text {
      font-size: 0.9rem;
    }

  }

  @media (max-width: 480px) {
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      width: 25px;
      height: 25px;
    }

    .carousel-caption {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
    bottom: 10px;
    max-width: 95%;
  }
  }
`;

export default Wrapper;