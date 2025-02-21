import styled from "styled-components";
import { Photo } from "../interfaces/Photos.ts";

const PhotoFrames = styled.div`
    display: flex;
    margin: auto;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

const ImageContainer = styled.div`
    width: 30vw;
    margin: 1vw;
    text-align: center;
    border-radius: 8px;
    border: solid white 10px;
    // There was an issue with horizontal scroll being allowed, and I found this fix
    // https://www.geeksforgeeks.org/how-to-remove-horizontal-scrollbar-in-react-js/
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`;

const PhotoDetails = styled.div`
    margin-top: 3vh;
    font-size: calc(2vw + 10%);
    color: white;
`;

export default function StockPhotos(props: { data: Photo[] }) {
    return (
        <PhotoFrames>
            {
                props.data.map((char: Photo) => (
                    <ImageContainer key={char.id}>
                        <Image src={char.download_url} alt={`Photo by ${char.author}`} />
                        <PhotoDetails>
                            <p><b>Taken by:</b> {char.author}</p>
                            <p><b>Size:</b> {char.width} * {char.height}</p>
                            <p><b>ID:</b> {char.id}</p>
                            <p><b>Source:</b> <a href={char.url} target="_blank" rel="noopener noreferrer">Link</a></p>
                        </PhotoDetails>
                    </ImageContainer>
                )
            )}
        </PhotoFrames>
    );
}
