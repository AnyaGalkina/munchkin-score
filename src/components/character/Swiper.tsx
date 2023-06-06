import React from 'react';
import SwipeToDelete from 'react-swipe-to-delete-ios'
import {Character} from './Character';
import {CharacterType, deleteCharacter} from '../../slice/charactersSlice';
import {useDispatch} from 'react-redux';
import styles from './Swiper.module.css'


type PropsType = {
    character: CharacterType
}

export const Swiper = ({character}: PropsType) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteCharacter({characterName: character.characterName}))
    }


    return (
        <div>
            <SwipeToDelete
                onDelete={handleDelete} // required
                height={200} // default
                transitionDuration={250} // default
                deleteWidth={75} // default
                //@ts-ignore
                deleteThreshold={75} // default
                showDeleteAction={true} //default
                deleteColor="rgba(252, 58, 48, 1.00)" // default
                deleteText="Delete" // default
                disabled={false} // default
                id="swiper-1" // not default
                className={styles.swiper} // not default
                rtl={false} // default
                // onDeleteConfirm={(onSuccess: any, onCancel: any) => {
                //     // not default - default is null
                //     if (window.confirm("Do you really want to delete this item ?")) {
                //         onSuccess();
                //     } else {
                //         onCancel();
                //     }
                // }}
            >
                <Character character={character}/>
            </SwipeToDelete>
        </div>
    );
};