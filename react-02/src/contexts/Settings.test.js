import React from 'react';
import Settings from './Settings';
import { ThemeContext } from './AppContext';
import { fireEvent, render, screen } from '@testing-library/react';

test('does the settings page render', () => {

    render(<Settings/>);

    
    // screen.getByText(/Settings Page/i)

    expect(screen.getByText(/Settings Page/i)).toBeInTheDocument();
  
});