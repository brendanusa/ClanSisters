import React from 'react';

const UserProfile = (props) => (
  <div>
    <div>
      <img src={props.user ? props.user.steamAvatarImageUrl : null} /><br />
      <a href={props.user ? props.user.steamProfileUrl : null}>{props.user ? props.user.steamScreenName : null}</a><br />
      {props.user ? props.user.steamRealName : null}
    </div>
  </div>
);

export default UserProfile;