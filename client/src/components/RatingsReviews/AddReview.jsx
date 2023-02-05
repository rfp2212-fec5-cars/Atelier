import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import SetRatingStar from './SetRatingStar.jsx';
import axios from 'axios';

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
    addReviewData.rating = parseInt(score);
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
    let length = document.querySelector('input[name="length"]:checked');
    let fit = document.querySelector('input[name="fit"]:checked');

    if (size === null || width === null || comfort === null || quality === null || fit === null) {
      alert('Please rate all the product characteristics');
      return false;
    }
    addReviewData.characteristics['13141'] = parseInt(size.value[size.value.length - 1]);
    addReviewData.characteristics['13142'] = parseInt(width.value[width.value.length - 1]);
    addReviewData.characteristics['13143'] = parseInt(comfort.value[comfort.value.length - 1]);
    addReviewData.characteristics['13144'] = parseInt(quality.value[quality.value.length - 1]);
    addReviewData.characteristics['13145'] = parseInt(length.value[length.value.length - 1]);
    addReviewData.characteristics['13146'] = parseInt(fit.value[fit.value.length - 1]);
    return true;
    //console.log('addreviewdata', addReviewData);
  };

  let reviewbodyFlag = false;
  const checkTextLength = () => {
    let cur = document.getElementById('set-review-body').value;
    //console.log('textarea cur', cur);
    if (cur.length > 50) {
      reviewbodyFlag = true;
      addReviewData.body = cur;
    }
    if (cur.length < 50) {
      setHint('Minimum required characters left:' + (50 - cur.length));
    } else if (cur.length >= 50) {
      setHint('Minimum reached');
    }
  };

  const handleUploadPhoto = () => {
    var fileElem = document.getElementById('fileElem');
    var fileList = document.getElementById('fileList');
    //console.log('fileElem', fileElem.value);
    if (fileElem.files.length > 5) {
      fileElem.value = '';
      alert('please upload at most 5 photos');
      return;
    }
    //push all the img to the fileList
    for (let i = 0; i < fileElem.files.length; i++) {
      var img = new Image(100, 100);
      img.src = window.URL.createObjectURL(fileElem.files[i]);
      img.style = 'margin-left : 10px';
      img.onLoad = function (e) {
        window.URL.revokeObjectURL(this.src);
      };
      fileList.appendChild(img);
    }
    //console.log('fileList', fileList);

    //assign addReviewData
    let imgTag = fileList.getElementsByTagName('img');
    //reset photos,if not, when user choose files twice,will push the first chosen twice.
    addReviewData.photos = [];
    for (let i = 0; i < imgTag.length; i++) {
      addReviewData.photos.push(imgTag[i].src);
    }
    //console.log('addReviewData photo', addReviewData.photos);
  };



  const check = (e) => {
    if (!ratingFlag) {
      alert('please select the overall rating');
      e.preventDefault();
      return;
    }
    if (!checkRecommend() || !checkCharacter()) {
      e.preventDefault();
      return;
    }
    addReviewData.summary = document.getElementById('set-review-summary').value;
    if (!reviewbodyFlag) {
      alert('please input your review body');
      e.preventDefault();
      return;
    }
    let username = document.getElementById('set-nickname').value;
    if (username === '') {
      alert('please input your nickname');
      e.preventDefault();
      return;
    } else {
      addReviewData.name = username;
    }
    let email = document.getElementById('set-email').value;
    if (email === '') {
      alert('please input your email');
      e.preventDefault();
      return;
    } else {
      addReviewData.email = email;
    }
    axios.post('/reviews', addReviewData)
      .then((results) => {
        console.log('results', results);
      }).catch((err) => {
        console.error('add new review err', err.message);
      });
  };

  return (
    <div>
      <button id='add-a-review' onClick={() => setShow(true)}>ADD A REVIEW +</button>
      <Modal title="Write Your Review" onClose={() => setShow(false)} show={show}>
        <form id='reviewform' onSubmit={check}>
          <span>About the {productName}</span>
          <div>
            <div className='formItem'>Overall rating*</div>
            <SetRatingStar value={0} RatingScore={RatingScore} />
          </div>
          <div>
            <div className='formItem'>Do you recommend this product?*</div>
            <input type='radio' id='recommend-yes' name='recommend' /><label htmlFor='recommend-yes'>Yes</label>
            <input type='radio' id='recommend-no' name='recommend' /><label htmlFor='recommend-no'>No</label>
          </div>
          <div>
            <div>Characteristics*</div>
            <div>
              <div>
                <div className='formItem'>Size</div>
                <input type='radio' id='size-1' name='size' value='size1' />A size too small
                <input type='radio' id='size-2' name='size' value='size2' />½ a size too small
                <input type='radio' id='size-3' name='size' value='size3' />Perfect
                <input type='radio' id='size-4' name='size' value='size4' />½ a size too big
                <input type='radio' id='size-5' name='size' value='size5' />½ a size too wide
              </div>
              <div>
                <div className='formItem'>Width</div>
                <input type='radio' id='width-1' name='width' value='width1' />Too narrow
                <input type='radio' id='width-2' name='width' value='width2' />Slightly narrow
                <input type='radio' id='width-3' name='width' value='width3' />Perfect
                <input type='radio' id='width-4' name='width' value='width4' />Slightly wide
                <input type='radio' id='width-5' name='width' value='width5' />Too wide
              </div>
              <div>
                <div className='formItem'>Comfort</div>
                <input type='radio' id='comfort-1' name='comfort' value='comfort1' />Uncomfortable
                <input type='radio' id='comfort-2' name='comfort' value='comfort2' />Slightly Uncomfortable
                <input type='radio' id='comfort-3' name='comfort' value='comfort3' />Ok
                <input type='radio' id='comfort-4' name='comfort' value='comfort4' />Comfortable
                <input type='radio' id='comfort-5' name='comfort' value='comfort5' />Perfect
              </div>
              <div>
                <div className='formItem'>Quality</div>
                <input type='radio' name='quality' value='quality1' />Poor
                <input type='radio' name='quality' value='quality2' />Below average
                <input type='radio' name='quality' value='quality3' />What I expected
                <input type='radio' name='quality' value='quality4' />Pretty great
                <input type='radio' name='quality' value='quality5' />Perfect
              </div>
              <div>
                <div className='formItem'>Length</div>
                <input type='radio' name='length' value='length1' />Run Short
                <input type='radio' name='length' value='length2' />Runs Slightly short
                <input type='radio' name='length' value='length3' />Perfect
                <input type='radio' name='length' value='length5' />Runs Slightly long
                <input type='radio' name='length' value='length5' />Runs long
              </div>
              <div>
                <div className='formItem'>Fit</div>
                <input type='radio' name='fit' value='length1' />Run tight
                <input type='radio' name='fit' value='length2' />Runs Slightly tight
                <input type='radio' name='fit' value='length3' />Perfect
                <input type='radio' name='fit' value='length4' />Runs Slightly long
                <input type='radio' name='fit' value='length5' />Runs long
              </div>
            </div>
          </div>
          <div>
            <div className='formItem'>Review summary</div>
            <input type='text' id='set-review-summary' placeholder='Example: Best purchase ever!' style={{ width: '480px' }} maxLength='60' />
          </div>
          <div>
            <div className='formItem'>Review body*</div>
            <textarea id='set-review-body' placeholder='Why did you like the product or not?' rows='5' cols='58' onChange={checkTextLength} maxLength='1000' />
            <div className='privacy-hint'><small><i>{hint}</i></small></div>
          </div>
          <div>
            <div className='formItem'>Upload your photo</div>
            <input type='file' id='fileElem' multiple='multiple' accept='image/*' onChange={handleUploadPhoto} />
            <div id='fileList'></div>
          </div>
          <div>
            <div className='formItem'>What is your nickname*</div>
            <input type='text' id='set-nickname' placeholder='Example: jackson11!' maxLength='60' style={{ width: '480px' }} />
            <div className='privacy-hint'>
              <small><i>For privacy reasons, do not use your full name or email address</i></small>
            </div>
          </div>
          <div>
            <div className='formItem'>Your email*</div>
            <input type='email' id='set-email' placeholder='Example: jackson11@email.com' style={{ width: '480px' }} />
            <div className='privacy-hint'>
              <small><i>For authentication reasons, you will not be emailed</i></small>
            </div>
          </div>
          <button id='submit-button'>Submit</button>

        </form>
      </Modal>
    </div>
  );
};

export default AddReview;