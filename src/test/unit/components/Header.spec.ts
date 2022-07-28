import { describe, it } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import '@testing-library/jest-dom/extend-expect';
import Header from '@/components/Header.vue';

const renderComponent = (props?: any): RenderResult => {
  return render(Header, {
    ...props,
  });
};

describe('Header.vue', () => {
  it('Should render the component', () => {
    renderComponent();
  });
  it('Should render the title', () => {
    const { getByTestId } = renderComponent();
    const titleEl = getByTestId('header-title');
    expect(titleEl).toBeInTheDocument();
  });
  it('Should render the description', () => {
    const { getByTestId } = renderComponent();
    const descriptionEl = getByTestId('header-description');
    expect(descriptionEl).toBeInTheDocument();
  });
});
