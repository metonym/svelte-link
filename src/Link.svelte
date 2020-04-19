<script context="module">
  const fetched = new Map();
</script>

<script>
  export let href = "javascript:void(0);";
  export let disabled = false;
  export let outbound = false;
  export let target = undefined; // string
  export let rel = undefined; // string

  async function prefetch() {
    if (fetched.has(href)) {
      return;
    }

    const response = await fetch(href);

    if (response.ok) {
      fetched.set(href, true);
    }
  }

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
    on:mouseenter={() => {
      if (rel === 'prefetch') {
        prefetch();
      }
    }}
    on:mouseout
    on:focus
    on:blur
    on:keydown>
    <slot />
  </a>
{/if}
