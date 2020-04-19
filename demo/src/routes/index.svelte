<script>
  import Link from "svelte-link";

  let disabled = false;
  let events = [];

  function logEvent(type) {
    events = [...events, { type: `on:${type}` }];
  }
</script>

<style>
  h2 {
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  .padding {
    padding: 1rem;
  }

  ul {
    list-style: none;
  }

  li {
    color: #393939;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e0e0e0;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
    font: inherit;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    outline: 2px solid #e0e0e0;
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
  }

  button:active {
    outline-color: #0f62fe;
    color: #0f62fe;
  }

  button:focus {
    outline-color: #0f62fe;
  }

  .buttons {
    margin-top: 1rem;
  }
</style>

<svelte:head>
  <title>svelte-link</title>
</svelte:head>

<Link
  href="about"
  rel="prefetch"
  {disabled}
  on:mouseover={() => {
    logEvent('mouseover');
  }}
  on:mouseenter={() => {
    logEvent('mouseenter');
  }}
  on:mouseout={() => {
    logEvent('mouseout');
  }}
  on:focus={() => {
    logEvent('focus');
  }}
  on:blur={() => {
    logEvent('blur');
  }}
  on:keydown={() => {
    logEvent('keydown');
  }}>
  About
</Link>

<div class="buttons">
  <button
    type="button"
    on:click={() => {
      disabled = !disabled;
    }}>
    {disabled ? 'Enable link' : 'Disable link'}
  </button>

</div>

<ul class="padding">
  <h2>Events</h2>
  {#each events as event}
    <li>{event.type}</li>
  {/each}
</ul>
