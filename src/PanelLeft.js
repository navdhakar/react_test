import React from "react";
import Tiptemplate from "./Tiptemplate";
export default function PanelLeft({ tips }) {
  return tips.map((tip) => {
    return <Tiptemplate key={tip.tip_dom_id} tip={tip} />;
  });
}
