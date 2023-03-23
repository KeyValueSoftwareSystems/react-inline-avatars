import React from 'react';
import { v4 } from 'uuid';
import Avatar from './Avatar';
import { AvatarPropType, InlineImagesPropType } from './types';
import {
  DEFAULT_SPACE_BETWEEN_PICS,
  Elements,
  DEFAULT_AVATAR_HEIGHT
} from './constants';
import classes from './styles.module.scss';
import { getStyles } from './utils/utils';

const InlineImages = (props: InlineImagesPropType): JSX.Element => {
  const {
    data,
    totalUserCount,
    elivateOnHover,
    nameOnHover,
    onUserClick,
    spaceBetweenPics = DEFAULT_SPACE_BETWEEN_PICS,
    styles = {}
  } = props;

  const getHeight = (): number => {
    const elem = document.getElementById('inline-image-0');
    if (elem) return elem.offsetHeight;
    return DEFAULT_AVATAR_HEIGHT;
  }

  const getWidth = (): number => {
    const elem = document.getElementById('inline-image-0');
    let width = 0;
    if (totalUserCount && totalUserCount > data.length) width = data?.length * spaceBetweenPics;
    else width = (data?.length - 1) * spaceBetweenPics;
    if (elem?.offsetWidth) width += elem.offsetWidth;
    return width + 10;
  }

  return (
    <div
      style={{
        width: `${getWidth()}px`,
        height: `${getHeight()}px`
      }}
    >
      <div className={classes.imagesContainer}>
        {data?.map((user: AvatarPropType, index: number) => (
          <div
            key={v4()}
            className={classes.eachImage}
            style={{
              left: `${index * (spaceBetweenPics ?? DEFAULT_SPACE_BETWEEN_PICS)}px`
            }}
            id="inline-images"
          >
            <Avatar
              avatarUrl={user.avatarUrl}
              name={user.name}
              elivateOnHover={elivateOnHover}
              nameOnHover={nameOnHover}
              onUserClick={(): void => {
                if (onUserClick) onUserClick(user);
              }}
              id={`inline-image-${index}`}
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
            id="inline-images-extra-value"
          >
            {totalUserCount - data?.length} +
          </div>
        )}
      </div>
    </div>
  )
};

export default InlineImages;
