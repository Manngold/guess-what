import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Upload = styled.input`
    border: none;
    width: 16rem;
    height: 2rem;
`;

function Uploader({ setImageSrc }) {
    const changeImage = (e) => {
        const imgSrc = e.target.value;
        setImageSrc(imgSrc);
    };
    return (
        <Container>
            <Upload
                type="text"
                onChange={changeImage}
                placeholder="Insert Image source"
            />
        </Container>
    );
}

export default Uploader;
