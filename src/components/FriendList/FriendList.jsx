import changeColor from '../changeColor';

const FriendList = ({ friends }) => {
  if (!friends) {
    return null;
  }

  return (
    <section className="friend-list-section">
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className="item-friend-list" key={id}>
            <span
              className="online-status"
              style={{ color: changeColor(isOnline) }}
            >
              {isOnline ? 'Online' : 'Offline'}
            </span>
            <span className="status-friend-list">{isOnline}</span>
            <img
              className="avatar-friend-list"
              src={avatar}
              alt={name}
              width="48"
            />
            <p className="name-friend-list">{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FriendList;
