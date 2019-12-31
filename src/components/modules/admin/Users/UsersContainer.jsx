import React, { useState } from 'react';
import TableSorting from 'components/modules/admin/TableSorting';
import connect, { useUsersStore } from './store/config';
import { fetchUsers } from './helpers';

const Users = () => {
  const { store, dispatch } = useUsersStore();
  const { users } = store;

  useState(() => fetchUsers(dispatch));

  return <TableSorting rows={users} />;
};

export default connect(Users);
