# svelte-link

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Link component for Svelte.

## Install

```bash
yarn add -D svelte-link
```

## Usage

```html
<script>
  import Link from "svelte-link";
</script>

<Link href="https://github.com/">GitHub</Link>
```

### Preventing default behavior

```html
<Link href="https://github.com/" on:click="{(e) => { e.preventDefault(); }}">GitHub</Link>
```

### Outbound links

`outbound` is an alias for setting `target="_blank"`. If `rel` is not specified for outbound links, [`rel="noopener noreferrer"` is set](https://developers.google.com/web/tools/lighthouse/audits/noopener).

```html
<Link href="https://github.com/" outbound>GitHub</Link>
<!-- is the same as -->
<Link href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</Link>
```

### Disabled

Setting `disabled` to `true` will render a `span` tag.

```html
<Link href="https://github.com/" disabled>GitHub</Link>
<!-- <span>GitHub</span> -->
```

## API

| Property name | Value                                       |
| :------------ | :------------------------------------------ |
| href          | `string` (default: `"javascript:void(0);"`) |
| disabled      | `boolean` (default: `false`)                |
| outbound      | `boolean` (default: `false`)                |
| target        | `string` (default: `undefined`)             |
| rel           | `string` (default: `undefined`)             |

## Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:focus
- on:blur
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-link.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-link
[build]: https://travis-ci.com/metonym/svelte-link.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-link
