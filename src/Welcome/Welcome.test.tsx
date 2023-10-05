import { screen } from '@testing-library/react';
import { render } from '@test-utils';
import { Welcome } from './Welcome';

import '@testing-library/jest-dom/extend-expect'; // import the package and extend Jest's expect

it('displays welcome text', () => {
  render(<Welcome />);
  // @ts-expect-error
  expect(screen.getByText('Welcome to Mantine! V6')).toHaveTextContent('Welcome to Mantine! V6');
});
