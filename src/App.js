import React, { useState } from "react";
import styled from "styled-components";
import Classifier from "./components/Classifier";
import Uploader from "./components/Uploader";
import DonutChart from "./components/Chart";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf0f1;
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
`;

const Container = styled.div`
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1``;

const ChartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

function App() {
    const [imageSrc, setImageSrc] = useState();
    const [results, setResults] = useState([]);
    const [chartData, setChartData] = useState();

    return (
        <AppContainer>
            <Container>
                <Title>Guess What</Title>
                <Uploader imageSrc={imageSrc} setImageSrc={setImageSrc} />
                <Classifier
                    imageSrc={imageSrc}
                    results={results}
                    setResults={setResults}
                    setChartData={setChartData}
                />
            </Container>
            <ChartContainer>
                <DonutChart chartData={chartData} />
            </ChartContainer>
        </AppContainer>
    );
}

export default App;
