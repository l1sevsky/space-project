import classNames from 'classnames';
import React from 'react';
import { ListDisplay1Icon, ListDisplay2Icon, ListDisplay3Icon } from 'resources/icons';
import css from './index.module.scss';

type TProps = {
  currentValue: 1 | 2 | 3;
  setter: Function;
};

export const PhotosFeedSwitch = ({ currentValue, setter }: TProps) => {
  const setValue = (number: 1 | 2 | 3) => () => setter(number);

  return (
    <div className={css.wrap}>
      <button className={classNames(css.button, {[css.active]: currentValue === 1})} onClick={setValue(1)}>
        <ListDisplay1Icon />
      </button>
      <button className={classNames(css.button, {[css.active]: currentValue === 2})} onClick={setValue(2)}>
        <ListDisplay2Icon />
      </button>
      <button className={classNames(css.button, {[css.active]: currentValue === 3})} onClick={setValue(3)}>
        <ListDisplay3Icon />
      </button>
    </div>
  );
};
