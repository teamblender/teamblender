import { useState, useEffect } from "react";
import store from "store";
import { isMobile } from "react-device-detect";

const unsubscribe = store.subscribe(() => {});

export default () => {
  const initialStage = isMobile ? 1 : 0;
  const [stage, setStage] = useState(initialStage);
  useEffect(() => {
    store.subscribe(() => {
      setStage(store.getState().stage);
    });
    return () => () => unsubscribe();
  }, []);
  return stage;
};
