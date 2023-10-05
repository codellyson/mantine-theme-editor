import styled from '@emotion/styled';
import { ActionIcon, Alert, Group, Radio, Stack } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';
import { useStore } from '../store';

export const Sidebar = () => {
  const { theme, global, setGlobal, setTheme } = useStore();
  const StyledSidebar = styled.aside`
    position: absolute;
    top: 0;
    left: 0;
    width: 350px;
    height: 100%;
    background-color: #fff;
    color: #000;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); */
    border-right: 2px solid #000;
    transform: translateX(${({ isOpen }: { isOpen: boolean }) => (isOpen ? '0' : '-100%')});
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;
  const StyledH1 = styled.h1`
    margin: 0;
    font-size: 1.2rem;
  `;
  const StyledP = styled.h1`
    margin: 0;
    font-size: 0.875rem;
  `;

   return (
    <StyledSidebar isOpen>
      <Group>
        <StyledH1>Mantine Theme Editor</StyledH1>
        <ActionIcon>
          🗃️
        </ActionIcon>
      </Group>
      <Alert variant="outline">
        This Visual Editor is in legacy state, a new advanced UI based Theme Designer will be
        available in Q2 2023 with Full control over the Theming API of the whole component suite is
        planned for a new advanced UI-based Theme Designer, which will be available in Q2 2023.
        Until then, you can refer to the sass-theme for more customization options.
      </Alert>

      <Stack spacing={5}>
        <StyledP>Component Scale</StyledP>
        <Group noWrap>
        <ActionIcon>
          <IconMinus />
        </ActionIcon>
          <Radio.Group
            value={global.size}
            onChange={(value) => {
              setGlobal({
                ...global,
                size: value,
              });
            }}
          >
            <Group>
            <Radio
              size="xs"
              value="xs"
              checked={global.size === 'xs'}
            />
            <Radio
              size="sm"
              value="sm"
              checked={global.size === 'sm'}
            />
            <Radio
              size="md"
              value="md"
              checked={global.size === 'md'}
            />
            <Radio
              size="lg"
              value="lg"
              checked={global.size === 'lg'}
            />
            <Radio
              size="xl"
              value="xl"
              checked={global.size === 'xl'}
            />
            </Group>
          </Radio.Group>
          <ActionIcon>
          <IconPlus />
          </ActionIcon>
        </Group>
      </Stack>
      <Stack spacing={5}>
        <StyledP>
           Input Style
        </StyledP>
        <Group noWrap>
          <Radio.Group
            value={theme.components.TextInput.defaultProps.variant}
            onChange={(value) => {
              setTheme({
                ...theme,
                components: {
                  ...theme.components,
                  TextInput: {
                    ...theme.components.TextInput,
                    defaultProps: {
                      ...theme.components.TextInput.defaultProps,
                      variant: value,
                    },
                  },
                },
              });
            }}
          >
            <Group>
            <Radio
              value="filled"
              label="Filled"
              checked={theme.components.TextInput.defaultProps.variant === 'filled'}
            />
            <Radio
              value="default"
              label="Default"
              checked={theme.components.TextInput.defaultProps.variant === 'outline'}
            />
            </Group>
          </Radio.Group>
        </Group>
      </Stack>
      <Stack />
    </StyledSidebar>
  );
};
