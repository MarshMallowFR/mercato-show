import { describe, it } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import '@testing-library/jest-dom/extend-expect';
import Card from '@/components/Card.vue';

const renderComponent = (props?: any): RenderResult => {
  return render(Card, {
    ...props,
  });
};

const testIds = [
  'card-avatar',
  'card-name',
  'card-verif',
  'card-alias',
  'card-time',
  'card-text',
];

describe('Card', () => {
  it('Should render component', () => {
    renderComponent();
  });
  it('Should render main informations', () => {
    const { getByTestId } = renderComponent();
    for (const id of testIds) {
      const element = getByTestId(id);
      expect(element).toBeInTheDocument();
    }
  });
});
