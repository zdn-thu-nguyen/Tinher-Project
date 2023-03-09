import React from "react";
import { Col, Image, Row } from "antd";
import "./profilePicture.module.scss";
import profileStyle from "./profilePicture.module.scss";
import userAvatar from "../../../public/image/profile/users_avatar/Pic_avatar.png";
import userAvatar2 from "../../../public/image/profile/users_avatar/avatar_2.png";
import userAvatar3 from "../../../public/image/profile/users_avatar/avatar_3.png";
import userAvatar4 from "../../../public/image/profile/users_avatar/avatar_4.png";
import userAvatar5 from "../../../public/image/profile/users_avatar/avatar_5.png";

const ProfilePicture = () => {
    return (
        <div className={profileStyle["profile__picture"]}>
            <Row>
                <Col span={15}>
                    <Image width={225} src={userAvatar.src} alt="Avatar" />
                </Col>
                <Col span={8} offset={1}>
                    <Row>
                        <Col span={24}>
                            <Image width={110} src={userAvatar2.src} alt="Avatar" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Image width={110} src={userAvatar3.src} alt="Avatar" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    <Image width={110} src={userAvatar4.src} alt="Avatar" />
                </Col>
                <Col span={7} offset={1}>
                    <Image width={110} src={userAvatar5.src} alt="Avatar" />
                </Col>
                <Col span={7} offset={1}>
                    <Image width={110} src={""} alt="Avatar" />
                </Col>
            </Row>
        </div>
    );
};

export default ProfilePicture;
