import React from 'react';
import UsersActionButtons from "./UsersActionButtons";

const UsersRow = ({id, name, email, followingUsersId, setFollowUser, setUnfollowUser}) => {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <UsersActionButtons userId={id} followingUsersId={followingUsersId} setFollowUser={setFollowUser}
                                    setUnfollowUser={setUnfollowUser}/>
            </td>
        </tr>
    );
};

export default UsersRow;
