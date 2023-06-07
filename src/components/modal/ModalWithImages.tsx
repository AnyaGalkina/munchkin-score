import React, {memo, ReactElement} from 'react';
import styles from './ModalWithImages.module.css';
import {images} from '../../common/utils/images';
import {BasicModal} from './basicModal/BasicModal';

type PropsType = {
    setOpen: (open: boolean) => void;
    isOpen: boolean;
    setNewCharacterAvatar: any
};

export const ModalWithImages = memo(({setOpen, setNewCharacterAvatar, isOpen}: PropsType): ReactElement => {
    const [avatar, setAvatar] = React.useState<string>('');


    const onSaveClick = (): void => {
        setNewCharacterAvatar(avatar);
        setOpen(false);
    }

    return (
        <BasicModal modalTitle={'Choose your avatar'} isOpen={isOpen} onOkClick={onSaveClick} okButtonTitle={'Save'} onCancelClick={onSaveClick}>
            {images.map((image: string, index: number) => {
                return (
                    <div onClick={() => setAvatar(image)} className={avatar === image ? styles.choosen : styles.none}>
                        <img key={index} className={styles.img} alt="order" src={image}/>
                    </div>
                )
            })
            }
        </BasicModal>
    );
});
