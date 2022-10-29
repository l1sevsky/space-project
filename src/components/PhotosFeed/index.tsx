import React, { useState } from 'react';
import classNames from 'classnames';
import css from './index.module.scss';
import { PhotosFeedSwitch, Title } from 'components';

type TProps = {
  title: string;
};

// for dev
const photoUrl = 'https://cdnstatic.rg.ru/uploads/images/173/61/65/iStock-10543947921000.jpg';
const numbers = [29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18].map(num => [num, 'Sep 2022'])


export const PhotosFeed = ({ title }: TProps) => {
  const [onRow, setOnRow] = useState<2 | 3>(3); 

  return (
    <div className={css.block}>
      <Title title={title}>
        <PhotosFeedSwitch currentValue={onRow} setter={setOnRow} />
      </Title>
      <div className={classNames(css.feed, css[`onRow${onRow}`])}>
        {
          numbers.map(num => (
            <div key={num[0]} className={css.img} style={{'backgroundImage': `url(${photoUrl})`}}>
              <div className={css.date}>
                <p className={css.day}>{ num[0] }</p>
                <p className={css.monthYear}>{ num[1] }</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
