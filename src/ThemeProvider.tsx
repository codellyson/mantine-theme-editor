import { MantineProvider } from '@mantine/core';
import React from 'react';
import { useStore } from './store';

// export const _theme: MantineThemeOverride = {
//   colorScheme: 'dark',
//   primaryColor: 'violet',
//   components: {
//     // @ts-ignore
//     ActionIcon: {
//        defaultProps(theme) {
//         return {
//           color: theme.colors.dark[0],
//           variant: 'filled',
//         };
//        },
//     },

//   },
// };

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useStore();
  console.log(theme);
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  );
}
