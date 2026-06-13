"use client";

import { useEffect, useState } from "react";

let listeners: Array<(open: boolean) => void> = [];
let state = false;

function setState(next: boolean) {
  state = next;
  listeners.forEach((fn) => fn(next));
}

export function useNavMenu() {
  const [open, setOpen] = useState(state);

  useEffect(() => {
    listeners.push(setOpen);
    return () => {
      listeners = listeners.filter((fn) => fn !== setOpen);
    };
  }, []);

  return {
    open,
    toggle: () => setState(!state),
    close: () => setState(false),
  };
}
