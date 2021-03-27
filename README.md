# svelte-link

[![NPM][npm]][npm-url]

<!-- REPO_URL -->

> Anchor link component for Svelte.

<!-- TOC -->

## Install

```bash
yarn add -D svelte-link
# OR
npm i -D svelte-link
```

## Usage

### Basic

```svelte
<script>
  import Link from "svelte-link";
</script>

<Link href="https://github.com/">GitHub</Link>
```

### Preventing the default behavior

```svelte
<Link
  href="https://github.com/"
  on:click={(e) => {
    e.preventDefault();
  }}
>
  GitHub
</Link>
```

### Outbound links

`outbound` is an alias for setting `target="_blank"`. If `rel` is not specified for outbound links, [`rel="noopener noreferrer"` is set](https://developers.google.com/web/tools/lighthouse/audits/noopener).

`outbound` defaults to `true` if `href` points to an external URL. You can override this behaviour by explicitly setting `outbound` to `false`.

```svelte
<Link href="https://github.com/" outbound>GitHub</Link>
<!-- is the same as -->
<Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
  GitHub
</Link>
```

### Prefetch

Inspired by [Sapper](https://sapper.svelte.dev/docs#prefetch_href), if the non-standard `rel="prefetch"` is present, this component will make a GET request to the `href` value when the user hovers over the link.

```svelte
<Link href="about" rel="prefetch">About</Link>
```

### Disabled

Setting `disabled` to `true` will render a `span` element instead of an anchor tag.

```svelte
<Link disabled href="https://github.com/">GitHub</Link>
<!-- <span>GitHub</span> -->
```

## API

### Props

| Prop name | Value                                       |
| :-------- | :------------------------------------------ |
| href      | `string` (default: `"javascript:void(0);"`) |
| disabled  | `boolean` (default: `false`)                |
| outbound  | `boolean` (default: `undefined`)            |
| target    | `string` (default: `undefined`)             |
| rel       | `string` (default: `undefined`)             |

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:focus
- on:blur
- on:keydown

## TypeScript Support

Svelte version 3.31 or greater is required to use this component with TypeScript.

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-link?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/svelte-link
