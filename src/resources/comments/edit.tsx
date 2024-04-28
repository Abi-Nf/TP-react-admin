import { Edit as E, SimpleForm, TextInput } from 'react-admin';

export const Edit = () => {
  return (
    <E>
      <SimpleForm>
        <TextInput name="comment id" label="Id" source="id" disabled />
        <TextInput name="name" label="Name" source="name" />
        <TextInput name="email" label="Email" source="email" />
        <TextInput name="body" label="Body" source="body" />
      </SimpleForm>
    </E>
  );
};
