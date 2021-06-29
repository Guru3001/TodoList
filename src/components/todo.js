import React, { useState } from 'react';
import todo from "../images/list.svg";

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setitems] = useState ([]);
    const addItem = () => {
        if (!inputData){}
        else{
        setitems([...items, inputData])
        setInputData('')
    }
    }
    const deleteItem = (id) => {
            console.log(id);
            const updatedItems = items.filter((elem, ind) => {
                return ind !== id;
        })

        setitems(updatedItems);
    }

    const remove = () => {
        setitems([]);
    }

    return(
        <>
            <div className="main-div">
                <div className= "child-div">
                    <figure>
                        <img src={todo} alt="todologo"/>
                        <figcaption>Add Your List Name ✌️</figcaption>
                    </figure>

                    <div className="aaddItems">
                        <input type= "text" placeholder= "✍️ Add Items"
                            value= {inputData}
                            onChange= {(e) => setInputData(e.target.value)}
                        />
                        <i className="fa fa-plus add-btn" title="Add Item" onClick= {addItem}></i>
                    </div>
                    <div className="showItems">
                        {
                            items.map((elem, ind) => {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h1>{elem}</h1>
                                        <i className="far fa-trash-alt add-btn" title="Delete Item" onClick= {() => deleteItem(ind)}></i>
                                    </div>
                                )
                            })
                        }
                        
                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={remove}><span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;