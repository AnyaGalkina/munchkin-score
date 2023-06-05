import React from 'react';

type PropsType = {
    title: string;
    onClick: () => void;
    disabled?: boolean;
    className? : string;
}

export const Button = ({title, onClick, disabled, className}: PropsType) => {
    return <button
        className={className}
        disabled={disabled}
        style={{background:'#fff', color: '#000', border: 'solid 2px #000', borderRadius: '10px', margin: '0 5px'}}
        onClick={onClick}>{title}</button>
};
