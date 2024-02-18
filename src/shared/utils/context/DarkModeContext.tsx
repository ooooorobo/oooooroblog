import { createContext, ReactElement } from "react";
import { useDarkMode } from "@src/shared/utils/hooks/useDarkMode";

interface DarkModeContextValue {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
const initialValue = { isDarkMode: false, toggleDarkMode: () => null };
export const DarkModeContext =
  createContext<DarkModeContextValue>(initialValue);

function DarkModeProvider({ children }: { children: ReactElement }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
