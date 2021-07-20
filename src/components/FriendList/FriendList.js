import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  key: PropTypes.number.isRequired,
};

export default FriendList;
