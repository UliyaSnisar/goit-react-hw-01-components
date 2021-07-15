import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({
  name,
  avatar,
  tag,
  location,
  stats: { followers, views, likes },
}) => (
  <div>
    <div>
      <img src={avatar} alt="avatar" />
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
    <ul>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }).isRequired,
  }),
};

export default Profile;
