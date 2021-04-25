// Toggle.js
import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

import MoonIcon from '../../icons/MoonIcon';
import SunIcon from '../../icons/SunIcon';

// import { ReactComponent as MoonIcon } from '../../icons/moon.svg';
// import { ReactComponent as SunIcon } from '../../icons/sun.svg';

// Toggle.styled.js
const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.25rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.25rem;
  position: relative;
  width: 4rem;
  height: 2rem;

    .svg {
        height: auto;
        width: 1.2rem;
        transition: all 0.3s linear;
    }
`;

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <ToggleContainer onClick={toggleTheme}>
            <SunIcon />
            <MoonIcon />
        </ToggleContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;