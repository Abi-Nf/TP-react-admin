import {
  Datagrid,
  EditButton,
  EmailField,
  List as L,
  NumberField,
  ReferenceField,
  ShowButton,
  TextField,
} from 'react-admin';

export const List = () => {
  return (
    <L>
      <Datagrid>
        <ReferenceField label="Post ID" reference="posts" source="postId" />
        <NumberField label="Comment ID" source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </L>
  );
};
