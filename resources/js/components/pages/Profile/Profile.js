import React, {useEffect, useState} from 'react';
import Loader from "../../UI/Loader/Loader";
import userPhoto from "../../../../../public/images/user.png"
import github from "../../../../../public/images/github.png"
import instagram from "../../../../../public/images/instagram.png"
import linkedin from "../../../../../public/images/linkedin.png"
import telegram from "../../../../../public/images/telegram.png"

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
                : <div className="card p-3 py-4">

                    <div className="text-center">
                        <img src={userPhoto} width="100" className="rounded-circle"/>
                    </div>

                    <div className="text-center mt-3">
                        <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                        <h5 className="mt-2 mb-0">{userName}</h5>
                        <span>{userEmail}</span>

                        <div className="px-4 mt-1">
                            <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. </p>

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

                        <div className="buttons">

                            <button className="btn btn-outline-primary px-4">Message</button>
                            {followingUsersId && followingUsersId.some(id => id === profileId)
                                ? <button type="button" className="btn px-4 ms-3 btn-outline-danger"
                                          onClick={() => {unfollow(profileId)}}>Unfollow</button>
                                : <button type="button" className="btn px-4 ms-3 btn-outline-info"
                                          onClick={() => {follow(profileId)}}>Follow</button>
                            }
                        </div>

                    </div>


                </div>
            }
        </div>
    );
};

export default Profile;
