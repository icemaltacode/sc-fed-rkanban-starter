import { useState } from 'react';
import './App.css';

const DEFAULT_COLUMNS = ['Backlog', 'In Progress', 'Done'];

function Item({ uuid, children }) {

  const itemStyle = {
    backgroundColor: '#B3AA00',
    marginTop: "5px",
    marginBottom: "5px",
    borderRadius: "5px",
    padding: "2px",
    color: "white",
    minHeight: "50px",
    cursor: "grab"
  }
}

function Column({ colName, colWidth, items, addItemHandler, moveItemHandler, dropItemHandler }) {
 
  const columnStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '10px',
    marginTop: '10px',
    minHeight: 'calc(100vh - 160px)',
    width: `${colWidth}px`,
    display: 'flex',
    flexDirection: 'column'
  }

  const headerStyle = {
    backgroundColor: '#8E4DFF',
    borderRadius: '5px',
    color: 'white',
    padding: '5px',
  }

  const newItemStyle = {
    backgroundColor: '#B3AA00',
    borderRadius: '5px',
    padding: '5px',
    marginTop: '5px'
  }

  const dropAreaStyle = {
    border: "1px dashed black",
    borderRadius: "5px",
    marginTop: "5px",
    minHeight: "50px",
    backgroundColor: "rgba(179, 170, 0, 0.5)",
  }
  
}

function Board( { columns }) {

  const boardStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }

}

function AddColumn( { columnHandler }) {

  const addColumnStyle = {
    minHeight: '150px',
    paddingTop: '10px'
  }

}

function App() {
  return <div className="container-fluid">
    <div className="rounded-container">
      <h3><i className='bi-kanban' /> React Kanban</h3>
    </div>
  </div>
}

export default App;
