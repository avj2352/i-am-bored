import React, {FunctionComponent, useEffect } from 'react';
// material
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// router
import { useHistory } from 'react-router-dom';
import {getUserDetails} from "../../common/async/AsyncCalls";

interface IMenuOptionProps {
    label: string;
    event: (data: any | null) =>  void;
};

const ITEM_HEIGHT = 48;

const MenuDropdown: FunctionComponent = (props) => {
    const history = useHistory();
    // event handlers
    const handleLogin = (data: any) => {
        const location = {
            pathname: '/login'
        };

        history.push(location);
    };

    const routeToAbout = () => {
        const location = {
            pathname: '/about'
        };
        history.push(location);
    };

    // menu options list
    const options: IMenuOptionProps[] = [
        {
            label: 'Sign In',
            event: handleLogin
        },
        {
            label: 'About',
            event: routeToAbout
        }    
    ];
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Testing - getUserDetails
    useEffect(()=>{
        getUserDetails()
            .then((res: any) => console.log('user details is: ', res))
            .catch((err: any) => console.log('Error fetching user details: ', err));
    },[]);

    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((el: IMenuOptionProps, index: number) => (
                    <MenuItem key={index} onClick={el.event}>
                        {el.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default MenuDropdown;