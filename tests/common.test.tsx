import * as React from 'react';
import { render } from '@testing-library/react';

import 'jest-canvas-mock';

import { KamaSample } from '../src';
import { KamaIcon } from '../src';

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <>
        <KamaSample />
        <KamaIcon icon='clock' />
      </>,
    );
  });
});
