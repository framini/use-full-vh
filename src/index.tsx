import React, { Dispatch, SetStateAction } from 'react';

const isClient = typeof window === 'object';

const useRafState = <S,>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>] => {
  const frame = React.useRef(0);
  const [state, setState] = React.useState(initialState);

  const setRafState = React.useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  React.useEffect(() => {
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return [state, setRafState];
};

const useWindowInnerHeight = () => {
  const [state, setState] = useRafState<number>(
    isClient ? window.innerHeight : 0
  );

  React.useEffect((): (() => void) | void => {
    if (isClient) {
      const handler = () => {
        setState(window.innerHeight);
      };

      window.addEventListener('resize', handler);

      return () => {
        window.removeEventListener('resize', handler);
      };
    }
  }, []);

  return state;
};

export const useVh = (value = 100) => {
  const windowInnerHeight = useWindowInnerHeight();

  return React.useMemo(() => {
    return (windowInnerHeight * value) / 100;
  }, [windowInnerHeight]);
};
