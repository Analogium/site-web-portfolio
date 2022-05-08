import React from 'react'
import backgroundVideo from '../../assets/backgroundVideo.mp4';
import './BackgroundVideo.scss';

const BackgroundVideo = () => {
  return (
    <video loop autoPlay muted disablePictureInPicture className="video">
        <source src={backgroundVideo} type="video/mp4"/>
    </video>
  )
}

export default BackgroundVideo