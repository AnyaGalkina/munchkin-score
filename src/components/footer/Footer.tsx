import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import styles from '../main/Main.module.css';
import {IconButton} from '@material-ui/core';
import gameDie from '../../assets/images/game-die.png'
import restart from '../../assets/images/restart.png'
import addPlayer from '../../assets/images/player.avif'
import {setAdditionalContent} from '../../slice/charactersSlice';
import {TextModal} from '../modal/TextModal';

export const NavBar = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const onRestartClick = () => {
        setIsOpen(true)
    }

    const onGameDieClick = () => {
        dispatch(setAdditionalContent('chooseFirstPlayer'))
    }

    const onAddAvatarClick = () => {
        dispatch(setAdditionalContent('addNewCharacter'))
    }

    return (
        <div>
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
            </div>
            <TextModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    );
};