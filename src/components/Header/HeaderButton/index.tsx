import React from 'react';
import css from './index.module.scss';

type TProps = {
  action: () => void;
};

export const HeaderButton = ({ action, children }: TProps & React.PropsWithChildren) => {

  return (
    <button onClick={action} className={css.button}>
      { children }
    </button>
  );
};
