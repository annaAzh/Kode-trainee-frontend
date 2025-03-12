import { FC } from 'react';
import { StyledAvatar } from '../EmployeeCard.styles';

const AVATAR_PLACEHOLDER = '/images/img_placeholder.png';

interface Props {
  avatarUrl?: string;
}

export const EmployeeImage: FC<Props> = ({ avatarUrl }) => {
  return (
    <StyledAvatar
      onError={(e) => (e.currentTarget.src = AVATAR_PLACEHOLDER)}
      src={avatarUrl || AVATAR_PLACEHOLDER}
      alt="avatar"
    />
  );
};
