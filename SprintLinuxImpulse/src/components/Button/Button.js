import styled from 'styled-components';

export const Button = styled.button`
  background: #fff;
  background-color: ${(props) => (props?.primary ? 'palevioletred' : 'white')};
  border-radius: 4px;
  border: 2px solid #707070;
  color: gray;
  margin: 0.5em 2em;
  padding: 0.25em 1em;
  cursor: pointer;
  width: 170px;
  height: 40px;
  font-size: 15px;
`;
