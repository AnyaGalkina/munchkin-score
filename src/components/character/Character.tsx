import React from 'react';
import {useDispatch} from 'react-redux';
import {addScore, CharacterType, subtractScore} from '../../slice/charactersSlice';
import styles from './Character.module.css'
import {Button} from '../Button';

export const Character = ({character}: {character: CharacterType}) => {
    const {characterName, score, avatar, id} = character;
    const dispatch = useDispatch()
    const onAddLevelClick = () => {
        dispatch(addScore({id}))
    }

    const onSubtractLevelClick = () => {
        dispatch(subtractScore({id}))
    }


    return (
        <div className={styles.character}>
            <div className={styles.characterContainer}>
                <img src={avatar || ''} alt={'avatar'} className={styles.image}/>
                <div className={styles.name}>{characterName}</div>
            </div>
            <div className={styles.characterContainer}>
                <div className={styles.score}>{score}</div>
                <div className={styles.buttonContainer}>
                    <Button title={"-"} onClick={onSubtractLevelClick} disabled={score === 1} className={styles.button}/>
                    <Button title={"+"} onClick={onAddLevelClick} className={styles.button}/>
                </div>
            </div>
        </div>
    );
};