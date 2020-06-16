import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Upload = styled.input`
    border: none;
    width: 16rem;
    line-height: 2rem;
    font-size: 1rem;
    padding-left: 10px;
    outline: none;
`;
const Button = styled.input`
    margin-left: 20px;
    font-size: 2rem;
`;
function Uploader({ setImageSrc }) {
    const changeImage = (e) => {
        e.preventDefault();
        const imgSrc = document.querySelector("#url_container").value;
        setImageSrc(imgSrc);
    };
    const clearInput = (e) => {
        e.target.value = "";
    };
    return (
        <Container>
            <Upload
                id="url_container"
                type="text"
                placeholder="Insert Image Url"
                onClick={clearInput}
            />
            <Button type="submit" onClick={changeImage} value="Upload" />
        </Container>
    );
}

export default Uploader;
