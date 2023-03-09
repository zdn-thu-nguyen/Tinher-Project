import React from 'react'
import styles from './header.module.scss';
import Image from 'next/image';
import wifi from '../../../../public/image/welcome/Wi-Fi.png';
import wave from '../../../../public/image/welcome/CombinedShape.png';
import battery from '../../../../public/image/welcome/Battery.png';
type Props = {}

const HeaderWelcome = (props: Props) => {
    return (
        <section className={styles.welcome__header}>
            <p className={styles.header__right}>9:41</p>
            <div className={styles.header__left}>
                <Image src={wave} alt='wave' />
                <Image src={wifi} alt='wifi' />
                <Image src={battery} alt='battery' />
            </div>
        </section>
    )
}

export default HeaderWelcome