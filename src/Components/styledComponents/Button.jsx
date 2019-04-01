import styled from 'styled-components/macro';

const Button = styled.button`
  background-color: ${({color = '#fefefe'}) => color};
  height: 50px;
  width: 100px;
  border-radius: 20px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export default Button;
