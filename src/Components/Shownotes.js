import React, { useContext } from 'react'
import { Usercontext } from './Notes'
import { useRef } from 'react';

const Shownotes = () => {
   const { setUser, list, Deletedata, setShow, view, setList } = useContext(Usercontext);

   const dragItem = useRef();
   const dragOverItem = useRef();

   const dragStart = (e, position) => {
      dragItem.current = position;
      console.log(e.target.innerHTML);
   };

   const dragEnter = (e, position) => {
      dragOverItem.current = position;
      console.log(e.target.innerHTML);
   };

   const drop = (e) => {
      const copyListItems = [...list];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setList(copyListItems);
   };

   const editdata = (item) => {
      console.log(item);
      setUser(item);
      setShow(true);
   }

   return (
      <>

         <div className={view ? 'Gridview' : 'ListView'}>
            {list?.map((item, index) => (
               <div key={item.id} className={view ? 'parent' : 'parent2'}
                  onDragStart={(e) => dragStart(e, index)}
                  onDragEnter={(e) => dragEnter(e, index)}
                  onDragEnd={drop} draggable>
                  <div className={view ? 'title' : 'title2'}><h3>{item.title}</h3></div>
                  <div className={view ? 'description' : 'description2'}>{item.description}</div>
                  <div id='btns' className={view ? 'parentBtn' : 'parentBtn2'} >
                     <button onClick={() => { editdata(item) }} className={view ? 'editBtn' : 'editBtn2'} ><i class="fa-regular fa-pen-to-square"></i></button>
                     <button onClick={() => { Deletedata(item.id) }} className={view ? 'deleteBtn' : 'deleteBtn2'} ><i class="fa-regular fa-trash-can"></i></button></div>
               </div>
            ))}
         </div>
      </>
   )
}

export default Shownotes