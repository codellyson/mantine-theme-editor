import { useState } from 'react';
import styled from '@emotion/styled';
import { Sidebar } from './side-bar';
import { Header } from './header';
import { Content } from './content';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
   

  `;

  return (
    <Wrapper>
      <Sidebar />
      <Header />
      <Content />
    </Wrapper>
  );
}
