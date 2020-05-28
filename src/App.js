import React, { useState } from "react";
import styled from "styled-components";
import Classifier from "./components/Classifier";
import Uploader from "./components/Uploader";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ecf0f1;
`;
const Title = styled.h1``;

function App() {
    const [imageSrc, setImageSrc] = useState();

    return (
        <AppContainer>
            <Container>
                <Title>Guess What</Title>
                <Uploader imageSrc={imageSrc} setImageSrc={setImageSrc} />
                <Classifier imageSrc={imageSrc} />
            </Container>
        </AppContainer>
    );
}

export default App;
