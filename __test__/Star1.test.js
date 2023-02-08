import TestRenderer from 'react-test-renderer';
import Star1 from '../client/src/components/RatingsReviews/Star1.jsx';

const testRenderer = TestRenderer.create(
  <Star1 rate = {0.6}></Star1>
);
describe('star1 testing', ()=>{
  it('should exists', ()=>{
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have 10 span stars', ()=>{
    const testInstance = testRenderer.root;
    expect(testInstance.findAll(node=>node.type === 'span')).toHaveLength(10);
  });

});