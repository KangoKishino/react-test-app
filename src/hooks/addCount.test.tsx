import { act, renderHook } from "@testing-library/react";

import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should add count", () => {
    const { result } = renderHook(() => useCounter()); // 1
    expect(result.current.count).toBe(0);

    act(() => {
      result.current.addCount(); // 2
    });
    expect(result.current.count).toBe(1); // 3
  });
});
