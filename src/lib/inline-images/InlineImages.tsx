import React from 'react';
import { v4 } from 'uuid';
import Avatar from './Avatar';
import { AvatarPropType, InlineImagesPropType } from './types';
import { DEFAULT_SPACE_BETWEEN_PICS, Elements } from './constants';
import classes from './styles.module.scss';
import { getStyles } from './utils/utils';

const InlineImages = (props: InlineImagesPropType): JSX.Element => {
  const {
    data,
    totalUserCount,
    elivateOnHover,
    nameOnHover,
    onUserClick,
    spaceBetweenPics,
    styles = {}
  } = props;
  return (
    <div>
      <div className={classes.imagesContainer}>
        {data?.map((user: AvatarPropType, index: number) => (
          <div
            key={v4()}
            className={classes.eachImage}
            style={{
              left: `${index * (spaceBetweenPics ?? DEFAULT_SPACE_BETWEEN_PICS)}px`
            }}
          >
            <Avatar
              avatarUrl={user.avatarUrl}
              name={user.name}
              elivateOnHover={elivateOnHover}
              nameOnHover={nameOnHover}
              onUserClick={onUserClick && ((): void => {
                onUserClick(user);
              })}
              styles={styles}
            />
          </div>
        ))}
        {totalUserCount && totalUserCount > data?.length && (
          <div
            className={`${classes.eachImage} ${classes.extraValue} ${elivateOnHover && classes.elivateOnHover}`}
            style={{
              left: `${data?.length * (spaceBetweenPics ?? DEFAULT_SPACE_BETWEEN_PICS)}px`,
              cursor: onUserClick && 'pointer',
              ...getStyles(Elements.ExtraValue, styles)
            }}
          >
            {totalUserCount - data?.length} +
          </div>
        )}
      </div>
    </div>
  )
};

export default InlineImages;
