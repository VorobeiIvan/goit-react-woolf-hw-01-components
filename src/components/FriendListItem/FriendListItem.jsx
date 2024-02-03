const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item-friend-list">
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img
        className="avatar-friend-list"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name-friend-list">{name}</p>
    </li>
  );
};
export default FriendListItem;
