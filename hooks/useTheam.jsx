import { useContext } from "react";
import { TheamContext } from "../contexts/TheamContext";

export function useTheam() {
  const [isdark, setisdark] = useContext(TheamContext);

  return [isdark, setisdark];
}
