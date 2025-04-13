import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f4f4f9;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  justify-content: center;
  text-align: center;

  .dashboard-container {
    display: flex;
    min-height: 100vh;
  }
  
  .sidebar {
    width: 250px;
    background-color: #008080;
    padding-top: 20px;
    color: white;
  }
  
  .sidebar .logo {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .sidebar .sidebar-links {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar .sidebar-link {
    display: block;
    padding: 15px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    margin: 10px 0;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .sidebar .sidebar-link:hover {
    background-color: #34495e;
  }
  
  .dashboard-content {
    flex-grow: 1;
    width: 100%;
  }
  
  .tabs {
    display: flex;
    margin-bottom: 20px;
  }
  
  .tab-btn {
    padding: 10px 20px;
    margin-right: 20px;
    font-size: 18px;
    color: #34495e;
    text-decoration: none;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #ecf0f1;
  }
  
  .tab-btn.active {
    background-color: #3498db;
    color: white;
  }
  
  .tab-content {
    padding: 20px;
    background-color: #ecf0f1;
    border-radius: 5px;
  }


    .form-control {
    width: 30rem;
    margin-left: 25rem;
    margin-top: 20px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    .sidebar {
      width: 200px;  
    }

    .form-control {
      width: 90%; 
      margin-left: 5%; 
    }

    .dashboard-container {
      flex-direction: column;  
    }

    .tabs {
      flex-direction: column;  
    }

    .tab-btn {
      margin-right: 0;
      width: 100%;  
    }

    .sidebar .sidebar-link {
      font-size: 16px; 
    }
  }

  @media (max-width: 480px) {
    .sidebar {
      width: 100%;  
      height: auto;  
      padding-top: 10px;
    }

    .form-control {
      width: 100%;  
      margin-left: 0;  
    }

    .tabs {
      display: block;  
    }

    .tab-btn {
      width: 100%;  
      margin-bottom: 10px;  
    }

    .sidebar .sidebar-link {
      font-size: 14px; 
    }
  }
  `;

export default Wrapper;