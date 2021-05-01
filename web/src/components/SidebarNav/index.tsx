import React, { FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import { useStyles } from './styles';

const ITEMS = [
  { label: 'Overview', href: '/', Icon: HomeIcon },
  { label: 'Tasks', href: '/tasks', Icon: AssignmentIcon },
];

const SidebarNav: FC = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Task Manager
      </Typography>

      {ITEMS.map(({ label, href, Icon }) => (
        <Button
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
