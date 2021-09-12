// moment
import moment from 'moment';

export const convertTime = (date: string) => {
  return (
    moment(date).fromNow().charAt(0).toUpperCase() +
    moment(date).fromNow().slice(1)
  );
};
