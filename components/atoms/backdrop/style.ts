import styled from "styled-components";

export const StyledBackdrop = styled.div<{ $show: boolean }>`
    display: ${({ $show }) => $show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
`