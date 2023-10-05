import styled from '@emotion/styled';
import { Checkbox, Flex, Grid, Paper, Radio, Stack, Text, TextInput } from '@mantine/core';
import { IconUser, IconSearch } from '@tabler/icons-react';
import { useStore } from '../store';

export const Content = () => {
  const { theme } = useStore();
  const StyledContent = styled.main`
    width: calc(100% - 350px);
    margin-left: 350px;
    min-height: calc(100vh - 60px);
    transition: margin-left 0.3s ease-in-out;
    background-color: #c7c2c2;
    ${({ isOpen }: { isOpen: boolean }) =>
      isOpen &&
      `
    margin-left: 0;
    width: 100%;
  `}
    padding: 1rem;
    margin-top: 60px;
  `;
const TextInputConfig = theme.components.TextInput;

return (
    <StyledContent isOpen={false}>
      <Grid>
        <Grid.Col span={6}>
          <Paper p="sm">
            <Stack spacing="xs">
              <Text>Input Text</Text>
              <Flex gap="sm">
                <TextInput
                  placeholder="Input Text"
                  variant={
                  TextInputConfig.defaultProps.variant
                }
                />

                <TextInput placeholder="Input Text" disabled />
                <TextInput placeholder="Input Text" error />
              </Flex>
            </Stack>
            <Stack spacing="xs">
              <Text>Icons</Text>
              <Flex justify="space-between" gap="sm">
                <TextInput
                  placeholder="username"
                  variant="default"
                  icon={<IconUser stroke={1.5} size={14} />}
                />
                <TextInput
                  placeholder="Search"
                  rightSection={<IconSearch stroke={1.5} size={14} />}
                />
                <TextInput
                  placeholder="Search"
                  icon={<IconUser stroke={1.5} size={14} />}
                  rightSection={<IconSearch stroke={1.5} size={14} />}
                />
              </Flex>
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={6}>
          <Paper p="sm">
            <Stack spacing="xs">
              <Text>Radio Buttons</Text>
              <Flex gap="sm" justify="space-between">
                <Radio label="Option 1" />
                <Radio label="Option 2" />
                <Radio label="Option 3" />
              </Flex>
            </Stack>
            <Stack spacing="xs">
              <Text>Checkbox</Text>
              <Flex gap="sm" justify="space-between">
                <Checkbox label="Option 1" />
                <Checkbox label="Option 2" />
                <Checkbox label="Option 3" />
              </Flex>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </StyledContent>
  );
};
