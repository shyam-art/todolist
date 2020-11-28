import React from 'react';
import './list-item.css';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
           <ol>
               <li id="content">
                   <div id="listitem">
                       <span id="text">
                    {item.text}
                    </span>
                    <input type="button" id="remove" value="remove" onClick={() => {
                     props.deleteItem(item.key)}} />
                     </div>
                </li>
            </ol>
            <hr/>
    </div>})
    return <div>
        {listItems}
    </div>;
  }

  export default ListItems;