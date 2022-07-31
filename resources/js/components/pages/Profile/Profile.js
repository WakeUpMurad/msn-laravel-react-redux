import React, {useEffect, useState} from 'react';
import Loader from "../../UI/Loader/Loader";
import userPhoto from "../../../../../public/assets/user.png"
import profileBackground from "../../../../../public/assets/profileBack.jpeg"
import github from "../../../../../public/assets/github.png"
import instagram from "../../../../../public/assets/instagram.png"
import linkedin from "../../../../../public/assets/linkedin.png"
import telegram from "../../../../../public/assets/telegram.png"

const Profile = ({authUserId, followingUsersId, follow, unfollow}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('');
    let profileId = location.pathname.substr(9);

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
        if(profileId.length > 1) {
            getUserDetails(profileId)
        } else {
            profileId = `${authUserId}`;
            getUserDetails(authUserId)
        }
        setIsLoading(false);
    },[])

    return (
        <div className="row justify-content-center">
            {isLoading
                ? <Loader/>
                : <div className="col-md-8">
                    <div className="card"><img className="card-img-top" src={profileBackground}
                                               alt="Card image cap" />
                        <div className="card-body little-profile text-center">
                            <div className="pro-img"><img src={userPhoto} alt="user"/></div>
                            <h3 className="m-b-0">{userName}</h3>
                            <p>{userEmail}</p>
                            <div className="buttons">
                                <button className="btn btn-outline-primary px-4">Message</button>
                                {followingUsersId && followingUsersId.some(id => id === profileId)
                                    ? <button type="button" className="btn px-4 ms-3 btn-outline-danger"
                                              onClick={() => {
                                                  unfollow(profileId)
                                              }}>Unfollow</button>
                                    : <button type="button" className="btn px-4 ms-3 btn-outline-info"
                                              onClick={() => {
                                                  follow(profileId)
                                              }}>Follow</button>
                                }
                            </div>
                            <ul className="d-flex justify-content-center list-unstyled  mt-2 mb-3">
                                <li className="ms-3">
                                    <a href="https://www.instagram.com/murad.savage"
                                       className="mb-0 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                        <img width="30" height="30" src={instagram} alt="img"/>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a href="https://web.telegram.org/murad_savage"
                                       className="mb-0 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                        <img width="30" height="30" src={telegram} alt="img"/>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a href="https://www.linkedin.com/in/murad-gakhramanov"
                                       className="mb-0 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                        <img width="30" height="30" src={linkedin} alt="img"/>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a href="https://github.com/WakeUpMurad"
                                       className="mb-0 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                        <img width="30" height="30" src={github} alt="img"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Profile;
