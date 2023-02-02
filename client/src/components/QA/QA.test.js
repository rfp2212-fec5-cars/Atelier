import renderer from 'react-test-renderer';
import Search from './Search.jsx';

it('should render the search component in the Q&A section', () => {
  const tree = renderer
    .create(<Search />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})