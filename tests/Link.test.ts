import type { SvelteComponent } from "svelte";
import Link from "./Link.test.svelte";

describe("Link", () => {
  let instance: null | SvelteComponent = null;

  afterEach(() => {
    instance?.$destroy();
    instance = null;
    document.body.innerHTML = "";
  });

  test("Link", () => {
    instance = new Link({
      target: document.body,
    });

    expect(
      document.body.querySelector("[data-basic]")!.outerHTML,
    ).toMatchSnapshot();
    expect(
      document.body.querySelector("[data-outbound]")!.outerHTML,
    ).toMatchSnapshot();
    expect(
      document.body.querySelector("[data-disabled]")!.outerHTML,
    ).toMatchSnapshot();
    expect(
      document.body.querySelector("[data-active]")!.outerHTML,
    ).toMatchSnapshot();
  });
});
