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
    width: 100%;
    height: 100%;
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
function Classifier({
    imageSrc,
    results,
    setResults,
    chartData,
    setChartData,
}) {
    const [isLoading, setLoading] = useState(false);

    const loadErrorHandler = (e) => {
        e.preventDefault();
        e.target.src =
            "https://miro.medium.com/max/2800/0*heiz7awNkQ1B0O8e.png";
    };

    const classifyImg = () => {
        setLoading(true);
        let data = {
            columns: [],
            type: "donut",
            title: "Top 5",
        };

        const classifier = ml5.imageClassifier("MobileNet", () =>
            console.log("Module loaded")
        );

        const image = document.querySelector("#image");

        classifier
            .predict(image, 5, (err, classifiedResults) => {
                if (err) {
                    console.log(err);
                } else {
                    return classifiedResults;
                }
            })
            .then((classifiedResults) => {
                setLoading(false);
                setResults(classifiedResults);
                for (let result of classifiedResults) {
                    const { columns } = data;
                    const { label, confidence } = result;
                    columns.push([label, confidence]);
                }
                if (typeof chartData === "object") {
                    setChartData();
                }
                setChartData(data);
            });
    };
    return (
        <Container>
            {imageSrc && imageSrc.length !== 0 ? (
                <Image
                    src={imageSrc}
                    id="image"
                    onLoad={classifyImg}
                    onError={loadErrorHandler}
                    crossOrigin="anonymous"
                />
            ) : (
                <span>Please Load Image</span>
            )}
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
