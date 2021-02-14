import React from 'react';

import styles from './Card.module.css';

const Card = ({front, data}) => {
    return (
        <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
                <div className={styles.flip_card_front}>
                    {front}
                </div>
                <div className={styles.flip_card_back}>
                    {data}
                </div>
            </div>
        </div>
    );
};

export default Card;
