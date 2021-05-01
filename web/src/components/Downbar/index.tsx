import React, { FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Drawer, Hidden, Button } from '@material-ui/core';
import { useStyles } from './styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';

type DownbarProps = {
  onMobileNavOpen: () => void;
};

const ITEMS = [
  { label: 'Overview', href: '/', Icon: HomeIcon },
  { label: 'Tasks', href: '/tasks', Icon: AssignmentIcon },
];

const Downbar: FC<DownbarProps> = ({ onMobileNavOpen }) => {
  const classes = useStyles();

  return (
    <Hidden mdUp>
      <Drawer
        anchor="bottom"
        variant="permanent"
        open={true}
        classes={{
          paper: classes.drawer,
        }}
      >
        <nav className={classes.nav}>
          {ITEMS.map(({ label, href, Icon }) => (
            <Button
              startIcon={<Icon />}
              component={RouterLink}
              to={href}
              exact={true}
              className={classes.item}
              activeClassName={classes.activeItem}
            >
              {label}
            </Button>
          ))}
          <Button
            startIcon={<AppsIcon />}
            onClick={onMobileNavOpen}
            className={classes.item}
          >
            Menu
          </Button>
        </nav>
      </Drawer>
    </Hidden>
  );
};

export default Downbar;
