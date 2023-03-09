import React from 'react'
import HeaderWelcome from '../../header/header'
import styles from './headerLogin.module.scss'
import arrowRight from '../../../../../public/image/loginPhone/arrowRight.png'
import Image, { StaticImageData } from 'next/image'
type Props = {
    title: string;
    desc: string;
    image: StaticImageData;
}

const HeaderLogin = ({ title, desc, image }: Props) => {
    return (
        <header className={styles.phone__header}>
            <HeaderWelcome />
            <Image className={styles.header__arrow} src={arrowRight} alt='arrowRight' width={20} />
            <Image className={styles.body__image} src={image} alt='loginPhone' />
            <p className={styles.body__title}>{title}</p>
            <span className={styles.body__desc}>{desc}</span>
        </header>)
}

export default HeaderLogin