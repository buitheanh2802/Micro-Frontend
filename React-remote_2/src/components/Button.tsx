import React from 'react';

type Props = {
    title: string,
    callbackFunc: (data: string) => void
};

const Button: React.FC<Props> = ({ title, callbackFunc }): React.ReactNode => {
    return (
        <React.Fragment>
            <input type="text" onChange={(e) => {
                if(typeof callbackFunc == 'function') callbackFunc(e.target.value)
            }} />
            <button>
                {title}
                 Hello button
            </button>
        </React.Fragment>
    )
};

export default Button;