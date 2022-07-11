import React from 'react';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({...props}) => {
    return (
        <div>
            <div>
                <img src={profile.photos.large || userPhoto} alt='img'/>
                {isOwner && <input type='file'/>}

                <ProfileStatus status={status} updateStatus={updateStatus} setStatus={setStatus}/>
            </div>
            <div className="profileFullName">
                {profile.fullName}
            </div>
            <div className='aboutMe'>
                {profile.aboutMe}
            </div>
            <div className='contacts'>
            </div>

        </div>
    );
};

export default ProfileInfo;
