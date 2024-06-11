import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBackground } from '../store';
import ImageUploading from 'react-images-uploading';

function SetBackgroundSetting() {
    const [images, setImages] = useState([]);
    const [background, setBackgroundState] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [alertFields, setAlertFields] = useState(false);
  
    const maxNumber = 1;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
  
  
    // pana aici
  
    const dispatch = useDispatch();
    const handleChange = (event) => {
      setAlertFields(false);
      setBackgroundState(event.target.value);
    };
  
    const isValidUrl = (string) => {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false; // if the URL constructor fails, it is not a valid URL
      }
    };
  
    const handleSubmit = () => {
      if (background && isValidUrl(background)) {
        dispatch(setBackground(background));
        setIsSuccess(true);
      } else if (images.length > 0 && images[0].data_url) {
        dispatch(setBackground(images[0].data_url));
        setIsSuccess(true);
      } else {
        setAlertFields(true);
      }
      
  
    };
  
    const clearBackgroundLink = () => {
      setBackgroundState('');
    };
  
    useEffect(() => {
      if (isSuccess) {
        setTimeout(() => {
          setIsSuccess(false);
        }, 1500);
      }
    }, [isSuccess]);
  
    useEffect(() => {
      if(images.length > 0 && images[0].data_url){
        setAlertFields(false);
      }
    }, [images, background]);
  
    useEffect(() => {
    
      if (background && !isValidUrl(background)) {
        setAlertFields(true);
      } else {
        setAlertFields(false);
      }
    }, [background]);

    return (
        <div className='setting nes-container is-dark'>
          <h3>Change Desktop Background</h3>
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <input value={background} onChange={handleChange} type="text" className={`nes-input is-dark ${alertFields ? 'is-error':""}`} placeholder="Background Link" />
            <button onClick={clearBackgroundLink} className='nes-btn is-error'>x</button>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ backgroundImage: `url(${background || images[0]?.data_url})` }} id="backgroundPreviewContainer" className="nes-container is-dark">
              {background || images[0]?.data_url ? '' : 'Preview...'}
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <button
                      className={`nes-btn ${alertFields ? 'is-error':""}`}
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Click or Drop here
                    </button>
                    &nbsp;

                    {imageList.map((image, index) => ( //map poate devine slideshow?
                      <div key={index} className="image-item">
                        {/* <img src={image['data_url']} alt="" width="100" /> */}
                        <div className="image-item__btn-wrapper">
                          <button onClick={() => onImageUpdate(index)}>Update</button>
                          <button onClick={() => onImageRemove(index)}>Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
              <button onClick={handleSubmit} type="button" className={`nes-btn ${isSuccess ? 'is-success':""}`}>Update Background</button>

            </div>
          </div>
        </div>
    );
}  

export default SetBackgroundSetting