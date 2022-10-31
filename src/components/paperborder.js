import React, { useState } from 'react';

export default function PaperBorder(props) {
    return (
        <>
            <p className='paper-cut-border-before'>
            </p>
            {props.children}
            <p className='paper-cut-border-after' />
        </>
    );
}
