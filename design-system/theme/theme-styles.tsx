import { getCssText } from './theme-config';
import { globalStyles } from './theme-global';

export const ThemeStyles = (): JSX.Element => {
  globalStyles();

  return (
    <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
  );
};
