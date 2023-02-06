import React, { useContext } from 'react'
import { Usercontext } from './Notes'

const Showlistnotes = () => {
   const { setUser, list, Deletedata, setShow } = useContext(Usercontext);

   const editdata = (item) => {
      console.log(item);
      setUser(item);
      setShow(true);
   }

   return (
      <>
         <div style={{ marginTop: '50px', flexWrap: 'wrap' }}>
            {list?.map((item) => (
               <div key={item.id} style={{ background: 'lightseagreen', width: '80%', margin: '8px 100px 8px 100px', padding: '15px', wordBreak: 'break-all', position: 'relative', borderRadius: '5px', display: 'flex' }}>
                  <div style={{ width: '15% ' }}><h3>{item.title}</h3></div>
                  <div style={{ marginTop: '8px', padding: '2px', width: '80%' }}>{item.description}</div>
                  <div id='btns' style={{ float: 'right', marginTop: '-75px', marginRight: '-10px', padding: '2px', position: 'absolute', right: '15px', top: '82px' }}>
                     <button onClick={() => { editdata(item) }} style={{ background: 'lightseagreen', border: 'none', fontSize: '20px' }} ><i class="fa-regular fa-pen-to-square"></i></button>
                     <button onClick={() => { Deletedata(item.id) }} style={{ background: 'lightseagreen', border: 'none', fontSize: '20px' }}><i class="fa-regular fa-trash-can"></i></button></div>
               </div>
            ))
            }
         </div>
      </>
   )
}

export default Showlistnotes;


