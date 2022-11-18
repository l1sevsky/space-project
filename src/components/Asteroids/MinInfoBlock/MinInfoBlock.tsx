import React from 'react';

type Tprops = {
    textTitle: string,
    id: string,
} & React.PropsWithChildren

const MiniInfoBlock = ({children, textTitle, id}: Tprops) => {
    return (
        <div className="info-block">
            <div className="name-icon" id={id}></div>
            <h2>{textTitle}</h2>
            {children}
        </div>
    );
}

export default MiniInfoBlock;