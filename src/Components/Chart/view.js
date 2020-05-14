/* React */
import React from 'react';

/* Components */
import { Styles } from './css';

/* Material-ui */
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

/* chartjs-2 */
import { HorizontalBar } from 'react-chartjs-2';

/* React-Draggable */
import Draggable from "react-draggable";

/* Constants */
import { CHART_COMPONENT_TITLE } from '../../Utilities/constants';

export default function MyChart({ state }) {

    /* reducers data */
    const { chartData } = state.dataReducer;


    return (
        <Draggable>
            <Paper style={Styles.paper}>
                <Typography style={Styles.title} variant="h5" >
                    {CHART_COMPONENT_TITLE}
                </Typography>
                <Box style={Styles.chartContainer}>
                    <HorizontalBar data={chartData} height={100} options={{ maintainAspectRatio: false }} />
                </Box>

            </Paper>
        </Draggable>
    )
}