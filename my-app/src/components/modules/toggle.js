import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`

const body = styled.body`
    background: dark;
`

class toggle extends Component {

    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        return (
            <Container>
                {this.state.on && this.props.children}
                <Button onClick={this.toggle}>Show/Hide</Button>
                <Button primary onClick={this.toggle}>Show/Hide</Button>
            </Container>
        );
    }
}

export default toggle;