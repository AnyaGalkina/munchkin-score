import React, {memo, ReactElement} from 'react';
import {Button, Dialog, DialogActions, DialogTitle, Slide, Divider} from '@material-ui/core';
import {TransitionProps} from '@material-ui/core/transitions';
import styles from './BasicModal.module.css'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type PropsType = {
    isOpen: boolean;
    okButtonTitle: string
    children?: React.ReactNode
    onOkClick:() => void
    onCancelClick:() => void
    cancelButtonTitle?: string
    modalTitle: string
};
export const BasicModal = memo(({modalTitle, onOkClick,  cancelButtonTitle, onCancelClick, okButtonTitle, isOpen, children}: PropsType): ReactElement => {

    return (
        <div>
            <Dialog
                open={isOpen}
                // @ts-ignore
                TransitionComponent={Transition}
                keepMounted
                onClose={onCancelClick}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogTitle style={{textAlign: 'center'}}>
                    {modalTitle}
                </DialogTitle>
                <Divider />
                {children}
                <DialogActions style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Button onClick={onOkClick} className={styles.button}>{okButtonTitle}</Button>
                    {cancelButtonTitle ? <Button onClick={onCancelClick} className={styles.button}>{cancelButtonTitle}</Button> : ''}
                </DialogActions>
            </Dialog>
        </div>
    );
});