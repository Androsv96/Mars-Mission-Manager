/* React */
import React, { useRef, useState } from 'react';

/* Components */
import { Styles } from './css';
import NoInternetConnection from '../NoInternetConnection/view';

/* Material-ui */
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Stop from '@material-ui/icons/Stop';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/* React-Draggable */
import Draggable from "react-draggable";

/* Constants */
import { VIDEO_URL, VIDEO_COMPONENT_TITLE, LOADING_VIDEO_FAILED } from '../../Utilities/constants';

export default function Video() {

    const video = useRef(null);
    const [playVideo, setPlayVideo] = useState(false);
    const [errorPlayingVideo, setErrorPlayingVideo] = useState(false);

    return (

        <Draggable>
            {
                errorPlayingVideo ?

                    <NoInternetConnection message={LOADING_VIDEO_FAILED} action={() => setErrorPlayingVideo(false)} />

                    :

                    <Paper style={Styles.paper}>
                        <Typography style={Styles.title} variant="h5" >
                            {VIDEO_COMPONENT_TITLE}
                        </Typography>

                        <Box style={Styles.videoContainer}>
                            <video src={VIDEO_URL} autoPlay={true} loop={true} ref={video} style={Styles.video} onError={() => setErrorPlayingVideo(true)} />
                        </Box>

                        <Box style={Styles.buttonsContainer}>
                            <Button onClick={() => handleClick()} style={Styles.videoButton}>{playVideo ? <PlayArrow /> : <Stop />}</Button>
                        </Box>
                    </Paper>

            }
        </Draggable >
    )

    function handleClick() {
        playVideo ? video.current.play() : video.current.pause();
        setPlayVideo(!playVideo);
    }

}