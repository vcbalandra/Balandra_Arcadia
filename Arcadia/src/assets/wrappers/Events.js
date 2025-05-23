import styled from "styled-components";
import sustainability from '../images/sustainability.jpg';

const Wrapper = styled.section`
  color: white;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  .section-hero {
     background-image: url(${sustainability});
        background-size: cover; 
        background-position: center center; 
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100%;
  }

 .container {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
 }

  .section-statement {
    font-size: 42px;
    font-weight: bold;
    color: #008080;
    word-wrap: break-word;
    margin-bottom: 20px;
  }

  .dialogues {
    background-color: #e6fcf5;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 4rem;
  }

  .dialogues-container {
    display: flex;
    flex-direction: row;
    padding-top: 3rem;
  }

   .campaigns-container {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    padding-top: 3rem; 
   }
   
   .upcoming-container, .previous-container {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
 }

.dialogues-title, .campaigns-title, .upcoming-title, .previous-title {
    font-size: 40px;
    font-weight: bold;
    color: #37b24d;
    margin-bottom: 1rem;
}

.dialogues-message {
    font-size: 20px;
    max-width: 600px;
    word-wrap: break-word;
    margin-bottom: 20px;
    color: #000000;
}

.campaigns-message {
    font-size: 20px;
    max-width: 900px;
    word-wrap: break-word;
    margin-bottom: 20px;
    color: #000000;  
    text-align: right;
 }

 .dialogues-sessions {
    font-weight: bold;
    font-size: 18px;
    color: #000000;
 }
  .campaign-activities {
    font-weight: bold;
    font-size: 18px;
    color: #000000;
    text-align: right;
 }

 .dialogueImg {
    margin-top: 1rem;
    margin-left: 2rem;
    height: 20rem;
    width: 40rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
 }

 .campaignImg {
    margin-top: 1rem;
    margin-right: 4rem;
    height: 20rem;
    width: 40rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
 }

  .campaigns {
    background-color: #e6fcf5;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 4rem;
  }

  .upcoming {
    background-color: #e6fcf5;
  }

  .upcoming-img {
    margin-top: 1rem;
    height: 20rem;
    width: 40rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
  }

  .embla {
  width: 90vw; 
  height: 100vh; 
  overflow: hidden; 
  display: flex;
  justify-content: center; 
  align-items: center; 
}


.embla__container {
  display: flex; 
  width: 100%; 
  height: 100%; 
}


.embla__slide {
  flex: 0 0 50%; 
  padding: 10px; 
  box-sizing: border-box; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  text-align: center; 
  flex-direction: column;
  color: #000000;
  position: relative;
}

.carousel-title {
  position: absolute;
  top: 25vh;
  left: 6vw;
  color: #fff;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  font-weight: bold;
  z-index: 2;
  padding: 4px 10px;
  border-radius: 4px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

.event-date {
  position: absolute;
  bottom: 30vh;
  left: 6vw;
  color: #fff;
  font-size: clamp(0.85rem, 1.8vw, 1rem);
  font-weight: bold;
  z-index: 2;
  padding: 4px 10px;
  border-radius: 4px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

.event-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

  .previous {
  background-color: #e6fcf5;
  }

  .previous-img {
  margin-top: 1rem;
  height: 20rem;
  width: 40rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  object-fit: cover;
  }

  .view-btn {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #008080;
  color: white;
  border: none;
  cursor: pointer;
}

.view-btn:hover {
  background-color: rgb(9, 161, 161);
}

  .arcadia-word {
  color: #008080;
  font-size: 30px;
  font-weight: bold;
}


  @media (max-width: 768px) {
    .section-hero, .dialogues, .campaigns, .upcoming, .previous {
      width: 100vw;
    }

    .dialogues-container,
    .campaigns-container {
      flex-direction: column;
      padding: 0 1rem;
      text-align: center;
    }

    .dialogues-title {
    font-size: 32px;
      margin-top: 12rem;
    }

    .campaigns-title {
      font-size: 32px;
    }

    .upcoming-title {
        margin-top: 30rem;
    }

    .dialogues-message,
    .campaigns-message {
      font-size: 18px;
      max-width: 90%;
    }

    .dialogueImg {
     width: 100%;
      height: auto;
      margin: 1rem 0;
    }
    
    .campaignImg {
      width: 100%;
      height: auto;
      margin-top: 40rem;
    }

    .dialogues-sessions,
    .campaign-activities {
      font-size: 16px;
      text-align: center;
    }

    .embla__slide {
    flex: 0 0 100%; 
    margin-top: 6rem;
  }

  .view-btn {
    padding: 8px 16px; 
    font-size: 14px; 
  }
  }

  @media (max-width: 480px) {
    .section-hero, .dialogues, .campaigns, .upcoming, .previous {
      width: 100vw;
    }
    
    .dialogues-title {
      margin-top: 10rem;
    }
    .campaigns-title {
      font-size: 28px;
    }

    .upcoming-title {
        margin-top: 20rem;
    }

    .event-title {
    font-size: 1.1rem;
    }

     .event-date {
      font-size: 1.1rem;
      bottom: 9vh;
      left: 10vw;
    } 
     .carousel-title {
      font-size: 1.1rem;
      top: 9vh;
      left: 10vw;
    }

    .dialogues-message {
      font-size: 16px;
      max-width: 100%;
    }

    .campaigns-message {
      font-size: 16px;
      max-width: 100%;
    }

    .dialogueImg,
    .campaignImg {
      width: 100%;
      height: auto;
      margin-left: 0;
      margin-right: 0;
    }

    .dialogues-sessions,
    .campaign-activities {
      font-size: 14px;
    }
    
    .upcoming-img, .previous-img {
      margin-top: 1rem;
      height: 16rem;
      width: 25rem;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      object-fit: cover;
    }

    .embla {
    width: 100vw;
    height: 70vh;
    margin-bottom: 6rem;
  }

  .embla__slide {
    flex: 0 0 100%; 
  }

  .view-btn {
    padding: 6px 12px; /* Even smaller padding for mobile */
    font-size: 12px; /* Smaller font size for mobile */
  }
  
  .arcadia-word {
      font-size: 16px;
    }
  }

`;

export default Wrapper;


  
  
