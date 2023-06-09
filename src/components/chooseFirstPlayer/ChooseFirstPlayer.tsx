import React,  {useState}  from 'react';
import {useSelector} from 'react-redux';
import {Button} from '../Button';
import {CharacterType} from '../../slice/charactersSlice';
import {random} from '../../common/utils/random';
import styles from './ChooseFirstPlayer.module.css'


export const ChooseFirstPlayer = () => {
    const characters = useSelector((state: any): CharacterType[] => state.charactersPage.characters);

    const [firstPlayer, setFirstPlayer] = useState('');

    const onHowGoFirstClick = () => {
        let randomNumber = random( characters.length );
        setFirstPlayer(characters[randomNumber].characterName);
    }

    return (
        <div className={styles.container}>
            <Button title={'Who goes first? 🎲'} onClick={onHowGoFirstClick} className={styles.button}/>
            {firstPlayer && <div><b>{firstPlayer}</b> plays first </div>}
        </div>
    );
};