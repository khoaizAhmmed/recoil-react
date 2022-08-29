import { atom } from "recoil";

export const spreadsheetId = atom({
    key:'spreadsheetId',
    default:''
});

export const  range = atom({
    key:'range',
    default:''
})

export const  sheetData = atom({
    key:'sheetData',
    default:[]
})