import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  IconButton,
  List,
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

const SideBar = () => {
  // const [open, setOpen] = true;
  return (
    <SideBarNav variant='permanent' open={false}>
      <ToolbarIcon>
        <IconButton>
          <Close style={{ color: '#fff' }} />
        </IconButton>
      </ToolbarIcon>
      <Divider />
      <ListWrapper>
        {routes.map(route => (
          <ListItem key={route.label} component={Link} to={route.link} button>
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
