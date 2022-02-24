<script lang="ts">
  import Link from "../types";
  import Link2 from "../types/Link.svelte";
</script>

<Link
  outbound={false}
  disabled={false}
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
