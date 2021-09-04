// nanoid
import { nanoid } from 'nanoid';

import { avatarList } from '@/utils/avatarList';

const BASE_URL = process.env.NEXT_PUBLIC_AVATAR_API_URL;

export const randomAvatar = () => {
  const seed = nanoid(6);
  const avatarType = avatarList[Math.floor(Math.random() * avatarList.length)];
  const avatar = `${BASE_URL}/${avatarType}/${seed}.svg`;

  return avatar;
};
