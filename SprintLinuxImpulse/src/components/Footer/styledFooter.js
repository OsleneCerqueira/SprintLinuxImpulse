import styled from 'styled-components';

export const FooterStyle = styled.footer`
  clip-path: polygon(0 25%, 100% 0, 100% 100%, 0 100%);
  width: 100%;
  height: 270px;
  background: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;

  p{
    width: 25%;
    text-align: center;
    color: white;
    margin-top: 0.2rem;
    line-height: 1.7rem;
    font-size: 17px;
  }
`;
