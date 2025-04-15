export const COLORS={
    darkGrey:'#bdc3c7',
    orange:'#d35400'
}as const;

export type ColorTypes = keyof typeof COLORS;