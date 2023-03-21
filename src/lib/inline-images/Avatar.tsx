import React from 'react';
import { AvatarPropType } from './types';
import classes from './styles.module.scss';
import { Elements } from './constants';
import { getStyles } from './utils/utils';

const Avatar = (props: AvatarPropType): JSX.Element => {
  const {
    avatarUrl,
    elivateOnHover,
    nameOnHover,
    onUserClick,
    name,
    styles = {},
    id
  } = props;
  return (
    <div
      className={classes.avatarContainer}
      onClick={onUserClick}
      style={{
        cursor: onUserClick && 'pointer'
      }}
      id={id}
    >
      <img
        className={(elivateOnHover && classes.elivateOnHover) || ''}
        style={
          {
            ...getStyles(Elements.Avatar, styles),
            content: avatarUrl && `url(${avatarUrl})`
          }
        }
        onError={(e:React.SyntheticEvent<HTMLImageElement, Event>): void => {
          e.currentTarget.src = ''
        }}
        alt=""
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