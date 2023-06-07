import React from 'react';
import {useSelector} from 'react-redux';
import {AdditionalContentType, CharacterType} from '../../slice/charactersSlice';
import {AddNewCharacter} from '../addNewCharacter/AddNewCharacter';
import {ChooseFirstPlayer} from '../chooseFirstPlayer/ChooseFirstPlayer';
import styles from './Main.module.css'
import no from '../../assets/images/no.png'
import {Swiper} from '../character/Swiper';
import logo from '../../assets/images/logo.png'


export const Main = () => {
    const characters = useSelector((state: any): CharacterType[] => state.charactersPage.characters);
    const additionalContent = useSelector((state: any): AdditionalContentType => state.charactersPage.additionalContent);

    const showCharacters = characters && characters.length !== 0

    return (
        <div className={styles.mainContainer}>
            <div style={{margin: '15px 0 5px'}}>
                <img src={logo} alt={'logo'}/>
            </div>


            {!showCharacters
                ?
                <div>
                    <h4> No players yet</h4>
                    <img src={no} style={{width: '300px'}}/>
                    <AddNewCharacter/>
                </div>
                : <>
                    {characters.map((character: CharacterType) => {
                        return <Swiper key={character.id} character={character}/>
                    })
                    }
                    {additionalContent === 'chooseFirstPlayer' ? <ChooseFirstPlayer/> : <AddNewCharacter/>}
                </>
            }
        </div>
    );
};
