import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const TabButton = styled.button`
  background-color: ${(props) => (props.$isActive ? '#008080' : '#f1f1f1')};
  color: ${(props) => (props.$isActive ? '#fff' : '#000')};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.75rem;
  }
`;

export const ContentArea = styled.div`
  margin-top: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    padding: 0.75rem;
    border-bottom: 1px solid #ccc;
    text-align: left;
    font-size: 1rem;

    @media (max-width: 768px) {
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }

  select {
    width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;

    th,
    td {
      display: block;
      width: 100%;
    }

    tr {
      margin-bottom: 1rem;
      display: block;
      border-bottom: 2px solid #eee;
    }

    thead {
      display: none;
    }
  }
`;

export const ActionCell = styled.td`
  min-width: 80px;
  height: 40px;
  text-align: center;
  vertical-align: middle;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.select`
  padding: 0.4rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const SaveButton = styled.button`
  padding: 0.4rem 0.75rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.35rem 0.6rem;
  }
`;