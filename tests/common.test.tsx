import * as React from 'react';
import { render } from '@testing-library/react';

import 'jest-canvas-mock';

import { KamaSample, KamaIcon, KamaButton, KamaBreadcrumb } from '../src';

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <>
        <KamaSample />
        <KamaIcon icon='clock' />
        <KamaButton>test</KamaButton>
        <KamaBreadcrumb sitemap={[]} pathname={'/'} />
      </>,
    );
  });
});
