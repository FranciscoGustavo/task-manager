import React, { FC } from 'react';
import {
  AppBar,
  Toolbar,
  Avatar,
  Hidden,
  IconButton,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AvatarImage from '../../assests/img/avatar.svg';
import { useStyles } from './styles';

type HeaderProps = {
  onMobileNavOpen: () => void;
};
const Header: FC<HeaderProps> = ({ onMobileNavOpen }) => {
  const classes = useStyles();

  return (
    <AppBar elevation={0}>
      <Toolbar>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6">Task Manager</Typography>
        <div className={classes.grow} />
        <Avatar src={AvatarImage} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
