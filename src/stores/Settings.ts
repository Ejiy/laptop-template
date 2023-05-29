import { writable } from "svelte/store";

interface ISettings {
  wallpaper: string;
  dominantColor: { r: number; g: number; b: number };
  palette: { r: number; g: number; b: number }[];
}
export const settings = writable<ISettings>({
  wallpaper: "",
  dominantColor: { r: 0, g: 0, b: 0 },
  palette: [],
});
