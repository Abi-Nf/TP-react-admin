import { EditGuesser, ShowGuesser } from 'react-admin';
import { List } from './list';

export const posts = {
  name: 'posts',
  list: List,
  edit: EditGuesser,
  show: ShowGuesser,
};
