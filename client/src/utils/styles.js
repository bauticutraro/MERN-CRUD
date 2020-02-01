import { css } from 'styled-components';

export const mixins = {
  toolbar: () => css`
    min-height: 54px;
    @media (min-width: 0px) and (orientation: landscape) {
      min-height: 48px;
    }
    @media (min-width: 600px) {
      min-height: 64px;
    }
  `,

  transition: (property, open) => css`
    transition: ${property} cubic-bezier(0.4, 0, 0.6, 1) ${open ? 195 : 225}ms;
  `
};

export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
