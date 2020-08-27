declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare module 'mockjs' {
  export const mock: any;
  export const Random: any;
}

declare module 'Window' {
  export const haha: (str: number) => void;
}
