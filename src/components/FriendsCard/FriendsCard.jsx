export default function FriendListItem({friend: {
    name = 'Anonymous',
    avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    isOnline = false,
}}) {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{!isOnline ? 'Offline' : 'Online'}</p>
        </div>
    )
}