import React from "react";

import defaultImage from "../../assets/default-avatar.svg";
import { Elements } from "./constants";
import { getStyles } from "./utils/utils";
import { AvatarPropType } from "./types";
import classes from "./styles.module.scss";

const Avatar = (props: AvatarPropType): JSX.Element => {
  const {
    avatarUrl,
    defaultAvatarImage = defaultImage,
    variant,
    renderComponent,
    size,
    elevateOnHover,
    showNameOnHover,
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
        cursor: onUserClick && "pointer"
      }}
      id={id}
    >
      <img
        className={`${variant && classes[variant]} ${
          elevateOnHover && classes.elevateOnHover
        }`}
        src={avatarUrl || defaultAvatarImage}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          ...getStyles(Elements.Avatar, styles)
        }}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
          e.currentTarget.src = defaultAvatarImage;
        }}
        id="avatar-image"
        alt="image"
      />
      {renderComponent ? (
        <div className={classes.name}>{renderComponent()}</div>
      ) : (
        showNameOnHover &&
        name && (
          <div
            id="avatar-name"
            className={classes.name}
            style={{ top: `${size}px`, ...getStyles(Elements.Name, styles) }}
          >
            {name}
          </div>
        )
      )}
    </div>
  );
};

export default Avatar;
