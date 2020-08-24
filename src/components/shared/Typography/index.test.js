import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Typography } from 'components/shared';
const href = 'http://mxstbr.com/';

describe('<h1 />', () => {
  it('should render a <h1>', () => {
    render(<Typography variante="h1">textH1</Typography>);
    expect(screen.getByText(/textH1/i, { selector: 'h1' }));
  });
});

describe('<h2 />', () => {
  it('should render a <h1>', () => {
    render(<Typography variante="h2">textH2</Typography>);
    expect(screen.getByText(/textH2/i, { selector: 'h2' }));
  });
});

describe('<h3 />', () => {
  it('should render a <h3>', () => {
    render(<Typography variante="h3">textH3</Typography>);
    expect(screen.getByText(/textH3/i, { selector: 'h3' }));
  });
});

describe('<a />', () => {
  it('should render a <a>', () => {
    render(
      <Typography href={href} variante="a">
        hyperlink
      </Typography>
    );
    expect(screen.getByText(/hyperlink/i, { selector: 'a' }));
  });
});

describe('<p />', () => {
  it('should render a <p>', () => {
    render(<Typography>paragraphe</Typography>);
    expect(screen.getByText(/paragraphe/i, { selector: 'p' }));
  });
});
