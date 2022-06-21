import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
*{
    box-sizing:border-box;
}
body{
    font-size:20px;
    font-family: "AvertaStd-Thin";
    background:${(props) => props.theme.bgContent};
    margin:0;
    padding:0;
    line-height:1;
}`;
export default StyledGlobal;
