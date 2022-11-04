import React, { useState } from 'react';

export default function PaperBorder(props) {
    return (
        <>
            <p className='paper-cut-border-before' />
            {props.children}
            <p className='paper-cut-border-after' />
        </>
    );
}
