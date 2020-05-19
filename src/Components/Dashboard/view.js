/* React */
import React, { useState } from "react";

/* Components */
import { Styles } from "./css";
import ChartContainer from '../Chart/';
import CarrouselContainer from '../Carrousel/view';
import VideoContainer from '../Video';
import TableContainer from '../Table/';

/* Material-ui */
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Publish from "@material-ui/icons/Publish";

/* functions */
import { getWorkbookData, convertSheetToJson, getAverageTemperature, getRandomBackgroundColor, hasSheetEmptyCells } from '../../Utilities/functions';

/* Constants */
import {
  ALLOWED_INPUT_EXTENSIONS, ALLOWED_EXTENSIONS, WRONG_FILE_EXTENSION_SELECTED, DEGREES_LABEL, GREETINGS, UPLOAD_FILE_MSG,
  FILE_EMPTY, DASHBOARD_TITLE
} from '../../Utilities/constants';

/* Chart data structure */
import { datasetsStructure } from '../../Utilities/dataStructure';

export default function Dashboard({ setOutpostData, setTempetureData }) {

  const [isFileSelected, setIsFileSelected] = useState(false);

  let tempData = localStorageGet("data", []);

  if (!isFileSelected) {

    return (

      <Paper style={Styles.welcomeContainer}>

        <Typography variant="h3">
          {GREETINGS}
        </Typography>

        <Typography variant="h5">
          {UPLOAD_FILE_MSG}
        </Typography>

        <input
          accept={ALLOWED_INPUT_EXTENSIONS}
          style={Styles.input}
          id="inputFile"
          type="file"
          onChange={(e) => onFileSelected(e)}
        />
        <label htmlFor={"inputFile"}>
          <Button style={Styles.button} variant="contained" color="primary" component="span"><Publish /></Button>
        </label>

        Last files uploaded
        {
          tempData.map((currValue, index) => {
            return <li key={index} onClick={() => onStoredFileSelected(index)}>{currValue.fileName}</li>
          })
        }

      </Paper >
    )

  }


  return (
    <Box style={Styles.mainContainer}>

      <AppBar position="static" style={Styles.appbar}>
        <Box style={Styles.dashboardTitle}>
          <Typography variant="h4">{DASHBOARD_TITLE}</Typography>
        </Box>
      </AppBar>

      <Box style={Styles.componentsContainer}>
        <Box style={Styles.subContainer}>

          <Box style={Styles.components}><ChartContainer /></Box>
          <Box style={Styles.components}><CarrouselContainer /></Box>

        </Box>

        <Box style={Styles.subContainer}>

          <Box style={Styles.components}><VideoContainer /></Box>
          <Box style={Styles.components}><TableContainer /></Box>

        </Box>
      </Box>

    </Box >
  )

  async function onFileSelected(e) {

    let input = document.getElementById(e.target.id);
    let fileName = input.files[0].name;
    let splittedFileName = fileName.split(".");

    if (!ALLOWED_EXTENSIONS.includes(splittedFileName[splittedFileName.length - 1])) return alert(WRONG_FILE_EXTENSION_SELECTED);

    let workbook = await getWorkbookData(input.files[0]);
    let sheetNames = workbook.SheetNames;
    let data = await convertSheetToJson(workbook.Sheets[sheetNames[0]]);

    if (data.length === 0) {
      input.value = ""; //reset input value so user is avaible to select the same file again and trigger the event.
      return alert(FILE_EMPTY);
    }

    let hasEmptyCells = await hasSheetEmptyCells(data);
    if (hasEmptyCells) {
      input.value = "";
      return alert(hasEmptyCells);
    }
    let averageTemperatures = await getAverageTemperature(data);
    setAverageTempeture(averageTemperatures);

    setOutpostData({ data });
    setIsFileSelected(true);

    let dataAlreadyOnStorage = localStorageGet("data", []);
    localStorageSet("data", [...dataAlreadyOnStorage, { fileName, data }]);

  }


  function localStorageSet(key, value) {
    if (value.toJS)
      value = value.toJS()
    if (global.localStorage) {
      global.localStorage.setItem(key, JSON.stringify(value))
      return true
    }
    return false
  }

  function localStorageGet(key, default_value) {
    if (global.localStorage) {
      return JSON.parse(global.localStorage.getItem(key)) || default_value || null
    }
    return default_value
  }

  async function onStoredFileSelected(filePosition) {
    let data = localStorageGet("data", []);
    let averageTemperatures = await getAverageTemperature(data[filePosition].data);
    setAverageTempeture(averageTemperatures);
    setIsFileSelected(true);
    setOutpostData({ data: data[filePosition].data });
  }

  function setAverageTempeture(data) {
    let newDataStructure = { labels: [DEGREES_LABEL], datasets: [] };

    Object.entries(data).forEach(currTempeture => {

      let randomColor = getRandomBackgroundColor();

      newDataStructure.datasets.push({
        ...datasetsStructure,
        label: currTempeture[0],
        data: [currTempeture[1]],
        backgroundColor: randomColor,
        pointBorderColor: randomColor,
      });

    });

    setTempetureData({ data: newDataStructure });

  }

}