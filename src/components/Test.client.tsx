import React, { useEffect } from "react";

interface NostoProviderProps {
  children: React.ReactElement;
}

const NostoTest: React.FC<NostoProviderProps> = ({ children }) => {
  useEffect(() => {
    // @ts-ignore
    console.log("nosto test");
  }, []);

  return <div nosto-test>{children}</div>;
};

export default NostoTest;
