export interface AvatarPropType {
  avatarUrl?: string,
  name?: string,
  variant?: 'circular' | 'square' | 'rounded',
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
  variant?: 'circular' | 'square' | 'rounded',
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