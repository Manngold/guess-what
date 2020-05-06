import React, { useState } from "react";
import styled from "styled-components";
import ml5 from "ml5";
import ClipLoader from "react-spinners/ClipLoader";

const Container = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Image = styled.img`
    height: 30rem;
    width: 40rem;
`;

const List = styled.ul`
    margin-top: 20px;
`;

const Item = styled.li`
    list-style-type: none;
`;
function Classifier({ imageSrc }) {
    const [results, setResults] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const classifyImg = () => {
        setLoading(true);
        const classifier = ml5.imageClassifier("MobileNet", () =>
            console.log("Module loaded")
        );

        const image = document.querySelector("#image");

        classifier
            .predict(image, 5, (err, classifiedResults) => {
                return classifiedResults;
            })
            .then((classifiedResults) => {
                setLoading(false);
                setResults(classifiedResults);
            });
    };
    return (
        <Container>
            <Image
                src={imageSrc}
                id="image"
                onLoad={classifyImg}
                crossOrigin="anonymous"
            />
            {isLoading ? (
                <ClipLoader />
            ) : (
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
            )}
        </Container>
    );
}

export default Classifier;
