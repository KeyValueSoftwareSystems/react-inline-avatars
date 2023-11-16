import React from "react";
import { v4 } from "uuid";

import {
  DEFAULT_AVATAR_SIZE,
  DEFAULT_SPACE_BETWEEN_PICS,
  Elements
} from "./constants";
import { getStyles } from "./utils/utils";
import { AvatarDataType, InlineImagesPropType } from "./types";
import Avatar from "./Avatar";
import classes from "./styles.module.scss";

const InlineImages = (props: InlineImagesPropType): JSX.Element => {
  const {
    data,
    totalUserCount,
    elevateOnHover,
    showNameOnHover,
    onUserClick,
    onCountClick,
    size = DEFAULT_AVATAR_SIZE,
    variant = 'circular',
    spaceBetweenPics = DEFAULT_SPACE_BETWEEN_PICS,
    styles = {}
  } = props;

  return (
    <div className={classes.imagesContainer} >
      {data?.map((user: AvatarDataType, index: number) => (
        <div
          key={v4()}
          className={classes.eachImage}
          style={{
            left: `${index * spaceBetweenPics}px`
          }}
          id="inline-images"
        >
          <Avatar
            avatarUrl={user.avatarUrl}
            name={user.name}
            elevateOnHover={elevateOnHover}
            showNameOnHover={showNameOnHover}
            onUserClick={(): void => {
              if (onUserClick) onUserClick(user);
            }}
            variant={variant}
            size={size}
            id={`inline-image-${index}`}
            styles={styles}
          />
        </div>
      ))}
      {totalUserCount && totalUserCount > data?.length && (
        <div
          className={`${classes.eachImage} ${classes.extraCount} ${elevateOnHover && classes.elevateOnHover}
            ${classes[variant]}`}
          style={{
            left: `${data?.length * (spaceBetweenPics)}px`,
            width: `${size}px`,
            height: `${size}px`,
            ...getStyles(Elements.ExtraCount, styles)
          }}
          onClick={onCountClick}
          id="inline-images-extra-count"
        >
          {totalUserCount - data?.length} +
        </div>
      )}
    </div>
  );
};

export default InlineImages;
