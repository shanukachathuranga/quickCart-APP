export const COLORS={
    darkGrey:'#bdc3c7',
    orange:'#d35400',
    light:'#FFF',
    blue:'#3498db'
}as const;

export type ColorTypes = keyof typeof COLORS;