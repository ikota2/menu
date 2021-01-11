import React from "react";
import { MenuItem } from "../MenuItem/MenuItem.js";

export function Menu({ ids, pages }) {
  return ids.map((id) => {
    return <MenuItem pages={pages} id={id} />;
  });
}
