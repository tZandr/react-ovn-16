import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)!

  return <button onClick={toggleTheme}>
    {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
    </button>;
}
