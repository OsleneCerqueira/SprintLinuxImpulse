import styled from 'styled-components';

export const SectionOne = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: start;

`;

export const TextContainer = styled.section`
  margin-left: 3rem;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0px 20px;
  h2{
    font-size: 25px;
    color: #888888;
  }
  p{
    font-size: 15px;
    color: #888888;
    text-align:justify;
  }
`;

export const FormContainer = styled.form`
  width:50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  div{
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  section{
    margin-right:1rem;
    align-items: center;
    display:flex;
    justify-content: end;
    gap: 0.5rem;
  }

`;
