import React, { useState } from "react";
import styled from "styled-components";
import ml5 from "ml5";

const Container = styled.div`
    margin-top: 30px;
`;

const Image = styled.img`
    height: 20rem;
    width: 30rem;
`;

const List = styled.ul``;

const Item = styled.li``;
function Classifier({ imageSrc }) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const classifyImg = () => {
        const modelLoaded = () => setLoading(true);

        const classifier = ml5.imageClassifier("MobileNet", modelLoaded);

        const image = document.querySelector("#image");

        classifier
            .predict(image, 5, (err, classifiedResults) => classifiedResults)
            .then((classifiedResults) => setResults(classifiedResults))
            .then(setLoading(false));
    };
    return (
        <Container>
            <Image
                src={imageSrc}
                id="image"
                onLoad={classifyImg}
                crossOrigin="anonymous"
            />
            <List>
                {results.map((result, index) => {
                    const { label, confidence } = result;
                    return (
                        <Item key={index}>{`${
                            index + 1
                        }. Predictation : ${label} , ${Math.floor(
                            confidence * 100
                        )}%`}</Item>
                    );
                })}
            </List>
        </Container>
    );
}

export default Classifier;
