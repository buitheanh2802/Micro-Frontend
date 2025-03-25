import React from 'react';
import { ConfigProvider,Button } from "antd";

type Props = {};

const AntdWrapper = ({ children , prefix}) => {
    return (
        <ConfigProvider
            prefixCls={prefix}
        >
            <Button>Hahaha</Button>
            {children}
        </ConfigProvider>
    )
};

export default AntdWrapper;