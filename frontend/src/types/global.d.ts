import {initialGlobalState} from '../Providers/initialGlobalState';

declare global {
  export type GobalState = {
    localTypes: {
      [key in keyof (typeof initialGlobalState)['localTypes']]: {
        bg: string;
        img: string;
      };
    };
  };

  export type AppGlobalContext = Readonly<{
    globalState: GobalState;
    setGlobalState: (data: Partial<GobalState>) => void;
  }>;
}

// THIS IS NECESSARY
export {};
