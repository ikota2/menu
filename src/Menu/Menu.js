import React from "react";
import { MenuItem } from "../MenuItem/MenuItem.js";

// если массив содержит parentId то добираемся до ключа pages и расчехляем его внутри дива,
// c тем самым идом
// если нет то тот который снизу)

export function Menu({ ids, pages }) {
  return ids.map((id) => {
    return <MenuItem pages={pages} id={id} />;
  });
}
