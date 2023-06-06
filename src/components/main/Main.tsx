import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {CharacterType, clearScore} from '../../slice/charactersSlice';
import {AddNewCharacter} from '../addNewCharacter/AddNewCharacter';
import {ChooseFirstPlayer} from '../chooseFirstPlayer/ChooseFirstPlayer';
import styles from './Main.module.css'
import no from '../../assets/images/no.png'
import {Swiper} from '../character/Swiper';
import logo from '../../assets/images/logo.png'
import {Button} from '../Button';


export const Main = () => {
    const characters = useSelector((state: any): CharacterType[] => state.charactersPage.characters);
    const dispatch = useDispatch()

    const showCharacters = characters && characters.length !== 0

    const onRestartClick = () => {
        dispatch(clearScore(characters))
    }

    return (
        <div className={styles.mainContainer}>
            <img src={logo} alt={'logo'}/>
            {showCharacters
                ? characters.map((character: CharacterType) => {
                    return <Swiper key={character.id} character={character}/>
                })
                : <div>
                    <h4> No players yet</h4>
                    <img src={no} style={{width: '300px'}}/>
                </div>
            }
            {/*<div className={styles.restart}>*/}
                <Button title={'Restart'} onClick={onRestartClick} className={styles.button}/>
            {/*</div>*/}

            <AddNewCharacter/>
            {showCharacters ? <ChooseFirstPlayer/> : ''}
        </div>
    );
};
