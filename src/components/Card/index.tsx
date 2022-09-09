import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
    id:string;
    name: string;
    thumbnail: {
      extension: string;
      path: string;
    };
    description?: string
    className?: string;
  }

export const Card = (card: CardProps) => {
return <div className={styles.container}>
            {card.thumbnail && (
                <img
                    src={`${card.thumbnail?.path}.${card.thumbnail?.extension}`}
                    alt={card.name}
                />
            )}
            <h2>{card.name}</h2>    
        </div>
}
