import * as React from 'react';
import { colors } from '@src/styles';

export const EditIcon = (props: any) => (
  <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 2C6.486 2 2 5.589 2 10c0 2.907 1.897 5.516 5 6.934V22l5.34-4.005C17.697 17.854 22 14.32 22 10c0-4.411-4.486-8-10-8ZM9.302 13.986H7.503v-1.798l4.976-4.97 1.798 1.799-4.975 4.969Zm5.823-5.816-1.799-1.798 1.372-1.371 1.799 1.798-1.372 1.371Z'
      // fill="#ffb84c"
      fill={colors.Primary.Main}
    />
  </svg>
);
