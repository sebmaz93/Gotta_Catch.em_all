import styled from 'styled-components/macro';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({direction = 'row'}) => direction};
  justify-content: ${({justify = 'center'}) => justify};
  align-items: ${({align = 'center'}) => align};
  flex-wrap: wrap;
`;
