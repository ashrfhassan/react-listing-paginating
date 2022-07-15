import renderer from 'react-test-renderer';
import Grid from '@components/contentLoader/grid';

it('renders component', () => {
  const component = renderer.create(<Grid />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
