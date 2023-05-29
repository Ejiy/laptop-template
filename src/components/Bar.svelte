<script>
  import { settings } from "$stores/Settings";
  import { onMount } from "svelte";
  let col = `rgb(${$settings?.palette[0]})`;
  //   function update() {
  //     col = `rgb(${$settings?.palette[0]})`;
  //   }
  $: $settings.palette, (col = `rgb(${$settings?.palette[0]})`);
</script>

<div class="bars" style="--dominant: {col}">
  <div class="bar">Tray?</div>
  <div class="bar mid">Current App Name</div>
  <div class="bar">19:20</div>
</div>

<style lang="postcss">
  .bars {
    @apply absolute top-3 left-0 w-full h-12 overflow-hidden;
    @apply flex flex-row gap-2 justify-around px-5 select-none;
  }
  .bar {
    @apply w-2/12 h-9 rounded-full;
    @apply flex items-center justify-center text-lg;
    background-color: var(--dominant);
  }
  .bar.mid {
    @apply w-2/6;
  }
</style>
