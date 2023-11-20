export interface AvatarPropType {
  avatarUrl?: string,
  name?: string,
  variant?: 'circular' | 'square' | 'rounded',
  size?: number,
  renderComponent?: () => JSX.Element,
  elevateOnHover?: boolean,
  showNameOnHover?: boolean,
  onUserClick?: () => void,
  styles?: StyleProp,
  id?: string
}

export interface AvatarDataType {
  avatarUrl?: string,
  name?: string,
  renderComponent?: () => JSX.Element
}

export interface InlineImagesPropType {
  data: AvatarDataType[],
  totalUserCount?: number,
  variant?: 'circular' | 'square' | 'rounded',
  elevateOnHover?: boolean,
  showNameOnHover?: boolean,
  onUserClick?: (user: AvatarDataType) => object,
  onCountClick?: () => void,
  spaceBetweenPics?: number,
  size?: number,
  styles?: StyleProp
}

export type StyleProp = {
  Avatar?: () => object ,
  ExtraCount?: () => object,
  Name?: () => object
}