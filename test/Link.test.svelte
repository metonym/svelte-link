<script lang="ts">
  import Link from "../types";
</script>

<Link
  outbound={false}
  disabled={false}
  target=""
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
