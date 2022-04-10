<script lang="ts">
  import Link from "../src";
  import Link2 from "../src/Link.svelte";
</script>

<Link data-basic href="/">Text</Link>

<Link data-outbound href="https://github.com/" outbound>Text</Link>

<Link data-disabled href="/" disabled>Text</Link>

<Link data-active href="/" active>Text</Link>

<Link
  sveltekit:prefetch
  sveltekit:noscroll
  outbound
  disabled
  target="_blank"
  active
  rel=""
  href="https://github.com/"
  on:click={(e) => {
    e.preventDefault();
    console.log(e); // MouseEvent
  }}
  on:mouseover={(e) => {
    console.log(e); // MouseEvent
  }}
  on:mouseenter={(e) => {
    console.log(e); // MouseEvent
  }}
  on:mouseout={(e) => {
    console.log(e); // MouseEvent
  }}
  on:focus={(e) => {
    console.log(e); // FocusEvent
  }}
  on:blur={(e) => {
    console.log(e); // FocusEvent
  }}
  on:keydown={(e) => {
    console.log(e); // KeyboardEvent
  }}
>
  GitHub
</Link>

<Link2 outbound={false} />
