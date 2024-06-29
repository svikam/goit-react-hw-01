import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendlist}>
            {friends.map(friend => (
                <li className={s.fritem} key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name} 
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
}

export default FriendList;

