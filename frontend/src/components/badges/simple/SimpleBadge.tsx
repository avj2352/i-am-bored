import React, {FunctionComponent, useState} from 'react';
// material
import {Theme} from "@material-ui/core/styles";
import {Avatar, Chip, makeStyles, Tooltip} from "@material-ui/core";
//styles
const useStylesBootstrap = makeStyles((theme: Theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
    },
    chip: {
        margin: theme.spacing(1),
    }
}));

interface ISimpleBadgeProps {
    title: string;
    description: string;
}

const SimpleBadge: FunctionComponent<ISimpleBadgeProps> = (props): JSX.Element => {
    const classes = useStylesBootstrap();
    const { title, description } = props;
    // states
    const [isOpen, toggleOpen] = useState(false);
    // event
    const toggleTooltip = () => toggleOpen((prev: boolean) => !prev);

    return <React.Fragment>
        <Tooltip
            open={isOpen}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={description}
            arrow
            placement="top"
            classes={classes}>
            <Chip
                avatar={<Avatar>{title.substring(0,1).toUpperCase()}</Avatar>}
                label={title}
                clickable
                onClick={toggleTooltip}
                className={classes.chip}
                color="secondary"/>
        </Tooltip>
    </React.Fragment>
}

export default SimpleBadge;