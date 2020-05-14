/* XLSX */
import XLSX from 'xlsx';

/* Constants */
import { EMPTY_CELL_MSG } from './constants';

/* reads and return file data */
export const getWorkbookData = (file) => {

    return new Promise((done) => {
        let reader = new FileReader();
        var workbook;

        reader.onload = (file) => {
            let data = new Uint8Array(file.target.result);
            workbook = XLSX.read(data, { type: 'array' });
            done(workbook);
        };
        reader.readAsArrayBuffer(file);
    })
}

/* Converts file sheet data to array of objects */
export const convertSheetToJson = async (sheet) => {
    let data = XLSX.utils.sheet_to_json(sheet, { raw: false, });
    return data;
}


export const getAverageTemperature = async (data) => {

    let tempF = 0.0;
    let tempC = 0.0;

    data.forEach(currValue => {
        tempF += parseFloat(currValue.temp_F);
        tempC += parseFloat(currValue.temp_C);
    });
    tempF = tempF / data.length;
    tempC = tempC / data.length;

    return { Farenheit: parseInt(tempF), Celcius: parseInt(tempC) };
};


export const getRandomBackgroundColor = () => {
    let newColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${newColor}`;
}

export const hasSheetEmptyCells = async (sheetData) => {

    for (let index = 0; index < sheetData.length; index++) {
        if (Object.values(sheetData[index]).length < 8) { //expected data to be 8 length
            return (`${EMPTY_CELL_MSG} ${index + 1}.`);
        }
    }
    return false;

}



