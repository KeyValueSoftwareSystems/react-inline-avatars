export interface AvatarPropType {
  avatarUrl?: string,
  name?: string,
  variant?: string,
  size?: number,
  elevateOnHover?: boolean,
  showNameOnHover?: boolean,
  onUserClick?: () => void,
  styles?: StyleProp,
  id?: string
}

export interface InlineImagesPropType {
  data: AvatarPropType[],
  totalUserCount?: number,
  variant?: string,
  elevateOnHover?: boolean,
  showNameOnHover?: boolean,
  onUserClick?: (user: AvatarPropType) => object,
  onCountClick?: () => void,
  spaceBetweenPics?: number,
  size?: number;
  styles?: StyleProp
}

export type StyleProp = {
  Avatar?: () => object ,
  ExtraCount?: () => object,
  Name?: () => object
}