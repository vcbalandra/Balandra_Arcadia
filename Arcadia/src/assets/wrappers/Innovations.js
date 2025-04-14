import styled from "styled-components";
import arcadiaBcg from '../images/background.jpg';

const Section = styled.section`
  color: white;
  width: 100vw;
  box-sizing: border-box;

  .section-hero {
    background-image: url(${arcadiaBcg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 100vh;
    padding: 2rem 1rem;
  }

  .section-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(40, 60, 70, 0.4);
    z-index: 1;
  }

  .section-hero > * {
    position: relative;
    z-index: 2;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .motto {
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: bold;
    color: #008080;
  }

  .hero-message {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    line-height: 1.6;
    max-width: 600px;
    margin-bottom: 20px;
    color: #fff;
  }

  .hero-button {
    margin-top: 2rem;
    background-color: #008080;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .hero-button:hover {
    background-color: rgb(9, 161, 161);
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
  }

  .heroImg {
    width: 100%;
    height: 40vh;
    max-width: 600px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-image {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 0 0 2px 2px;
  }

  .growing,
  .keys,
  .focus,
  .about {
    background-color: #e6fcf5;
    width: 100%;
    padding: 4rem 1rem;
    display: flex;
    justify-content: center;
  }

  .growing-container {
   display: flex;
   flex-direction: row;
   align-items: center;
   text-align: left;
   margin-left: 3rem;
  }

  .keys-container,
  .focus-container,
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    text-align: center;
  }

  .growing-header,
  .keys-header,
  .focus-header,
  .about-header {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: bold;
    color: #37b24d;
    margin-bottom: 1rem;
  }

  .growing-message,
  .keys-message,
  .focus-message,
  .about-message,
  .about-hub {
    font-size: clamp(1rem, 2vw, 1.25rem);
    max-width: 700px;
    color: #000;
    margin-bottom: 1.5rem;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Always 3 columns */
    gap: 20px;
    padding: 20px;
  }

  .card {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 60vh;
    position: relative;
    padding-bottom: 1rem;
    overflow: hidden;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.11);
  }

  .card-title {
    position: absolute;
    top: 16px;
    left: 16px;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    z-index: 2;
    padding: 6px 12px;
    border-radius: 4px;
  }

  .card-text {
  font-size: 1.1rem;
  color: #444;
  padding: 1rem;
  flex-grow: 1;
  line-height: 1.5;
}

  .card-btn-container {
  align-self: flex-start; 
  margin-top: auto; 
  }

  .card-btn {
    display: inline-flex;
    align-items: center;
    background-color: #fff;
    color: #008080;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .card-btn:hover {
    color: rgb(9, 161, 161);
  }

  .arcadia-word {
    color: #008080;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    font-weight: bold;
  }

  @media (max-width: 768px) {
   .section-hero {
      width: 100vw;
    }

    .heroImg {
      max-width: 90%;
    }

    .card {
      height: 100vh;
    }

    .keys-container {
      margin-bottom: 10rem;
    }

    .card-title {
      font-size: 1rem;
      padding: 4px 10px;
    }

        .card-grid {
      grid-template-columns: 1fr; /* Stack cards vertically */
    }

    .growing-container {
    flex-direction: column;
    }
  }

  @media (max-width: 480px) {
    .section-hero {
      width: 100vw;
    }

    .hero-button {
      font-size: 0.9rem;
      padding: 8px 14px;
    }
      .card {
      height: 70vh;
    }

    .card-title {
      font-size: 0.9rem;
      padding: 4px 8px;
    }

    .card-btn {
      font-size: 0.9rem;
    }

    .growing-container {
    flex-direction: column;
    }

    .card-grid {
    grid-template-columns: 1fr; /* Stack cards vertically */
  }
  }
`;

export default Section;