import foo from './foo.js'

const obj = {
  nested: {
    example: {
      foo: 'bar'
    }
  }
}

const test = obj.bla ?.foo ?.wee ?? obj.nested?.example?.foo;

const asyncAdd = (number) => Promise.resolve(number + 5);

const split = (sep, str) =>
  str.split(sep)

(async () => {
  const hw = 'Hello'
    |> (x => `${x} world`)
    |> (x => `${x}! ${test}`)
    |> (_ => split(' ', _))

  foo(hw)
})();
