import { SettingsContext } from "@/contexts/settings-context";
import { useContext } from "react";

export const useSettings = () => useContext(SettingsContext);
