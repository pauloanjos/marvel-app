import React from 'react';
import { Character } from '../../Models/Character';
import { Card } from '../../components/Card';
import styles from './Characters.module.scss';
import { Grid } from '../../components/Grid';
import { useAppSelector } from '../../redux/hooks';
import { selectCharacters } from '../../redux/reducers/charactersSlice';
import { Link } from 'react-router-dom';


export function Characters() {
    const characters = useAppSelector(selectCharacters);
  return (
        <div className={styles.container}>
            {characters.length === 0 && <p>No heroes found...</p>}
            {characters.length !== 0 && <strong>HEROES</strong>}
            <Grid container spacing={"sm"} justifyContent="center">
                {characters.map((character: Character, index: number) => (
                    <Grid item xs={1} sm={6} md={4} lg={3} key={index}>
                        <Link key={character.id} to={`/details/${character.id}`}  style={{ textDecoration: 'none' }}>
                            <Card id={character.id} name={character.name} thumbnail={character.thumbnail} description={character.description}/>
                        </Link>
                    </Grid>
                ))}
            </Grid>
            <div className={styles.buttonContainer}>
                <Link className={styles.button} to={`/character`}>Add Hero</Link>
            </div>
        </div>
  );
}

