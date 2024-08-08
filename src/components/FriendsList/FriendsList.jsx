import FriendListItem from "../FriendsCard/FriendsCard";

export default function FriendsList({ friends }) {
    return (
        <ul>
            {friends.map(item => {
                return (
                    <li key={item.id}>
                        <FriendListItem friend={item} />
                    </li>
                );
            })}
        </ul>
    );
}