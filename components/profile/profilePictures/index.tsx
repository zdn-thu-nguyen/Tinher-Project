import React from "react";
import { Col, Image, Row } from "antd";
import profileStyle from "./profilePicture.module.scss";
import userAvatar from "../../../public/image/profile/users_avatar/Pic_avatar.png";
import userAvatar2 from "../../../public/image/profile/users_avatar/avatar_2.png";
import userAvatar3 from "../../../public/image/profile/users_avatar/avatar_3.png";
import userAvatar4 from "../../../public/image/profile/users_avatar/avatar_4.png";
import userAvatar5 from "../../../public/image/profile/users_avatar/avatar_5.png";

const ProfilePicture = () => {
    return (
        <div className={profileStyle["profile__picture"]}>
            <Row gutter={[10, 10]}>
                <Col span={16}>
                    <Image src={userAvatar.src} alt="" />
                </Col>

                <Col span={8}>
                    <Row gutter={[10, 10]}>
                        <Col span={24}>
                            <Image src={userAvatar2.src} alt="" />
                        </Col>
                        <Col span={24}>
                            <Image src={userAvatar3.src} alt="" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div style={{ marginTop: "0.625rem" }}></div>

            <Row gutter={[10, 10]}>
                <Col span={8}>
                    <Image src={userAvatar4.src} alt="" />
                </Col>
                <Col span={8}>
                    <div className={profileStyle["image-container"]}>
                        <Image src={userAvatar5.src} alt="" />
                        <div className={profileStyle["overlay"]}>
                            <div className={profileStyle["add-icon"]}>+3</div>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={profileStyle["image-container"]}>
                        <div className={profileStyle["overlay"]}>
                            <div className={profileStyle["add-icon"]}>+</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProfilePicture;
