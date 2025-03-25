import React, { useEffect } from 'react';
import { Button } from "antd";
import Provider from "./../../Shared/providers/antd";

type Props = {};

const App: React.FC<Props> = (props): React.ReactNode => {

    return (
        <React.Fragment>
            <Provider prefix={'react-remote-2'}>
                <Button type='primary'>
                    hello world
                </Button>
            </Provider>
        </React.Fragment>
    )
};

export default App;