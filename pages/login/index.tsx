import HeaderLogin from '@/components/layout/welcome/loginPhone/headerLogin/headerLogin'
import React from 'react'
import styles from './login.module.scss'
import Image from 'next/image'
import Button from '@/components/layout/button/button'
import flag from '../../public/image/loginPhone/vietnam.png'
import loginPhone from '../../public/image/loginPhone/loginPhone.png'
import { Keyboard } from '@/components/layout/welcome/loginPhone/keyboard/keyboard'

type Props = {}

const index = (props: Props) => {
    return (
        <>
            <div className={`${styles.login__phone} container`}>
                <HeaderLogin title='Nhập số điện thoại để tiếp tục' desc='Vui lòng nhập số điện thoại để đăng nhập và mua sắm tại CLM' image={loginPhone} />
                <section className={styles.phone__body}>
                    <div className={styles.body__input}>
                        <Image src={flag} alt='flag' />
                        <input placeholder='Nhập số điện thoại' type="text" />
                    </div>
                    <Button />
                </section>
            </div>
            <Keyboard />
        </>)
}

export default index