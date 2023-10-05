import styled from '@emotion/styled';
import { Anchor, Flex, Text } from '@mantine/core';

export const Header = () => {
  const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100%; */
    height: 60px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin-left: 350px;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    width: calc(100% - 350px);
  `;

  return (
    <StyledHeader>
      <Flex
        justify="space-between"
        sx={{
          width: '100%',
        }}
      >
        <Text>Mantine Theme Editor v.1.0.0</Text>
        <Anchor>Documentation</Anchor>
      </Flex>
    </StyledHeader>
  );
};
