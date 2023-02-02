import renderer from 'react-test-renderer';
import ReviewPhoto from '../ReviewPhoto.jsx';

it('changes the img size when clicked', ()=>{
  const componet = renderer.create(
    <ReviewPhoto photo={
      {id: 1235561, url: 'https://images.unsplash.com/photo-1515992854631-13…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'}}></ReviewPhoto>
  );
  let tree = componet.toJSON();
  expect(tree).toMatchSnapshot();

});