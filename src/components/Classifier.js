import React from "react";
import styled from "styled-components";
import ml5 from "ml5";

const Container = styled.div`
    margin-top: 30px;
`;

const Image = styled.img`
    height: 20rem;
    width: 30rem;
`;

function Classifier({ imageSrc }) {
    return (
        <Container>
            <Image src={imageSrc} />
        </Container>
    );
}

export default Classifier;
