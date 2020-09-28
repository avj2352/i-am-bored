import React, {FunctionComponent} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchContainer: {
            width: `100%`,
            display: `flex`,
            flexDirection: `row`
        },
        searchIcon: {
            padding: `20px 5px 0px`
        },
        searchField: {
            width: `100%`,
            padding: 5
        }
    }),
);

const SearchBar: FunctionComponent = (props):JSX.Element => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.searchContainer}>
                <SearchIcon  className={classes.searchIcon}/>
                <TextField className={classes.searchField} id="input-with-icon-grid" label="Search Recipe..." />
            </div>
        </div>
    );
};

export default SearchBar;