import React from 'react';
import { AvatarPropType } from './types';
import classes from './styles.module.scss';
import defaultImage from './assets/default-image.svg';
import { Elements } from './constants';
import { getStyles } from './utils/utils';

const Avatar = (props: AvatarPropType): JSX.Element => {
  const {
    avatarUrl = defaultImage,
    elivateOnHover,
    nameOnHover,
    onUserClick,
    name,
    styles = {}
  } = props;
  return (
    <div
      className={classes.avatarContainer}
      onClick={onUserClick}
      style={{
        cursor: onUserClick && 'pointer'
      }}
    >
      <img
        src={avatarUrl}
        className={(elivateOnHover && classes.elivateOnHover) || ''}
        style={getStyles(Elements.Avatar, styles)}
      />
      {nameOnHover && name &&(
        <div
          className={classes.name}
          style={getStyles(Elements.Name, styles)}
        >
          {name}
        </div>
      )}
    </div>
  )
};

export default Avatar;