import React from 'react';
import styles from './Avatar.module.css';

type PropsType = {
    avatar: string
    className?: string
}
export const Avatar = ({avatar, className}: PropsType) => {

    const finalClassName = className ? `${styles.image} ${className}` : styles.image

    return (
        <div>
            <img src={avatar || ''} alt={'avatar'} className={finalClassName}/>
        </div>
    );
};
