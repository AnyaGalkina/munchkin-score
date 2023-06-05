import React, {useState} from 'react';
import {Button} from './Button';
import {useDispatch} from 'react-redux';
import {setCharacter} from '../slice/charactersSlice';
import {Modal} from './modal/Modal';
import {random} from '../common/utils/random';
import {images} from '../common/utils/images';


export const AddNewCharacter = () => {
    const dispatch = useDispatch()
    const [newCharacterName, setNewCharacterName] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [newCharacterAvatar, setNewCharacterAvatar] = useState('')

    const onAddNewCharacterClick = () => {
        const characterAvatar = newCharacterAvatar ? newCharacterAvatar : images[random(images.length - 1)]

        dispatch(setCharacter({characterName: newCharacterName, score: 1, avatar: characterAvatar }))
        setNewCharacterName('')
        setNewCharacterAvatar('')
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCharacterName(e.target.value)
    }
    const onAvatarChange = () => {
        setIsOpen(true)
    }

    return (
        <div>
            Add new character:
            <input type="text" onChange={onInputChange} value={newCharacterName}/>
            <Button title={'Choose avatar'} onClick={onAvatarChange}/>
            <Button title={'Save'} onClick={onAddNewCharacterClick}/>
            {isOpen
                ? <Modal setOpen={setIsOpen} setNewCharacterAvatar={setNewCharacterAvatar} isOpen={isOpen}/>
                : ''
            }
        </div>
    );
};
