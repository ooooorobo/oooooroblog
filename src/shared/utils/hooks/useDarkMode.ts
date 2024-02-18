import { useEffect, useState } from "react";
import { StorageKey, Theme } from "@src/shared/consts/constants";

export const useDarkMode = () => {
  const [isDarkMode, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const defaultSetting: Theme =
      window.matchMedia("(prefers-color-scheme: dark)").media === "not all"
        ? Theme.LIGHT
        : Theme.DARK;
    const localStorageSetting: Theme =
      (window.localStorage.getItem(
        StorageKey.DARK_MODE_STORAGE_KEY,
      ) as Theme) ?? Theme.DARK;

    if (!localStorageSetting) {
      setIsDark(defaultSetting === Theme.DARK);
      window.localStorage.setItem(
        StorageKey.DARK_MODE_STORAGE_KEY,
        defaultSetting ? Theme.DARK : Theme.LIGHT,
      );
    } else {
      setIsDark(localStorageSetting === Theme.DARK);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      StorageKey.DARK_MODE_STORAGE_KEY,
      isDarkMode ? Theme.DARK : Theme.LIGHT,
    );
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode: () => setIsDark((prev) => !prev) };
};
