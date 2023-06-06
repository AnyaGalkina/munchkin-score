import React, {useState} from 'react';
import {Button} from '../Button';
import {useDispatch} from 'react-redux';
import {setCharacter} from '../../slice/charactersSlice';
import {Modal} from '../modal/Modal';
import {random} from '../../common/utils/random';
import {images} from '../../common/utils/images';
import {TextField} from '@material-ui/core';
import styles from './AddNewCharacter.module.css'


export const AddNewCharacter = () => {
    const dispatch = useDispatch()

    const [newCharacterName, setNewCharacterName] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [newCharacterAvatar, setNewCharacterAvatar] = useState('')
    const [error, setError] = useState('')


    const onAddNewCharacterClick = () => {
        if (newCharacterName.length >= 30) {
            setError('Maximum length of name is 30 symbols')
        } else {
            setError('')
            const characterAvatar = newCharacterAvatar ? newCharacterAvatar : images[random(images.length)]
            const id = Date.now();

            dispatch(setCharacter({characterName: newCharacterName, score: 1, avatar: characterAvatar, id}))
            setNewCharacterName('')
            setNewCharacterAvatar('')
        }
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCharacterName(e.target.value)
    }
    const onAvatarChange = () => {
        setIsOpen(true)
    }

    return (
        <div className={styles.addContainer}>
            <h3 className={styles.text}>Add player:</h3>
            <TextField variant="outlined" onChange={onInputChange} value={newCharacterName}
                       style={{cursor: 'pointer', width: '250px'}} color="secondary"/>
            <div className={styles.error}>{error ? error : ""}</div>
            <div>
                <div className={styles.block}>
                    <Button
                        title={'Choose avatar'}
                        onClick={onAvatarChange} className={styles.button}/>
                </div>
                <div className={styles.block}>
                    <Button title={'Save'} onClick={onAddNewCharacterClick} className={styles.button}/>
                </div>
            </div>
            {isOpen
                ? <Modal setOpen={setIsOpen} setNewCharacterAvatar={setNewCharacterAvatar} isOpen={isOpen}/>
                : ''
            }
        </div>
    );
};
