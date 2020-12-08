# svelte-link

[![NPM][npm]][npm-url] [![Build][build]][build-badge]

> Link component for Svelte.

## Install

```bash
yarn add -D svelte-link
# OR
npm i -D svelte-link
```

## Usage

```svelte
<script>
  import Link from "svelte-link";
</script>

<Link href="https://github.com/">GitHub</Link>
```

### Preventing default behavior

```svelte
<Link href="https://github.com/" on:click="{(e) => { e.preventDefault(); }}">GitHub</Link>
```

### Outbound links

`outbound` is an alias for setting `target="_blank"`. If `rel` is not specified for outbound links, [`rel="noopener noreferrer"` is set](https://developers.google.com/web/tools/lighthouse/audits/noopener).

If `outbound` is unset, it automatically defaults to `true` when `href` points to an external URL. You can override this behaviour by explicitly setting `outbound` to `false`.

```svelte
<Link href="https://github.com/" outbound>GitHub</Link>
<!-- is the same as -->
<Link href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</Link>
```

### Prefetch

Inspired by [Sapper](https://sapper.svelte.dev/docs#prefetch_href), this component will make a GET request if the non-standard `rel="prefetch"` is present.

```svelte
<Link href="about" rel="prefetch">About</Link>
```

### Disabled

Setting `disabled` to `true` will render a `span` element instead of an anchor tag.

```svelte
<Link href="https://github.com/" disabled>GitHub</Link>
<!-- <span>GitHub</span> -->
```

## API

| Prop name | Value                                       |
| :-------- | :------------------------------------------ |
| href      | `string` (default: `"javascript:void(0);"`) |
| disabled  | `boolean` (default: `false`)                |
| outbound  | `boolean` (default: `undefined`)            |
| target    | `string` (default: `undefined`)             |
| rel       | `string` (default: `undefined`)             |

## Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:focus
- on:blur
- on:keydown

## TypeScript support

To use this component with TypeScript, you will need Svelte version 3.31 or greater.

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-link?color=0366d6&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-link
[build]: https://img.shields.io/travis/com/metonym/svelte-link?color=28a745&style=for-the-badge
[build-badge]: https://travis-ci.com/metonym/svelte-link
