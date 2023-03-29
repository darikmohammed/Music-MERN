import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  gap: 2rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: rgb(208, 133, 5);
    padding: 2rem;
    border-radius: 1rem;

    button {
      align-self: center;
      border-radius: 1rem;
      border: none;
      padding: 1rem 2rem;
      background-color: white;
      color: black;
    }
  }

  h1 {
    color: rgb(208, 133, 5);
    align-self: center;
  }

  input {
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 1px solid #ccc;
    color: black;
    background-color: white;
  }

  .row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;

export default Form;
