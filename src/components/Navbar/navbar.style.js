import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 8rem;
    width: 100%;
    background: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;  
`;

export const NavUl = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 76rem;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLi = styled.li`
    color: #fff;
    text-transform: lowercase;
    letter-spacing: .3rem;
    font-size: 1.4rem;
    transition: .25s ease-out;
    border-bottom: .1rem solid transparent;
    &:hover {
        cursor: pointer;
        color: burlywood
    }
    a{&.active{
        color: #CFCCC5;
        text-transform: uppercase;
        border-bottom: .1rem solid #CFCCC5;
        }
    }
`;