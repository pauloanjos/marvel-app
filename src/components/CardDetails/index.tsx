import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Thumbnail } from '../../Models/Thumbnail';
import styles from './CardDetails.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import {removeCharacter} from "../../redux/reducers/charactersSlice"

interface CardDetailsProps {
    id?:string;
    name?: string;
    thumbnail?: Thumbnail;
    description?: string;
    className?: string;
  }

export const CardDetails = (card: CardDetailsProps) => {
    console.log("cardDetails.: ", card);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const handleDeleteCharacter = () =>{
        dispatch(removeCharacter(card.id || ''));
        navigate('/');
    }
return <div className={styles.container}>
            {card.thumbnail && (
                <img
                    src={`${card.thumbnail?.path}.${card.thumbnail?.extension}`}
                    alt={card.name}
                    className={styles.image}
                />
            )}

            <h2>{card.name +"(ID: "+card.id+")"}</h2> 
            <h3>{card.description}</h3>
            <h3>{card.id}</h3>
            <button onClick={handleDeleteCharacter}>Delete this hero</button>
        </div>
}
