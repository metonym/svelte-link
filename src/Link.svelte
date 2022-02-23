<script context="module">
  const fetched = new Map();
</script>

<script>
  /** Specify the `href` attribute. */
  export let href = "javascript:void(0);";

  /**
   * Set to `true` to disable the link.
   * A `span` tag will be rendered instead of `a`.
   */
  export let disabled = false;

  /**
   * Set to `true` to set `target="_blank"`
   * and `rel="noopener noreferrer"`.
   * @type {boolean}
   */
  export let outbound = undefined;

  /**
   * Specify the `target` attribute.
   * @type {"_self" | "_blank" | "_parent" | "_top"}
   */
  export let target = undefined;

  /**
   * Specify the `rel` attribute.
   * Set to "prefetch" to fetch the `href` value.
   * @type {string}
   */
  export let rel = undefined;

  /**
   * Set to `true` for the link to be active:
   * - link is given an "active" class
   * - `aria-current` is set to "page"
   */
  export let active = false;

  async function prefetch() {
    if (fetched.has(href)) return;
    const response = await fetch(href);
    if (response.ok) fetched.set(href, true);
  }

  $: if (typeof window !== "undefined") {
    const isExternal =
      new URL(href, `${location.protocol}//${location.host}`).host !==
      location.host;

    if (isExternal && outbound === undefined) {
      outbound = true;
    }
  }

  $: if (outbound) {
    target = "_blank";
    if (rel === undefined) rel = "noopener noreferrer";
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
    on:keydown
  >
    <slot />
  </span>
{:else}
  <a
    class:active
    aria-current={active ? "page" : undefined}
    {...$$restProps}
    {href}
    {target}
    {rel}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseenter={() => {
      if (rel === "prefetch") prefetch();
    }}
    on:mouseout
    on:focus
    on:blur
    on:keydown
  >
    <slot />
  </a>
{/if}
