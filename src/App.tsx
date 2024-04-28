import { Admin, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import { comments, posts } from './resources';

export const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource {...posts} />
      <Resource {...comments} />
    </Admin>
  );
};
