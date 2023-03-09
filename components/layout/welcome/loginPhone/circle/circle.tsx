import React from 'react'
import styles from './circle.module.scss'
type Props = {
    value: string,
    index: number
}

const Circle = ({ value, index }: Props) => {
    return (
        <div className={styles.circle} key={index}>{value}</div>
    )
}

export default Circle