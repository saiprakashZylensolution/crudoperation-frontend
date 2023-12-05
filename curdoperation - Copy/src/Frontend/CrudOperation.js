import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Showallstudents from './Students/AllStudents.js';
import Show from './Students/Show.js';
import Update from './Students/Update.js';
import Delete from './Students/Delete.js';
import Create from './Students/Create.js';

function CrudOperation() {
  return (
    <>
        <Routes>
            <Route path='/' Component={Showallstudents}/>
            <Route path='/show/:id' Component={Show}/>
            <Route path='/update/:id' Component={Update}/>
            <Route path='/create' Component={Create}/>
            <Route path='/delete/:id' Component={Delete}/>
        </Routes>
    </>
  )
}

export default CrudOperation;