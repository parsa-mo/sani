import styled from "@emotion/styled";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background: #222121ff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ad9e75;
  font-size: 1rem;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #222121;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #222121;
  height: 150px;
  resize: vertical;
`;

const FormButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #1d1d1d;
  background-color: #ad9e75;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8c7a5a;
  }
  &:active {
    color: azure;
  }
`;

export {
  FormContainer,
  FormField,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
};
