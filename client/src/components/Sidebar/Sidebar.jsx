import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Icon
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
// styles
import { ListWrapper, SideBarNav, ToolbarIcon } from './sideBarStyles';

const routes = [
  { icon: 'books', link: '/', label: 'Books' },
  { icon: 'add', link: '/add', label: 'Add book' }
];

const SideBar = ({ open, handleClose }) => {
  const history = useHistory();

  const handleChangeRoute = route => {
    handleClose();
    setTimeout(() => history.push(route), 10);
  };

  return (
    <SideBarNav variant='permanent' open={open}>
      <ToolbarIcon>
        <IconButton onClick={handleClose}>
          <Close style={{ color: '#fff' }} />
        </IconButton>
      </ToolbarIcon>
      <Divider />
      <ListWrapper>
        {routes.map(route => (
          <ListItem
            key={route.label}
            style={{ cursor: 'pointer' }}
            onClick={() => handleChangeRoute(route.link)}
          >
            <ListItemIcon>
              <Icon style={{ color: '#fff' }}>{route.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={route.label} />
          </ListItem>
        ))}
      </ListWrapper>
    </SideBarNav>
  );
};

export default React.memo(SideBar);
