import styled from 'styled-components';

export const Section = styled.section`    
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#home{
        background-color: #DBCEC5;
        height: 100vh;
    }
    &#about{
        background-color: #DECCBE;
        height: 50vh;
    }
    &#work{
        background-color: #AC917A;
        height: 150vh;
        
    }
    &#contact{
        background-color: #7B7A69;
        height: 75vh;
    }
`;

export const Header = styled.h1`
    font-size: clamp(3rem, 8vw, 5rem);
    letter-spacing: .3rem;
    text-transform: uppercase;
    color: #fff;
`;