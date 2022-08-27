import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListSearchState } from '../store'

export default function TodoSearchBar() {
    // function debounce(fn, delay) {
    //     console.log(fn)
    //     let timer;
    //     return (() => {
    //       clearTimeout(timer);
    //       timer = setTimeout(() => fn(), delay);
    //     })();
        
    //   };
    const [search,setSearch] = useRecoilState(todoListSearchState)

    const searchHandler = ({target:{value}})=>{
        setSearch(value)
    }
  return (
    <div>
        <input type="text" value={search} placeholder='Search' onChange={searchHandler}/>
    </div>
  )
}
