import React from 'react';
import UsersActionButtons from "./UsersActionButtons";

const UsersRow = ({id, name, email, followingUsersId, followUser, unfollowUser}) => {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <UsersActionButtons userId={id} followingUsersId={followingUsersId} followUser={followUser}
                                    unfollowUser={unfollowUser}/>
            </td>
        </tr>
    );
};

export default UsersRow;
