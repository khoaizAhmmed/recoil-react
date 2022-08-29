import React from 'react'
import axios from 'axios'
import { useRecoilState } from 'recoil'

import { spreadsheetId, range,sheetData } from './store'
export default function ViewSheets() {

    
const clientID= '442238712165-mv6dg02sridqn7ao5tvi05insvqr94ev.apps.googleusercontent.com'
const redirectUrl = 'http://localhost:3000'

const clientSecret = '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'

    const [sheetId,setSheetId] = useRecoilState(spreadsheetId)
    const [sheetRange,setSheetRange] = useRecoilState(range)
    const [sheetsData,setSheetsData] = useRecoilState(sheetData)

    const getGoogleSheetsData = async()=>{
    const authCodeUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientID}`

    const authUrlCallback = 'https://localhost:8000/'

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?
    scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&
    access_type=offline&
    include_granted_scopes=true&
    response_type=code&
    state=state_parameter_passthrough_value&
    redirect_uri=https%3A//oauth2.example.com/code&
    client_id=${clientID}`

        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetRange}`
        const getSheets = await axios.get(authUrlCallback)
        const data  = await getSheets.data
        console.log(data)
    }


  return (
    <div>
        <h1>ViewSheets</h1>
        <input placeholder='Id' onChange={(e)=>{setSheetId(e.target.value)}}/>
        <input placeholder='Range' onChange={(e)=>{setSheetRange(e.target.value)}}/>
        <button onClick={getGoogleSheetsData} >view</button>

        {/* {sheetsData?.map(d=>{

        })} */}
    </div>
  )
}
