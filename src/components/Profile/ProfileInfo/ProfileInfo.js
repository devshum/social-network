import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => (
    
      

      <div>
        <img className={classes.imgCover} src="https://i.pinimg.com/originals/f1/48/cb/f148cbe61f00c99db47e9e232f21b29f.png" alt="img"/>

        <div className={classes.descriptionBlock}>
          <img className={classes.imgUser} src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg"   alt="img"/>
          
          <div>Content</div>
        </div>
      </div>
  

);

export default ProfileInfo;