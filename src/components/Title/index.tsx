import React from 'react';
import css from './index.module.scss';

type TProps = {
  title: string;
};

export const Title = ({ title, children = null }: TProps & React.PropsWithChildren) => {
  const plug = <div className={css.plug} />

  return (
    <div className={css.row}>
      <h2>{ title }</h2>
      { children ? children : plug }
    </div>
  );
};
