import styled from "styled-components";

const Wrapper = styled.div`
  height: auto;
  width: 100vw;
  overflow-x: hidden; 

.initiatives {
  min-height: 100vh;
  width: 100%;
  background-color: #e6fcf5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; 
  padding: 2rem;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left; 
}

.initiatives-header {
  margin-top: 7rem;
  font-weight: bold;
  font-size: 2.5rem;
}

.initiatives-text {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #495057;
}

.partner-entry {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.partner-logo {
  width: 400px;
  height: 200px;
  object-fit: cover;
}

.partner-description {
  flex: 1;
  font-size: 1.1rem;
  text-align: left;
  padding: 0 15px;
  color: #495057;
}

.listed-btn {
  margin-top: 30px;
  font-size: 1rem;
  border: none;
  background-color: #008080;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px 24px;
  width: auto;
  display: block;
  margin-left: auto;
  margin-right: auto; 
}

.listed-btn:hover {
  background-color: rgb(9, 161, 161);
}

@media (max-width: 1024px) {
  .initiatives-header {
    font-size: 2rem; 
  }

  .partner-entry {
    flex-direction: column;
    text-align: center;
  }

  .partner-logo {
    width: 80%; 
    height: 200px;
  }

  .partner-description {
    font-size: 1rem;
    padding: 0;
  }

  .listed-btn {
    width: 100%; 
    padding: 12px;
  }
}

@media (max-width: 768px) {
  .initiatives {
    padding: 1rem;
  }

  .initiatives-header {
    font-size: 2.2rem; 
  }
    
  .initiatives-text {
    font-size: 1.6rem;
  }

  .container {
    padding: 1rem;
  }

  .partner-entry {
    flex-direction: column;
    text-align: center;
  }

  .partner-logo {
    width: 100%; 
    height: 300px;
  }

  .listed-btn {
    width: 100%; 
    padding: 14px;
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .initiatives-header {
    font-size: 1.6rem; 
  }

  .initiatives-text {
    font-size: 1rem;
  }

  .partner-logo {
    width: 100%;
    height: 150px; 
  }

  .listed-btn {
    width: 100%;
    font-size: 1rem;
    padding: 10px;
  }
}
`;

export default Wrapper;