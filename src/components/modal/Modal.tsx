import React, {memo, ReactElement} from 'react';
import {Button, Dialog, DialogActions, DialogTitle, Slide} from '@material-ui/core';
import {TransitionProps} from '@material-ui/core/transitions';
import styles from './Modal.module.css';
import {images} from '../../common/utils/images';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type PropsType = {
    setOpen: (open: boolean) => void;
    isOpen: boolean;
    setNewCharacterAvatar: any
};

export const Modal = memo(({setOpen, setNewCharacterAvatar, isOpen}: PropsType): ReactElement => {
    const [avatar, setAvatar] = React.useState<string>('');


    const onSaveClick = (): void => {
        setNewCharacterAvatar(avatar);
        setOpen(false);
    }

    return (
        <div>
            <Dialog
                open={isOpen}
                // @ts-ignore
                TransitionComponent={Transition}
                keepMounted
                onClose={onSaveClick}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogTitle style={{textAlign: 'center'}}>
                    Choose your avatar
                </DialogTitle>
                {images.map((image: string, index: number) => {
                    return (
                        <div onClick={() => setAvatar(image)} className={avatar === image ? styles.choosen : ''}>
                            <img key={index} className={styles.img} alt="order" src={image}/>
                        </div>
                    )
                })
                }
                <DialogActions>
                    <Button onClick={onSaveClick}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});
