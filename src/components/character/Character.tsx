import React from 'react';
import {useDispatch} from 'react-redux';
import {Button} from './Button';
import {addScore, CharacterType, deleteCharacter, subtractScore} from '../slice/charactersSlice';

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
        <div>
            <div>
                <Button title={'Delete'} onClick={onDeleteClick}/>
            </div>
            <img src={avatar || ''} alt={'avatar'}/>
            <div>{characterName}</div>
            <div>{score}</div>
            <div>
                <Button title={"-"} onClick={onSubtractLevelClick} disabled={score === 1}/>
                <Button title={"+"} onClick={onAddLevelClick}/>
            </div>
        </div>
    );
};