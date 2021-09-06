// axios
import axios from 'axios';

// nanoid
import { nanoid } from 'nanoid';

import { avatarList } from '@/utils/avatarList';

const BASE_URL = process.env.NEXT_PUBLIC_AVATAR_API_URL;

export const randomAvatar = async () => {
  const seed = nanoid(6);
  const avatarType = avatarList[Math.floor(Math.random() * avatarList.length)];
  const avatarUrl = `${BASE_URL}/${avatarType}/${seed}.svg`;

  const response = await axios.get(avatarUrl);
  const avatar = response.config.url;

  return avatar;
};
