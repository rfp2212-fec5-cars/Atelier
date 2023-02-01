import React, {useState} from 'react';
import Modal from './Modal/Modal';

var AddReview = ()=>{
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>ADD A REVIEW +</button>
      <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
        <p>This is modal body</p>
      </Modal>
    </div>
  );
};

export default AddReview;