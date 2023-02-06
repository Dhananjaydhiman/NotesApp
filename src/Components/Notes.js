import React, { useState } from 'react'
import Shownotes from './Shownotes'
// import Showlistnotes from './Showlistnotes'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Deleteconfirmation from './Deleteconfirmation';

export const Usercontext = React.createContext();



const Notes = () => {
   const [user, setUser] = useState({ title: '', description: '' });
   const [list, setList] = useState([]);
   const [show, setShow] = useState();
   const [box, setBox] = useState(false);
   const [code, setCode] = useState();
   const [view, setView] = useState(true);

   const onchange = (event) => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
   }

   const Validate = () => {
      let title = user.title;
      let description = user.description;
      if (title.trim() === '' && description.trim() === '') {
         toast.warn('Fill all the fields');
      }
      else if (title.trim() === '') {
         toast.warn('Fill the title');
      }
      else if (description.trim() === '') {
         toast.warn('Fill the description');
      }
      else {
         let unique = new Date().getTime();
         let object = { id: unique, title: user.title, description: user.description }
         let data = [...list];
         data.push(object);
         setList(data);
         console.log(data);
         user.title = "";
         user.description = "";
         toast.success('Note added sucessfully');
      }
   }

   const Deletedata = (id) => {
      console.log(id);
      setBox(true);
      setCode(id);
   }


   const Deletetion = () => {
      let index = list.findIndex((object) => object.id === code);
      console.log(index);
      list.splice(index, 1);
      setList([...list]);
      console.log(list);
      toast.success('Note deleted sucessfully');
      setBox(false);
   }

   const SaveEditData = () => {
      let index = list.findIndex((object) => object.id === user.id);
      if (user.title.trim() === '' && user.description.trim() === '') {
         toast.warn('Fields cannot be blank');
      }
      else if (user.title.trim() === '') {
         toast.warn('Title cannot be empty!');
      }
      else if (user.description.trim() === '') {
         toast.warn('Description cannot be empty!');
      }
      else {
         let newdata = { id: user.id, title: user.title, description: user.description }
         list.splice(index, 1, newdata);
         setList(list);
         console.log(list);
         user.title = "";
         user.description = "";
         user.id = "";
         setShow(false);
         toast.success('Note edit sucessfully');
      }
   }

   return (
      <>
         <div id='form'>
            <h1 id='note'>NotesApp</h1>
            <div id='formchild'>
               <div id='child1'>
                  <label>Title</label><br />
                  <input type="text" name="title" id="title" placeholder='Enter your title' onChange={onchange} value={user.title} /> <br />
               </div>
               <div id='child2'>
                  <label>Description</label><br />
                  <textarea name='description' id='description' placeholder='Enter your description' onChange={onchange} value={user.description} /> <br />
               </div>
               <div id='child3'>
                  {show ?
                     (<button id='save' onClick={SaveEditData} >Edit your Note</button>) :
                     (<button id='add' onClick={Validate} >Add</button>)
                  }
               </div>
            </div>
            <div>
               {view ? (<button id='listview' onClick={() => { setView(false) }} > List View</button>) :
                  (<button id='gridview' onClick={() => { setView(true) }} > Grid View</button>)
               }
            </div>

         </div>
         <ToastContainer />
         <Usercontext.Provider value={{ setUser, list, Deletedata, setShow, view, setList }}>
            {/* <Shownotes setUser={setUser} list={list} Deletedata={Deletedata} setShow={setShow} /> */}
            {/* {view ? (<Shownotes />) : (<Showlistnotes />)} */}
            <Shownotes />
         </Usercontext.Provider>
         <Usercontext.Provider value={{ Deletetion, setBox, box }}>
            {/* <Deleteconfirmation Deletetion={Deletetion} setBox={setBox} box={box} /> */}
            <Deleteconfirmation />
         </Usercontext.Provider>
      </>
   )
}

export default Notes