/* Redux-actions */
import { OUTPOST_DATA, TEMPETURE_DATA } from '../Actions';

const initialState = {
    outpostData: [],
    chartData: {
        datasets: [],
        labels: []
    },

};

export default function DataReducer(state = initialState, action) {

    switch (action.type) {

        case OUTPOST_DATA:
            return {
                ...state,
                outpostData: action.payload.data
            }

        case TEMPETURE_DATA:
            return {
                ...state,
                chartData: action.payload.data
            }

        default:
            return state
    }

}