import React from 'react';
import {useSelector} from 'react-redux';
import {Character} from '../character/Character';
import {CharacterType} from '../../slice/charactersSlice';
import {AddNewCharacter} from '../addNewCharacter/AddNewCharacter';
import {ChooseFirstPlayer} from '../chooseFirstPlayer/ChooseFirstPlayer';
import styles from './Main.module.css'

export const Main = () => {
    const characters = useSelector((state: any): CharacterType[] => state.charactersPage.characters);

    const showCharacters = characters && characters.length !== 0

    return (
        <div className={styles.mainContainer}>
            <h2>Munchkin Score</h2>
            {showCharacters
                ? characters.map((character: CharacterType, index: number) => {
                    return <Character key={index} character={character}/>
                })
                : <div>No characters</div>
            }
            <AddNewCharacter/>
            {showCharacters ? <ChooseFirstPlayer/> : ''}
        </div>
    );
};
