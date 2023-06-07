import React from 'react';
import {useDispatch} from 'react-redux';
import styles from '../main/Main.module.css';
import {IconButton} from '@material-ui/core';
import gameDie from '../../assets/images/game-die.png'
import restart from '../../assets/images/restart.png'
import addPlayer from '../../assets/images/player.avif'
import {clearScore, setAdditionalContent} from '../../slice/charactersSlice';

export const NavBar = () => {
    const dispatch = useDispatch();

    const onRestartClick = () => {
        dispatch(clearScore(null))
    }

    const onGameDieClick = () => {
        dispatch(setAdditionalContent('chooseFirstPlayer'))
    }

    const onAddAvatarClick = () => {
        dispatch(setAdditionalContent('addNewCharacter'))
    }

    return (
        <div className={styles.restart}>
            <IconButton style={{fontSize: '70px', color: '#fff'}} onClick={onRestartClick}>
                <img src={restart} alt={'game die'} style={{width: '40px'}}/>
            </IconButton>
            <IconButton style={{fontSize: '35px', color: '#fff'}} onClick={onAddAvatarClick}>
                <img src={addPlayer} alt={'add player'} style={{width: '40px'}}/>
            </IconButton>
            <IconButton style={{fontSize: '35px', color: '#fff'}} onClick={onGameDieClick}>
                <img src={gameDie} alt={'game die'} style={{width: '40px'}}/>
            </IconButton>
            {/*<Button title={'Restart'} onClick={onRestartClick} className={styles.button}/>*/}
        </div>
    );
};