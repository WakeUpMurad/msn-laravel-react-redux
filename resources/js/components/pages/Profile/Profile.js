import React, {useEffect, useState} from 'react';
import Loader from "../../UI/Loader/Loader";

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('');

    const profileId = location.pathname.substr(9);
    if(!userId){
        setUserId(profileId)
    }
    //Get User Profile.

    const getUserDetails = (id) => {
        axios.post('/get/individual/user/details', {
            userId: id
        }).then((response) => {
            console.log(response)
            setUserName(response.data.name)
            setUserEmail(response.data.email)
        });
    }

    //Life cycle method

    useEffect(() => {
        getUserDetails(userId);
        setIsLoading(false);
    },[])

    return (
        <div className="row justify-content-center">
            {isLoading
                ? <Loader/>
                : <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            User ID {userId}
                        </div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-md-8 offset-md-4">
                                    {userName}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-8 offset-md-4">
                                    {userEmail}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Profile;
