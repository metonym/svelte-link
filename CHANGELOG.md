# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0](https://github.com/metonym/svelte-link/releases/tag/v1.3.0) - 2022-04-10

- Add `sveltekit:prefetch`, `sveltekit:noscroll` props to TypeScript definitions

## [1.2.0](https://github.com/metonym/svelte-link/releases/tag/v1.2.0) - 2022-02-24

- Add `active` prop; if `true`, it sets the class to "active" and `aria-current="page"`

## [1.1.0](https://github.com/metonym/svelte-link/releases/tag/v1.1.0) - 2022-01-15

- Update JSDoc/TypeScript prop descriptions
- Type `target` prop as `"_self" | "_blank" | "_parent" | "_top"` instead of a `string`

## [1.0.3](https://github.com/metonym/svelte-link/releases/tag/v1.0.3) - 2021-09-12

- Use `.svelte.d.ts` extension for component TypeScript definition

## [1.0.2](https://github.com/metonym/svelte-link/releases/tag/v1.0.2) - 2020-12-08

- Use `SvelteComponentTyped` in TypeScript definitions from Svelte version >=v3.31

## [1.0.1](https://github.com/metonym/svelte-link/releases/tag/v1.0.1) - 2020-11-29

- Fix window check for SSR environments

## [1.0.0](https://github.com/metonym/svelte-link/releases/tag/v1.0.0) - 2020-11-29

- Automatically set `outbound` to `true` if href is external ([PR #3](https://github.com/metonym/svelte-link/pull/3), [issue #2](https://github.com/metonym/svelte-link/issues/2) – thanks [@seaneking](https://github.com/seaneking))

**Breaking Changes**

- Set `outbound` to `false` to disable the external URL auto-detection

## [0.3.0](https://github.com/metonym/svelte-link/releases/tag/v0.3.0) - 2020-11-28

- Add TypeScript definitions

## [0.2.0](https://github.com/metonym/svelte-link/releases/tag/v0.2.0) - 2020-04-19

- Prefetch link if non-standard `rel="prefetch"` is set (inspired by Sapper)

## [0.1.0](https://github.com/metonym/svelte-link/releases/tag/v0.1.0) - 2020-04-16

- Initial release
