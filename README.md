# @nejmalj/jsr-test

A lightweight testing framework for Deno with a familiar API inspired by Jest.

## Features

- 🎯 Simple and intuitive `describe`/`test` API
- ✨ Built-in assertion library with `expect`
- 🚀 Async test support
- 📦 Zero dependencies
- 🔧 TypeScript-first

## Installation

### Deno

```typescript
import { describe, test, expect, run } from "jsr:@nejmalj/jsr-test";
```

## Usage

Create a test file and import the testing utilities:

```typescript
import { describe, test, expect, run } from "@nejmalj/jsr-test";

describe("Arithmetic Operations", () => {
  test("should add two numbers correctly", () => {
    const result = 2 + 3;
    expect(result).toBe(5);
  });

  test("should multiply two numbers correctly", () => {
    const result = 4 * 4;
    expect(result).toBe(16);
  });
});

describe("String Operations", () => {
  test("should concatenate strings", () => {
    const str = "Hello " + "World";
    expect(str).toBe("Hello World");
  });
});

// Run all tests
run();
```

Run your tests:

```bash
deno run -A example.ts
```

Or use the provided task:

```bash
deno task test
```

## API

### `describe(name: string, fn: () => void): void`

Defines a test suite. Groups related tests together.

```typescript
describe("My Feature", () => {
  // tests go here
});
```

### `test(name: string, fn: TestFn): void`

Defines a test case. Must be called within a `describe` block. Supports both synchronous and asynchronous tests.

```typescript
test("should work correctly", () => {
  // test logic
});

test("should handle async operations", async () => {
  const result = await someAsyncFunction();
  expect(result).toBe(expected);
});
```

### `expect<T>(value: T): Expect<T>`

Creates an assertion object for the given value.

#### Matchers

- **`toBe(expected: T): void`** - Checks strict equality using `Object.is()`

```typescript
expect(5).toBe(5);
expect("hello").toBe("hello");
```

### `run(): Promise<void>`

Executes all registered test suites and reports results. Exits with code 1 if any test fails.

```typescript
await run();
```

## Development

### Linting

```bash
deno task lint
```

### Formatting

```bash
deno task fmt
```

## License

MIT
