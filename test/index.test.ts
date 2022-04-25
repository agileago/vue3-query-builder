import { expect, test } from 'vitest'
import { add } from 'lib-starter'

test('should work', () => {
  expect(add(1, 1)).toBe(2)
})
