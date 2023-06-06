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
        style={{background:'#fff', color:'#4a1715', border: 'solid 2px #4a1715', borderRadius: '10px', marginLeft: '5px', marginRight: '5px'}}
        onClick={onClick}>{title}</button>
};
