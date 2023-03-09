import { Avatar } from "antd";
import Image from "next/image";
import userAvartar from "../../public/image/profile/users_avatar/user_header.png";
import logoutBtn from "../../public/image/profile/button/logout.png";
import profileStyle from "./profile.module.scss";
import ProfilePicture from "@/components/profile/profilePictures";
import UserDetails from "@/components/profile/userDetails";

const index = () => {
    return (
        <section className={profileStyle["profile__container"]}>
            <div className={profileStyle["profile__container--header"]}>
                <span>Tài khoản</span>
                <Image src={logoutBtn} alt="Logout Button" />
            </div>

            <div className={profileStyle["profile__container--summary"]}>
                <Avatar shape="square" size="large" icon={<Image src={userAvartar} alt="" />} />
                <div className={profileStyle["profile__container--summary__info"]}>
                    <h3 className={profileStyle["profile__container--summary__info--name"]}>Johny Toàn, 30t</h3>
                    <div className={profileStyle["profile__container--summary__info--purpose"]}>Muốn hẹn hò</div>
                </div>
            </div>

            <ProfilePicture />

            <UserDetails />
        </section>
    );
};

export default index;
