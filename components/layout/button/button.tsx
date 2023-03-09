import React from 'react'
import Image from 'next/image'
import arrow from '../../../public/image/button/arrow.png'
import styles from './button.module.scss'
type Props = {}

const Button = (props: Props) => {
    return (
        <section className={styles.button}>
            <p className={styles.button__text}>Xác thực</p>
            <Image src={arrow} alt='arrow' />
        </section>
    )
}

export default Button
