import React, { FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useStyles } from './styles';

const ITEMS = [
  { id: 1, label: 'Overview', href: '/', Icon: HomeIcon },
  { id: 2, label: 'Tasks', href: '/tasks', Icon: AssignmentIcon },
  { id: 2, label: 'Board', href: '/board', Icon: DashboardIcon },
];

const SidebarNav: FC = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      {ITEMS.map(({ id, label, href, Icon }) => (
        <Button
          key={id}
          startIcon={<Icon />}
          component={RouterLink}
          to={href}
          className={classes.item}
          activeClassName={classes.activeItem}
          exact={true}
        >
          {label}
        </Button>
      ))}
    </nav>
  );
};

export default SidebarNav;
