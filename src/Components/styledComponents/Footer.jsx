import styled from 'styled-components/macro';

const Footer = styled.footer`
  background-color: ${({color = '#ffffffcb'}) => color};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Footer;
