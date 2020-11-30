/// <reference types="svelte" />
import { SvelteComponent } from "svelte";

export interface LinkProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["a"]>,
    svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  /**
   * @default 'javascript:void(0);'
   */
  href?: string;

  /**
   * @default false
   */
  disabled?: boolean;

  outbound?: boolean;

  target?: string;

  rel?: string;
}

export default class Link extends SvelteComponent<
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
