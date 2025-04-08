import styled from "styled-components";

const Wrapper = styled.div`
    font-family: Arial, sans-serif;
    max-width: 100%;
    margin: 0 auto;
  }

  #contact {
    background-size: cover; 
    background-position: center center; 
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 40vh;
    background-color: #e6fcf5;
  }

  .contact-container {
    margin-top: 7rem;
  }

  .contact-header {
    font-size: 2.5rem;
    font-weight: bold;
    color: #37b24d;
  }

  .informations {
    text-align: left;
    margin-top: 4rem;
    margin-left: 3rem;
  }

  .additional {
    font-size: 2rem;
    font-weight: bold;
  }

  .additional-text {
    font-size: 20px;
  }

  #contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 4rem;
  }

  #contact-form form {
    display: grid;
    gap: 15px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  #contact-form div {
    display: flex;
    flex-direction: column;
  }

  #contact-form label {
    font-size: 1rem;
    color: #555;
  }

  #contact-form input,
  #contact-form select,
  #contact-form textarea {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
  }

  #contact-form input:focus,
  #contact-form select:focus,
  #contact-form textarea:focus {
    border-color: #008080;
  }

  #contact-form button {
    padding: 12px 20px;
    background-color: #008080;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    width: 30%;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  #contact-form button:hover {
    background-color: rgb(9, 161, 161);
  }

  #contact-form textarea {
    resize: vertical;
    min-height: 150px;
  }

   #connect {
    background-size: cover; 
    background-position: center center; 
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 60vh;
    background-color: #e6fcf5;
    width: 100vw;
    margin-top: 4rem;
  }

  .connect-header {
    font-size: 30px;
    font-weight: bold;
    color: #37b24d;
  }

  #connect ul {
    list-style-type: none;
    padding: 0;
  }

  #connect ul li {
    margin-bottom: 10px;
    color: #000;
    font-size: 20px;
  }

  #connect-container {
    display: flex;
    justify-content: space-between;
    gap: 120px;
    flex-wrap: wrap;
  }

  #connect-container ul {
    flex: 1;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  #connect-container ul li {
    margin-bottom: 10px;
  }

   @media (max-width: 768px) {
    #contact {
      height: 50vh;
    }

    .contact-header {
      font-size: 2rem;
    }

    #contact-form {
      margin-top: 2rem;
    }

    #contact-form form {
      max-width: 100%;
      padding: 0 15px;
    }

    #contact-form input,
    #contact-form select,
    #contact-form textarea {
      font-size: 0.9rem;
    }

    #contact-form button {
      width: 60%;
      font-size: 0.9rem;
    }

    #connect {
      height: 100vh;
    }

    .connect-header {
      font-size: 22px;
    }

    #connect-container {
      gap: 20px;
      flex-direction: column;
      align-items: center;
    }

    #connect-container ul {
      text-align: center;
    }

    #connect ul li {
    font-size: 18px;
  }
  }

  @media (max-width: 480px) {
    #contact {
      height: 60vh;
    }

    .contact-header {
      font-size: 1.8rem;
    }

    #contact-form {
      margin-top: 2rem;
    }

    #contact-form form {
      max-width: 100%;
      padding: 0 10px;
    }

    #contact-form input,
    #contact-form select,
    #contact-form textarea {
      font-size: 0.9rem;
    }

    #contact-form button {
      width: 70%;
      font-size: 0.9rem;
    }

    #connect {
      height: 100vh;
    }

    .connect-header {
      font-size: 22px;
    }

    #connect-container {
      gap: 30px;
      flex-direction: column;
      align-items: center;
    }

    #connect-container ul {
      text-align: center;
    }

    #connect-container ul li {
      font-size: 16px;
    }
  }
`;


export default Wrapper;