import React from 'react';
import { Spinner } from 'react-bootstrap';


interface Props{
    content?: string;
}

export default function LoadingComponent({content = 'Loading...'}:Props){
    return (
        <div className="loader">
        <div className="loader-content">
            <Spinner animation={'border'} />
            <div className="loader-message">{content}</div>
        </div>
    </div>
    );
};
