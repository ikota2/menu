import React from "react";
import { MenuItem } from "../MenuItem/MenuItem.js";

export function Menu({ ids }) {
  return ids.map((id) => {
    return <MenuItem id={id} />;
  });
}
