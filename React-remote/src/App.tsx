import React, { useEffect } from 'react';

type Props = {};

const App: React.FC<Props> = (props): React.ReactNode => {
    useEffect(() => {
        console.log('hello world');
        import("Angular_remote/AuthModule").then(m => {
            console.log(m);
            
        })
    },[]);
    return (
        <React.Fragment>
            Hello React App
        </React.Fragment>
    )
};

export default App;