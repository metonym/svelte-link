<script context="module">
  const fetched = new Map();
</script>

<script>
  /** @restProps {a | span} */

  export let href = 'javascript:void(0);';
  export let disabled = false;

  /** @type {boolean} */
  export let outbound = undefined;

  /** @type {string} */
  export let target = undefined;

  /** @type {string} */
  export let rel = undefined;

  async function prefetch() {
    if (fetched.has(href)) return;
    const response = await fetch(href);
    if (response.ok) fetched.set(href, true);
  }

  $: if (typeof window !== 'undefined') {
    const isExternal =
      new URL(href, `${location.protocol}//${location.host}`).host !==
      location.host;

    if (isExternal && outbound === undefined) {
      outbound = true;
    }
  }

  $: if (outbound) {
    target = '_blank';
    if (rel === undefined) rel = 'noopener noreferrer';
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
      if (rel === 'prefetch') prefetch();
    }}
    on:mouseout
    on:focus
    on:blur
    on:keydown>
    <slot />
  </a>
{/if}
