/* React */
import React from 'react';

/* Components */
import { Styles } from './css';

/* Material-ui */
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/* data structure */
import { images } from '../../Utilities/dataStructure';

/* React-Draggable */
import Draggable from "react-draggable";

/* Slider */
import SimpleImageSlider from "react-simple-image-slider";

/* Constants */
import { CARROUSEL_COMPONENT_TITLE } from '../../Utilities/constants';

export default function Carrousel() {

    return (
        <Draggable>
            <Paper style={Styles.paper}>
                <Typography style={Styles.title} variant="h5" > {CARROUSEL_COMPONENT_TITLE} </Typography>

                <SimpleImageSlider
                    width={Styles.carrousel.width}
                    height={Styles.carrousel.height}
                    images={images}
                />
            </Paper>
        </Draggable>
    )

}