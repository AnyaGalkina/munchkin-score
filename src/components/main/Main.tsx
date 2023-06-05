import React from 'react';
import {useSelector} from 'react-redux';
import {Character} from './character/Character';
import {CharacterType} from '../slice/charactersSlice';
import {AddNewCharacter} from './AddNewCharacter';
import {ChooseFirstPlayer} from './ChooseFirstPlayer';

export const Main = () => {
    const characters = useSelector((state: any): CharacterType[] => state.charactersPage.characters);

    const showCharacters = characters && characters.length !== 0

    return (
        <div>
            {showCharacters
                ? characters.map((character: CharacterType) => {
                    return <Character key={character.characterName} character={character}/>
                })
                : <div>No characters</div>
            }
            <AddNewCharacter/>
            {showCharacters ? <ChooseFirstPlayer/> : ''}
        </div>
    );
};
