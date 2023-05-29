<script>
  import Bar from "./Bar.svelte";
  import Wallpaper from "$assets/sunset-mountain-synthwave-digital-art-hd-wallpaper-uhdpaper.com-612@1@k.jpg";
  import { onMount } from "svelte";
  import ColorThief from "colorthief";
  import { settings } from "$stores/Settings";
  onMount(async () => {
    const colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = Wallpaper;
    img.onload = () => {
      const dominantColor = colorThief.getColor(img);
      const palette = colorThief.getPalette(img);
      settings.update((y) => {
        y.dominantColor = dominantColor;
        y.palette = palette;
        return y;
      });
    };
  });
</script>

<div class="relative w-screen h-screen">
  <div class="palette">
    <div
      class="dominant"
      style="background-color: rgb({$settings?.dominantColor});"
    />
    {#each $settings?.palette as color}
      <div style="background-color: rgb({color});" />
    {/each}
  </div>
  <div class="frame" style="background-image: url({Wallpaper});">
    <Bar />
  </div>
</div>

<style lang="postcss">
  .dominant {
    @apply mb-5;
  }
  .palette div {
    @apply w-12 h-12;
    @apply rounded-full;
  }
  .palette {
    @apply w-16 h-3/4 left-10 top-1/2;
    @apply absolute;
    @apply transform -translate-y-1/2;
    @apply flex flex-col items-center justify-center gap-1;
  }
  .frame {
    @apply w-[80%] h-[80%];
    @apply absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm;
    @apply border-slate-900 border-4;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
