import React from 'react'
import styles from './keyboard.module.scss'
import union from '../../../../../public/image/loginPhone/Union.png'
import Image from 'next/image'
type Props = {}

export const Keyboard = (props: Props) => {
    const rows: string[] = ["1 2 3", "4 5 6", "7 8 9", "0"]
    return (
        <section className={styles.keyboard}>
            {
                rows.map((row, index) => {
                    return (
                        <div key={index} className={styles.keyboard__row}>
                            {row.split(" ").map((number, index) => (
                                <div key={index} className={styles.letter__row}>
                                    <div className={styles.keyboard__number}>
                                        {number}
                                    </div>
                                    {number === "0" && <span className={styles.keyboard__delete}><Image src={union} alt='delete' /></span>}
                                </div>
                            ))}
                        </div>
                    )
                })
            }
            <div className={styles.keyboard__line}></div>
        </section>
    )
}

