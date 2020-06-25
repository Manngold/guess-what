import React, { useState } from "react";
import styled from "styled-components";
import Classifier from "./components/Classifier";
import Uploader from "./components/Uploader";
import DonutChart from "./components/Chart";
import GlobalStyles from "./components/GlobalStyles";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ecf0f1;
    height: 100vh;
    width: 100%;
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 30px;
    margin: 10px;
`;

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
            <GlobalStyles />
            <Title>Guess What</Title>
            <Uploader imageSrc={imageSrc} setImageSrc={setImageSrc} />
            <Container>
                <Classifier
                    imageSrc={imageSrc}
                    results={results}
                    setResults={setResults}
                    chartData={chartData}
                    setChartData={setChartData}
                />
                <ChartContainer>
                    <DonutChart chartData={chartData} />
                </ChartContainer>
            </Container>
        </AppContainer>
    );
}

export default App;
