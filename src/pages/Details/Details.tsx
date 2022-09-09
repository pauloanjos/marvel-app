import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectCharacters } from '../../redux/reducers/charactersSlice';

import {CardDetails} from '../../components/CardDetails';
import { Character } from '../../Models/Character';

import styles from './Details.module.scss';


const Details: React.FC = () => {
  const { id } = useParams<string>();
  const character = useAppSelector(selectCharacters).find((character: Character) => character.id == id);

  return (
        <section className={styles.section}>
            <h2>Hero Details</h2>
            <CardDetails
                id={character?.id}
                name={character?.name}
                description={character?.description}
                thumbnail={character?.thumbnail}
            />
        </section>
  );
};

export default Details;
