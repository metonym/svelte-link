/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

type RestProps = SvelteHTMLElements["span"] & SvelteHTMLElements["a"];

export interface LinkProps extends RestProps {
  /**
   * Specify the `href` attribute.
   * @default "javascript:void(0);"
   */
  href?: string;

  /**
   * Set to `true` to disable the link.
   * A `span` tag will be rendered instead of `a`.
   * @default false
   */
  disabled?: boolean;

  /**
   * Set to `true` to set `target="_blank"`
   * and `rel="noopener noreferrer"`.
   * @default undefined
   */
  outbound?: boolean;

  /**
   * Specify the `target` attribute.
   * @default undefined
   */
  target?: "_self" | "_blank" | "_parent" | "_top";

  /**
   * Specify the `rel` attribute.
   * Set to "prefetch" to fetch the `href` value.
   * @default undefined
   */
  rel?: string;

  /**
   * Set to `true` for the link to be active:
   * - link is given an "active" class
   * - `aria-current` is set to "page"
   * @default false
   */
  active?: boolean;

  [key: `data-${string}`]: any;
}

export default class Link extends SvelteComponentTyped<
  LinkProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseout: WindowEventMap["mouseout"];
    focus: WindowEventMap["focus"];
    blur: WindowEventMap["blur"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
