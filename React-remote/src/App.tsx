import React, { useEffect } from 'react';
import Button from './components/Button';

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
            <Button title='Icons' />
        </React.Fragment>
    )
};

export default App;