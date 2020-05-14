/* react */
import React from 'react';

/* Material-ui */
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Replay from '@material-ui/icons/Replay';

/* Constants */
import { VIDEO_COMPONENT_TITLE } from '../../Utilities/constants';

/* Components */
import { Styles } from './css';

/* React-Draggable */
import Draggable from "react-draggable";

export default function NoInternetConnection({ message, action }) {
    return (
        <Draggable>
            <Paper style={Styles.paper}>

                <Typography style={Styles.title} variant="h5" >
                    {VIDEO_COMPONENT_TITLE}
                </Typography>

                <Box style={Styles.messageContainer}>
                    {message}  <Button onClick={action}><Replay /></Button>
                </Box>

            </Paper>
        </Draggable >
    )
}