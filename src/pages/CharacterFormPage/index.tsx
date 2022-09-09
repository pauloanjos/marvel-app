import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { addCharacter } from '../../redux/reducers/charactersSlice';

import { Character } from '../../Models/Character';
import { Thumbnail} from '../../Models/Thumbnail';

import styles from './CharacterFormPage.module.scss';

    export const CharacterFormPage: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [thumb, setThumb] = useState<Thumbnail>({ path: '', extension: ''});
    const [fileName, setFileName] = useState<string>();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleFIleInput = (value: string) => {
        const path = value.split('.')[0];
        const extension = value.split('.')[1];
        const thumb: Thumbnail = { path: path, extension: extension};
        setThumb(thumb);
        setFileName(value);

    }
        
    const handleFormSubmit = () =>{
        console.log();
        dispatch(addCharacter(new Character(id,name,description,'',thumb,[])));
        navigate('/');
    }
    return (
            <section className={styles.formWrap}>
                <h1>Add Hero</h1>
                <p>Fill out the fields to create a new User</p>
                <form>
                    <div className={styles.form__group}>
                        <label htmlFor="first-name">Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                        </label>
                    </div>
                    <div className={styles.form__group}>
                        <label htmlFor="Id">Id:
                            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
                        </label>
                        
                    </div>
                    <div className={styles.form__group}>
                        <label htmlFor="description">Description:</label>
                        <textarea value={description} id="description" cols={50} rows={5} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className={styles.form__group}>
                        <input type="file" value={fileName} onChange={(e) => handleFIleInput(e.target.value)} />
                    </div>
                    <button type="submit" className={styles.form__button} onClick={handleFormSubmit} >Add Confirm</button>  
                </form>
                
            </section>
    );
};

