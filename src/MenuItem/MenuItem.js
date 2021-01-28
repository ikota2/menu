import React, { useState, useContext } from "react";
import { Context } from "../Context";
import { Menu } from "../Menu/Menu.js";
import "./menuItem.css";

export function MenuItem({ id }) {
  const [visible, setVisible] = useState(false);
  const pages = useContext(Context);
  const firstLevelIds = pages[id];

  return (
    <div className='menuItem'>
      {firstLevelIds.pages !== undefined && (
        <button
          className={
            visible ? "menuItem__arrow" : "menuItem__arrow menuItem__arrow_down"
          }
          onClick={() => setVisible((previous) => !previous)}
        />
      )}
      <div className='menuItem__item' id={firstLevelIds.id}>
        <a href={firstLevelIds.url}>{firstLevelIds.title}</a>
      </div>
      {firstLevelIds.pages !== undefined && visible && (
        <div style={{ paddingLeft: 16 }}>
          <Menu ids={firstLevelIds} />
        </div>
      )}
    </div>
  );
}
