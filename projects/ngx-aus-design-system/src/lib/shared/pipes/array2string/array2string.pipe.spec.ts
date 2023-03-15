import { Array2StringPipe } from "./array2string.pipe";

describe("Array2StringPipe", () => {
  it("create an instance", () => {
    const pipe = new Array2StringPipe();
    expect(pipe).toBeTruthy();
  });
});
