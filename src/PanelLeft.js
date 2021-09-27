import React from "react";
import Tiptemplate from "./Tiptemplate";
import { v4 as uuidv4 } from "uuid";
export default function PanelLeft({ tips }) {
  return tips.map((tip) => {
    return <Tiptemplate key={uuidv4()} tip={tip} />;
  });
}
