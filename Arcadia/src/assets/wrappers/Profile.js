import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FileInput = styled.input`
  padding: 8px;
  font-size: 1rem;
`;

export const AvatarPreview = styled.img`
  margin-top: 10px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color:rgb(56, 121, 58);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgb(65, 142, 67);
  }
`;

export const LoadingText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;