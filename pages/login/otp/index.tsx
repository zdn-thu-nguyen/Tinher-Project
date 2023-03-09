import Button from '@/components/layout/button/button'
import Circle from '@/components/layout/welcome/loginPhone/circle/circle'
import HeaderLogin from '@/components/layout/welcome/loginPhone/headerLogin/headerLogin'
import { Keyboard } from '@/components/layout/welcome/loginPhone/keyboard/keyboard'
import React, { useState } from 'react'
import styles from './loginOtp.module.scss'
import loginOtp from '../../../public/image/loginPhone/loginOtp.png'
import Link from 'next/link'
type Props = {}

const LoginOtp = (props: Props) => {
    const [board, setBoard] = useState<string[]>(["", "", "", "", "", ""])
    return (
        <>
            <div className={`${styles.login__otp} container`}>
                <HeaderLogin title='Mã xác thực' desc='Vui lòng nhập mã OTP được gửi về số điện thoại của bạn, để hoàn thành đăng nhập.' image={loginOtp} />
                <section className={styles.otp__body}>
                    <div className={styles.body__input}>
                        <div className={styles.body__board}>
                            {
                                board.map((circle, index) => {
                                    return (
                                        <>
                                            <Circle value={circle} index={index} />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Link className={styles.otp__link} href={''}>Gửi lại OTP</Link>
                    <Button />
                </section>
            </div>
            <Keyboard />
        </>

    )
}

export default LoginOtp