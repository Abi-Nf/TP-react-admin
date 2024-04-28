import {
  Datagrid,
  List as L,
  NumberField,
  ReferenceField,
  ReferenceManyField,
  ReferenceOneField,
  TextField,
} from 'react-admin';

export const List = () => {
  return (
    <L>
      <Datagrid>
        <NumberField label="Id" source="id" />
        <TextField label="Tile" source="title" />
        <ReferenceField label="Username" source="userId" reference="users">
          <TextField label="Username" source="username" />
        </ReferenceField>
        <ReferenceField label="Comment" source="id" reference="comments" />
      </Datagrid>
    </L>
  );
};
