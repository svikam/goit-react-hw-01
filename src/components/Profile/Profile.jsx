import s from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={s.wrapper}>
            <div>
                <img className={s.image}
                    src={image}
                    alt="User avatar"
                />
                <p className={s.username}>{name}</p>
                <p className={s.usertag}>@{tag}</p>
                <p className={s.userloc}>{location}</p>
            </div>

            <ul className={s.list}>
                <li className={s.item}>
                <span className={s.info}>Followers</span>
                <span className={s.quant}>{stats.followers}</span>
                </li>
                <li className={s.item}>
                <span className={s.info}>Views</span>
                <span className={s.quant}>{stats.views}</span>
                </li>
                <li className={s.item}>
                <span className={s.info}>Likes</span>
                <span className={s.quant}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;