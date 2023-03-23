export interface AvatarPropType {
  avatarUrl?: string,
  name?: string,
  elivateOnHover?: boolean,
  nameOnHover?: boolean,
  onUserClick?: () => void,
  styles?: StyleProp,
  id?: string
}

export interface InlineImagesPropType {
  data: AvatarPropType[],
  totalUserCount?: number,
  elivateOnHover?: boolean,
  nameOnHover?: boolean,
  onUserClick?: (user: AvatarPropType) => object,
  spaceBetweenPics?: number,
  styles?: StyleProp
}

export type StyleProp = {
  Avatar?: () => object ,
  ExtraValue?: () => object,
  Name?: () => object
}