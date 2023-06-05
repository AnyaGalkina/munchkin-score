import React,  {useState}  from 'react';
import {useSelector} from 'react-redux';
import {Button} from './Button';
import {CharacterType} from '../slice/charactersSlice';
import {random} from '../common/utils/random';


export const ChooseFirstPlayer = () => {
    const characters = useSelector((state: any): CharacterType[] => state.charactersPage.characters);

    const [firstPlayer, setFirstPlayer] = useState('');

    const onHowGoFirstClick = () => {
        let randomNumber = random( characters.length - 1);
        setFirstPlayer(characters[randomNumber].characterName);
    }

    return (
        <div>
            <Button title={'How go first?'} onClick={onHowGoFirstClick}/>
            {firstPlayer && <div>{firstPlayer} goes first </div>}
        </div>
    );
};