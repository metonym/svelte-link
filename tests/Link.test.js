import { test, expect, describe, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import Link from "./Link.test.svelte";
import { tick } from "svelte";

describe("Link", () => {
  let instance = null;

  afterEach(() => {
    instance?.$destroy();
    instance = null;
    document.body.innerHTML = "";
  });

  test("Link", async () => {
    instance = new Link({
      target: document.body,
    });

    expect(
      document.body.querySelector("[data-basic]").outerHTML
    ).toMatchSnapshot();
    expect(
      document.body.querySelector("[data-outbound]").outerHTML
    ).toMatchSnapshot();
    expect(
      document.body.querySelector("[data-disabled]").outerHTML
    ).toMatchSnapshot();
    expect(
      document.body.querySelector("[data-active]").outerHTML
    ).toMatchSnapshot();
  });
});
