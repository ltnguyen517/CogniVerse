"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3008c237-55c9-469c-827a-92e59c392507");
  }, []);

  return null;
};
