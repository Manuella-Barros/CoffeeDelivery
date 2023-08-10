import 'styled-components';
import { light } from '../styles/themes/light';

type ThemeType = typeof light;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType{}
}