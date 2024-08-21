/* eslint-disable curly */
import {ReactNode, useEffect} from 'react';

import {useStyles} from './BlurLayout.styled';

function BlurLayout({show, target, children}: BlurLayoutProps) {
  const {container, blur} = useStyles();

  useEffect(() => {
    const method: keyof DOMTokenList = show ? 'add' : 'remove';
    const blurry = target ? document.querySelector(target) : document.body;
    if (blurry) blurry.classList[method](blur);

    return function componentWillUnmount() {
      if (blurry) blurry.classList.remove(blur);
    };
  }, [show, target, blur]);

  if (!show) return null;
  return <div className={container}>{children}</div>;
}

export default BlurLayout;

export type BlurLayoutProps = Readonly<{
  show: boolean;
  target?: string;
  children?: ReactNode;
}>;
