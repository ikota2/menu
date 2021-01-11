import React, { useState } from "react";
import { Menu } from "../Menu/Menu.js";
import "./menu.css";

export function MenuItem({ pages, id }) {
  const [visible, setVisible] = useState(false);
  function handleClick() {
    setVisible((previous) => !previous);
  }
  const firstLevelIds = pages[id];

  return (
    <div className='leftMenuBody'>
      {firstLevelIds.pages !== undefined && (
        <button
          className={
            visible
              ? "leftMenuBody__arrow"
              : "leftMenuBody__arrow leftMenuBody__arrow_down"
          }
          onClick={handleClick}
        ></button>
      )}
      <div className='leftMenuBody__item' id={firstLevelIds.id}>
        <a href={firstLevelIds.url}>{firstLevelIds.title}</a>
      </div>
      {firstLevelIds.pages !== undefined && visible && (
        <div style={{ paddingLeft: 16 }}>
          <Menu ids={firstLevelIds.pages} pages={pages} />
        </div>
      )}
    </div>
  );
}
