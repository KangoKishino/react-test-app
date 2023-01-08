import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";

describe("Button", () => {
  test("should call onClick", async () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>label</Button>); // 1
    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();
    await userEvent.click(screen.getByRole("button")); // 2

    expect(onClickMock).toHaveBeenCalledTimes(1); // 3
  });
});
