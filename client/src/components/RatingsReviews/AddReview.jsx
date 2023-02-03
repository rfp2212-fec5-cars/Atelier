import React, { useState } from 'react';
import Modal from './Modal/Modal';
import SetRatingStar from './SetRatingStar.jsx';

var AddReview = ({ productName, productId }) => {
  const [show, setShow] = useState(false);
  const [hint, setHint] = useState('');

  const addReviewData = {
    'product_id': productId,
    'rating': 0,
    'summary': '',
    'body': '',
    'recommend': '',
    'name': '',
    'email': '',
    'photos': [],
    'characteristics': {}
  };

  //flag indicate whether user choose the rating, if rating, will invoke RatingScore function
  let ratingFlag = false;
  const RatingScore = (score) => {
    ratingFlag = true;
    addReviewData.rating = score;
  };
  const checkRecommend = () => {
    if (document.getElementById('recommend-yes').checked) {
      addReviewData.recommend = true;
      return true;
    } else if (document.getElementById('recommend-no').checked) {
      addReviewData.recommend = false;
      return true;
    } else {
      alert('please select recommend or not');
      return false;
    }
  };
  const checkCharacter = () => {
    let size = document.querySelector('input[name="size"]:checked');
    let width = document.querySelector('input[name="width"]:checked');
    let comfort = document.querySelector('input[name="comfort"]:checked');
    let quality = document.querySelector('input[name="quality"]:checked');
    let fit = document.querySelector('input[name="fit"]:checked');
    if (size === null || width === null || comfort === null || quality === null || fit === null) {
      alert('Please rate all the product characteristics');
      return false;
    }
    addReviewData.characteristics['size'] = size.value[size.value.length - 1];
    addReviewData.characteristics['width'] = width.value[width.value.length - 1];
    addReviewData.characteristics['comfort'] = comfort.value[comfort.value.length - 1];
    addReviewData.characteristics['quality'] = quality.value[quality.value.length - 1];
    addReviewData.characteristics['fit'] = fit.value[fit.value.length - 1];
    console.log('addreviewdata', addReviewData);
  };

  let reviewbodyFlag = false;
  const checkTextLength = () => {
    let cur = document.getElementById('set-review-body').value;
    console.log('textarea cur', cur);
    if (cur.length > 50) {
      reviewbodyFlag = true;
    }
    if (cur.length < 50) {
      setHint('Minimum required characters left:' + (50 - cur.length));
    } else if (cur.length >= 50) {
      setHint('Minimum reached');
    }
  };

  const handleUploadPhoto = ()=>{

  };

  const check = () => {
    if (!ratingFlag) {
      alert('please select the overall rating');
      return;
    }
    if (!checkRecommend() || !checkCharacter()) {
      return;
    }
    if (reviewbodyFlag) {
      alert('please input your review body');
      return;
    }

  };
  //          <input type='submit' value='Submit review' onClick={check} />

  return (
    <div>
      <button onClick={() => setShow(true)}>ADD A REVIEW +</button>
      <Modal title="Write Your Review" onClose={() => setShow(false)} show={show}>
        <form id='reviewform'>
          <span>About the {productName}</span>
          <div>
            <span>Overall rating*</span>
            <SetRatingStar value={0} RatingScore={RatingScore} />
          </div>
          <div>
            <span>Do you recommend this product?*</span>
            <input type='radio' id='recommend-yes' name='recommend' /><label htmlFor='recommend-yes'>Yes</label>
            <input type='radio' id='recommend-no' name='recommend' /><label htmlFor='recommend-no'>no</label>
          </div>
          <div>
            <div id='text-character'>Characteristics*</div>
            <div id='product-character'>
              <div>
                <span>Size</span>
                <input type='radio' id='size-1' name='size' value='size1' />A size too small
                <input type='radio' id='size-2' name='size' value='size2' />½ a size too small
                <input type='radio' id='size-3' name='size' value='size3' />Perfect
                <input type='radio' id='size-4' name='size' value='size4' />½ a size too big
                <input type='radio' id='size-5' name='size' value='size5' />½ a size too wide
              </div>
              <div>
                <span>Width</span>
                <input type='radio' id='width-1' name='width' value='width1' />Too narrow
                <input type='radio' id='width-2' name='width' value='width2' />Slightly narrow
                <input type='radio' id='width-3' name='width' value='width3' />Perfect
                <input type='radio' id='width-4' name='width' value='width4' />Slightly wide
                <input type='radio' id='width-5' name='width' value='width5' />Too wide
              </div>
              <div>
                <span>Comfort</span>
                <input type='radio' id='comfort-1' name='comfort' value='comfort1' />Uncomfortable
                <input type='radio' id='comfort-2' name='comfort' value='comfort2' />Slightly Uncomfortable
                <input type='radio' id='comfort-3' name='comfort' value='comfort3' />Ok
                <input type='radio' id='comfort-4' name='comfort' value='comfort4' />Comfortable
                <input type='radio' id='comfort-5' name='comfort' value='comfort5' />Perfect
              </div>
              <div>
                <span>Quality</span>
                <input type='radio' name='quality' value='quality1' />Poor
                <input type='radio' name='quality' value='quality2' />Below average
                <input type='radio' name='quality' value='quality3' />What I expected
                <input type='radio' name='quality' value='quality4' />Pretty great
                <input type='radio' name='quality' value='quality5' />Perfect
              </div>
              <div>
                <span>Length</span>
                <input type='radio' name='length' value='length1' />Run Short
                <input type='radio' name='length' value='length2' />Runs Slightly short
                <input type='radio' name='length' value='length3' />Perfect
                <input type='radio' name='length' value='length5' />Runs Slightly long
                <input type='radio' name='length' value='length5' />Runs long
              </div>
              <div>
                <span>Fit</span>
                <input type='radio' name='fit' value='length1' />Run tight
                <input type='radio' name='fit' value='length2' />Runs Slightly tight
                <input type='radio' name='fit' value='length3' />Perfect
                <input type='radio' name='fit' value='length4' />Runs Slightly long
                <input type='radio' name='fit' value='length5' />Runs long
              </div>
            </div>
          </div>
          <div>
            <span>Review summary</span>
            <input type='text' id='set-review-summary' placeholder='Example: Best purchase ever!' style={{ width: '500px' }} maxLength='60' />
          </div>
          <div>
            <span>Review body*</span>
            <textarea id='set-review-body' placeholder='Why did you like the product or not?' rows='5' cols='60' onChange={checkTextLength} maxLength='1000' />
            <div>{hint}</div>
          </div>
          <button onClick = {handleUploadPhoto}>Upload your photos</button>
          <div>
            <span>What is your nickname*</span>
            <input type='text' id='set-nickname' placeholder='Example: jackson11!' />
            <div>
              <small><i>For privacy reasons, do not use your full name or email address</i></small>
            </div>
          </div>
          <div>
            <span>Your email*</span>
            <input type='email' id='set-email' placeholder='Example: jackson11@email.com' />
            <div>
              <small><i>For authentication reasons, you will not be emailed</i></small>
            </div>
          </div>
          <span onClick={check}>click</span>

        </form>
      </Modal>
    </div>
  );
};

export default AddReview;