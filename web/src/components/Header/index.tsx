import React, { FC } from 'react';
import { AppBar, Toolbar, Avatar, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AvatarImage from '../../assests/img/avatar.svg';
import { useStyles } from './styles';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={classes.grow} />
        <Avatar src={AvatarImage} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
