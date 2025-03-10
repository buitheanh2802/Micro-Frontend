import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const NotfoundComponent = React.lazy(() => import("AngularApp1/NotFound"));

const App: React.FC<Props> = (props): React.ReactNode => {
    const ref = useRef(null);
    const [IsShow,SetIsShow] = useState(false);
    const OnSetIsShow = () => {
        SetIsShow(!IsShow);
    }
    useEffect(() => {
        console.log(NotfoundComponent);
    },[IsShow]);
    return (
        <div className='react-todolist'>
            <NotfoundComponent />
            {IsShow && <div ref={ref} className='showwww'>Showwwww</div>}
            <button onClick={OnSetIsShow}>Clicked</button>
        </div>
    )
};

export default App;