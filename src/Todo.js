import React, { useState } from "react";
// import { Input } from 'react-rainbow-components'

export default function Todo() {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);

  function addItem() {
    if (!inputData) {
    } else {
      setItem([...item, inputData]);
      setInputData("");
    }
  }
  function delItem(id) {
    const updateItems = item.filter((ele, ind) => {
      return ind !== id;
    });
    setItem(updateItems);
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <div className="img-span">
            <img
              className="todo-img"
              src="https://thumbs.dreamstime.com/b/todo-list-13838958.jpg"
              alt=""
            />
          </div>
          <div className="todo-items">
            <input
              type="text"
              placeholder="add item..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />

            <i
              style={{ color: "black" }}
              class="fa-solid fa-plus"
              onClick={addItem}
            ></i>
          </div>
          {item.map((ele, ind) => {
            return (
              <div className="show-items" key={ind}>
                <div className="each-item">
                  <h3>{ele}</h3>
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => delItem(ind)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
