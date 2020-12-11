import { useState, useEffect } from "react";
import store from "store";

const unsubscribe = store.subscribe(() => {});

export default () => {
  const [selected, setSelected] = useState("Blender");
  useEffect(() => {
    store.subscribe(() => {
      if (store.getState().selected === undefined) {
        setSelected("Blender");
      } else {
        setSelected(store.getState().selected);
      }
    });
    return () => unsubscribe();
  }, []);
  return selected;
};
