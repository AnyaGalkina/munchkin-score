import React, {useState} from 'react';
import {Button} from '../Button';
import {useDispatch} from 'react-redux';
import {setCharacter} from '../../slice/charactersSlice';
import {ModalWithImages} from '../modal/ModalWithImages';
import {random} from '../../common/utils/random';
import {images} from '../../common/utils/images';
import {TextField} from '@material-ui/core';
import styles from './AddNewCharacter.module.css'
import {Avatar} from '../avatar/Avatar';
import addAvatar from '../../assets/images/add-avatar.png'


export const AddNewCharacter = () => {
    const dispatch = useDispatch()

    const [newCharacterName, setNewCharacterName] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [newCharacterAvatar, setNewCharacterAvatar] = useState('')
    const [error, setError] = useState('')


    const onAddNewCharacterClick = () => {
        if (newCharacterName.length >= 30) {
            setError('Maximum length of name is 30 symbols')
        } else if (newCharacterName.length < 1) {
            setError('Please enter name')
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
            <h3 className={styles.text}>Add player</h3>
            <div>
                <div onClick={onAvatarChange}>
                    {newCharacterAvatar
                        ? <Avatar avatar={newCharacterAvatar}/>
                        : <Avatar avatar={addAvatar} className={styles.addAvatar}/>
                    }
                </div>
                <>
                    <TextField variant="outlined" onChange={onInputChange} value={newCharacterName}
                               style={{cursor: 'pointer', width: '250px'}} color="secondary"/>
                    <div className={styles.error}>{error ? error : ''}</div>
                </>
            </div>

            <div>
                <div className={styles.block}>
                    <Button title={'Save'} onClick={onAddNewCharacterClick} className={styles.buttonSave}/>
                </div>
            </div>
            {isOpen
                ? <ModalWithImages setOpen={setIsOpen} setNewCharacterAvatar={setNewCharacterAvatar} isOpen={isOpen}/>
                : ''
            }
        </div>
    );
};
