import { MantineSizes, MantineThemeOverride } from '@mantine/core';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ThemeState {
  global: {
    size: keyof MantineSizes;
  };
  setGlobal: (global: { size: keyof MantineSizes }) => void;
  theme: MantineThemeOverride;
  setTheme: (theme: MantineThemeOverride) => void;
}

const useThemeStore = create<ThemeState>(
  // persist(
  (set) => ({
    global: {
      size: 'xs',
    },
    theme: {
      colorScheme: 'light',
      primaryColor: 'yellow',
      shadows: {
        md: '1px 1px 3px rgba(0, 0, 0, .25)',
        xl: '5px 5px 3px rgba(0, 0, 0, .25)',
      },

      headings: {
        fontFamily: 'Roboto, sans-serif',
        sizes: {
          h1: { fontSize: '2rem' },
        },
      },
      components: {
        Button: {
          defaultProps: {
            variant: 'outline',
          },

          // variants: {

          // },
          // sizes: {
          //   xs: {
          //     radius: 'sm',
          //   },
          // },
        },
        TextInput: {
          defaultProps: {
            // radius: 'sm',
            size: 'sm',
            variant: 'default',
          },
        },
        Textarea: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Select: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Checkbox: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Radio: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Switch: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Slider: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Tabs: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Accordion: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Menu: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Modal: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Drawer: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Tooltip: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Popover: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Notification: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        Group: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        RingProgress: {
          defaultProps: {
            radius: 'sm',
            variant: 'filled',
          },
        },
        LoadingOverlay: {
          defaultProps: {
            radius: 'sm',
          },
        },
      },

      // globalStyles(theme) {
      //   return {
      //     size
      //   }
      // },
    },
    setTheme: (theme) => set({ theme }),
    setGlobal: (global) => set({ global }),
  })
  // {
  //   name: 'theme-storage',
  //   storage: createJSONStorage(() => localStorage),
  // }
  // )
);

export const useStore = () => useThemeStore();
