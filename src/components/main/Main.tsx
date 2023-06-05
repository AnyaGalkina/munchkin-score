import React from 'react';
import {useSelector} from 'react-redux';
import {Character} from '../character/Character';
import {CharacterType} from '../../slice/charactersSlice';
import {AddNewCharacter} from '../addNewCharacter/AddNewCharacter';
import {ChooseFirstPlayer} from '../chooseFirstPlayer/ChooseFirstPlayer';
import styles from './Main.module.css'
import no from '../../assets/images/no.png'

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
                : <div>
                    <h4> No players yet</h4>
                    <img src={no} style={{width: '300px'}}/>
                </div>
            }
            <AddNewCharacter/>
            {showCharacters ? <ChooseFirstPlayer/> : ''}
        </div>
    );
};
