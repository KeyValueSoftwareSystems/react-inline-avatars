export interface AvatarPropType {
  avatarUrl?: string,
  name?: string,
  elivateOnHover?: boolean,
  nameOnHover?: boolean,
  onUserClick?: function,
  styles?: StyleProp,
  id?: string
}

export interface InlineImagesPropType {
  data: AvatarPropType[],
  totalUserCount?: number,
  elivateOnHover?: boolean,
  nameOnHover?: boolean,
  onUserClick?: (user: AvatarPropType) => {},
  spaceBetweenPics?: number,
  styles?: StyleProp
}

export type StyleProp = {
  Avatar?: () => {},
  ExtraValue?: () => {},
  Name?: () => {}
}