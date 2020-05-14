/* React */
import React from 'react';

/* Components */
import { Styles } from './css';
import MTable from '../Shared/table';

/* Material-ui */
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

/* React-Draggable */
import Draggable from "react-draggable";

/* Constants */
import { TABLE_COMPONENT_TITLE, TABLE_TITLE, TABLE_COLUMS } from '../../Utilities/constants';

export default function MyTable({ state }) {

    /* Reducers data */
    const { outpostData } = state.dataReducer;

    return (
        <Draggable>
            <Paper style={Styles.paper}>

                <Typography style={Styles.title} variant="h5" >
                    {TABLE_COMPONENT_TITLE}
                </Typography>

                <Box style={Styles.tableContainer}>
                    <MTable
                        title={TABLE_TITLE}
                        columns={TABLE_COLUMS}
                        data={outpostData}
                    />
                </Box>

            </Paper>
        </Draggable>
    )
}