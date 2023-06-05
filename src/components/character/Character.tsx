import React from 'react';
import {useDispatch} from 'react-redux';
import {addScore, CharacterType, deleteCharacter, subtractScore} from '../../slice/charactersSlice';
import styles from './Character.module.css'
import {Button} from '../Button';
// import {} from "@mui/icons-material";
import {IconButton} from "@material-ui/core";

export const Character = ({character}: {character: CharacterType}) => {
    const {characterName, score, avatar} = character;
    const dispatch = useDispatch()
    const onAddLevelClick = () => {
        dispatch(addScore({characterName}))
    }

    const onSubtractLevelClick = () => {
        dispatch(subtractScore({characterName}))
    }

    const onDeleteClick = () => {
        dispatch(deleteCharacter({characterName}))
    }

    return (
        <div className={styles.character}>
            <div className={styles.characterContainer}>
                <div  className={styles.deleteContainer}>
                    <IconButton aria-label="delete" onClick={onDeleteClick}>
                        {/*🗑*/}
                        X
                    </IconButton>
                </div>

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