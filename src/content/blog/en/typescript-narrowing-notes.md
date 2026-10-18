---
title: "Notes on TypeScript narrowing"
description: "A few patterns to let the compiler prove what you already know about a value."
pubDate: 2026-08-02
tags: [programmation, outil]
---

Narrowing is how TypeScript turns a broad type into a precise one after a check. Used well, it removes most casts.

## Discriminated unions

```ts
type Result =
  | { ok: true; value: number }
  | { ok: false; error: string };

function show(result: Result) {
  if (result.ok) return `value: ${result.value}`;
  return `error: ${result.error}`;
}
```

The `ok` field is the discriminant: each branch sees only the properties that exist there.

## Type predicates

```ts
const isDefined = <T>(value: T | undefined): value is T => value !== undefined;

const names = ['a', undefined, 'b'].filter(isDefined); // string[]
```

Without the predicate, `filter` keeps `(string | undefined)[]`.

## Rule of thumb

If you reach for `as`, look first for a check that makes the compiler agree with you.
