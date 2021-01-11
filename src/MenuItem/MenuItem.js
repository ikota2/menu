import React, { useState } from "react";
import { Menu } from "../Menu/Menu.js";
import "./menuItem.css";

export function MenuItem({ pages, id }) {
  const [visible, setVisible] = useState(false);
  const firstLevelIds = pages[id];

  return (
    <div className='menuItem'>
      {firstLevelIds.pages !== undefined && (
        <button
          className={
            visible ? "menuItem__arrow" : "menuItem__arrow menuItem__arrow_down"
          }
          onClick={() => setVisible((previous) => !previous)}
        ></button>
      )}
      <div className='menuItem__item' id={firstLevelIds.id}>
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
