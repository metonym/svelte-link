<script>
  export let href = "javascript:void(0);";
  export let disabled = false;
  export let outbound = false;
  export let target = undefined; // string
  export let rel = undefined; // string

  $: if (outbound) {
    target = "_blank";

    if (rel === undefined) {
      rel = "noopener noreferrer";
    }
  }
</script>

{#if disabled}
  <span
    {...$$restProps}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseout
    on:focus
    on:blur
    on:keydown>
    <slot />
  </span>
{:else}
  <a
    {...$$restProps}
    {href}
    {target}
    {rel}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseout
    on:focus
    on:blur
    on:keydown>
    <slot />
  </a>
{/if}
