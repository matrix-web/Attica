import { FC } from 'react';
import { Fonts } from '@/components/styles/Fonts';
import { Colors } from '@/components/styles/Colors';
import { Resets } from '@/components/styles/Resets';
import { Spacing } from '@/components/styles/Spacing';
import { Borders } from '@/components/styles/Borders';

const Styles: FC = () => {
  return (
    <>
      <Fonts />
      <Resets />
      <Colors />
      <Spacing />
      <Borders />
    </>
  );
};

export {
  Resets,
  Colors,
  Styles,
  Spacing,
  Borders,
};
