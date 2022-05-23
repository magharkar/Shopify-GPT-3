import React from "react";
import { HeaderWrapper, Text } from "./Header.style";
import { HEADERTEXT } from "../../constants";

const Header = () => {
    return (
        <HeaderWrapper>
            <Text>{HEADERTEXT}</Text>
        </HeaderWrapper>
    )
}

export default Header;