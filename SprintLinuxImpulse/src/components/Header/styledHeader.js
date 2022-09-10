import styled from 'styled-components';

export const HeaderStyle = styled.header`
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 70%);
    background: #707070;
    width: 100%;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:white;

h2{
    font-size: 30px;
    margin-top: 4rem;
}

p{
    font-size: 60px;
    margin-top: 2rem;
    opacity: 90%;
    font-weight: 600;
}

span{
    font-size: 17px;
    margin-top: 2rem;
    opacity: 90%;
}
`;

export const HeaderNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.1rem;
  margin: 1.3em 1em;
`;
