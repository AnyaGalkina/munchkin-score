import React from 'react';
import {BasicModal} from './basicModal/BasicModal';
import {clearScore} from '../../slice/charactersSlice';
import {useDispatch} from 'react-redux';


type PropsType = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export const TextModal = ({isOpen, setIsOpen}: PropsType) => {
    const dispatch = useDispatch();

    const onOkClick = () => {
        dispatch(clearScore(null))
        setIsOpen(false);
    }

    const onCancelClick = () => {
        setIsOpen(false);
    }

    return (
        <BasicModal isOpen={isOpen} modalTitle={'Are you sure you want to restart the game?'} okButtonTitle={'YES'}
                    onCancelClick={onCancelClick} onOkClick={onOkClick} cancelButtonTitle={'NO'}/>
    );
};