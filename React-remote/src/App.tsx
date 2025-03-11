import React, { useEffect, useRef, useState } from 'react';
type Props = {};

type Scope = unknown;
type Factory = () => any;

type Container = {
  init(shareScope: Scope): void;
  get(module: string): Factory;
};
// const NotfoundComponent = React.lazy(() => import("AngularApp/notfound"));
declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: Scope };

const App: React.FC<Props> = (props): React.ReactNode => {
    const ref = useRef(null);
    const [IsShow,SetIsShow] = useState(false);
    const OnSetIsShow = () => {
        SetIsShow(!IsShow);
    }
    useEffect(() => {
        import("AngularApp/Notfound").then(async m => {
            // const factory = window.angularApp.getComponentFactory(MyAngularComponent);
            console.log(m);
        })
    },[IsShow]);
    return (
        <div className='react-todolist'></div>
    )
};

export default App;