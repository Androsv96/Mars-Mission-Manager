export const OUTPOST_DATA = "OUTPOST_DATA";
export const TEMPETURE_DATA = "TEMPETURE_DATA";

export const setOutpostData = (payload) => ({
    type: OUTPOST_DATA,
    payload
});

export const setTempetureData = (payload) => ({
    type: TEMPETURE_DATA,
    payload
});