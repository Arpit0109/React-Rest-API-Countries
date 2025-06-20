import { createContext, useState } from "react";

export const TheamContext = createContext();

export function TheamProvider({ children }) {
  const [isdark, setisdark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
  return (
    <TheamContext.Provider value={[isdark, setisdark]}>
      <div>{children}</div>
    </TheamContext.Provider>
  );
}
