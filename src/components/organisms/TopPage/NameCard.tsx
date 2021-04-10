import React from "react";
import styled from "styled-components";
import icon from "./assets/tata.svg";


const CardContainer = styled.div`
    color: #DDDDDD;
    height: 300px;
    width: 500px;
    border: 1px groove #DDDDDD;
    box-shadow:1px 1px;
    display:-webkit-box;
  	display:-ms-flexbox;
  	display:flex;
    -webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
    -webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
`;

const CardImageContainer = styled.div`
    width: 50%;
    height: 100%;

    img {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        -webkit-transform: translateY(-50%) translateX(-50%);
    }
`;

const CardContentContainer = styled.div`
    width: 50%;
    height: 100%;
    display:-webkit-box;
  	display:-ms-flexbox;
  	display:flex;
    -webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
    -webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
`;

const PTagContainer = styled.div`

    p {
        text-align: center;
        font-size: 20px;
    }
`;

interface CardNameContentProps {
    name: string;
    HN: string;
};

const NameCard: React.FC<CardNameContentProps> = (props) => {

    return (
        <CardContainer>
            <CardImageContainer><img src={icon} width={200} height={200} /></CardImageContainer>
            <CardContentContainer>
                <PTagContainer>
                    <p>{props.name}</p>
                    <p>{props.HN}</p>
                </PTagContainer>
            </CardContentContainer>
        </CardContainer>
    );
};

export { NameCard };

