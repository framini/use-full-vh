# useVh

React Hook for addressing the issue on mobile devices where `100vh` doesn't mean what you would expect. This is very noticeable on iOS Safari where we have the address and toolbar on top of the `100vh` which generates an undesirable vertical scrollbar.

## Install

With Yarn

```
yarn install @framini/use-vh
```

With NPM

```
npm install @framini/use-vh
```

## Usage

```js
const fullViewportHeight = () => {
  const fullVh = useVh();

  return (
    <div
      style={{
        height: `${fullVh}px`,
      }}
    >
      Viewport Height: {fullVh}
    </div>
  );
};
```

The hook only accepts a number representing the desired `vh` amount. So for instance if you want `50vh` you could do something like:

```js
const halfViewportHeight = () => {
  const vh = useVh(50);

  return (
    <div
      style={{
        height: `${vh}px`,
      }}
    >
      Viewport Height: {vh}
    </div>
  );
};
```

## Example

You can play around with it by running `StoryBook`.

```
yarn storybook
```
