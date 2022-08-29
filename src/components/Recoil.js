import React from 'react'
import { atom,useSetRecoilState, useRecoilValue } from 'recoil'


export default function Recoil() {

    const myName = atom({
        key:'myName',
        default: 'i am k'
    })
    
    // const [name,setName] = useRecoilState(myName)
    const named = useRecoilValue(myName)
    const setNamedState = useSetRecoilState(myName)
    // const resetStateName = useResetRecoilState(myName)


    const onchangeHandler = (e)=>{
        setNamedState(e.target.value)
    }

  return (
    <div>
        <h1>{named}</h1>
        <input placeholder='type name' onChange={onchangeHandler}/>
    </div>
  )
}
