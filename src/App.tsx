import StockPhotos from "./components/StockPhotos.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Photo } from "./interfaces/Photos.ts";

const Container = styled.div`
    width: 100vw;
    margin: auto;
    // Discord grey
    background-color: #424549;
`;

export default function App() {
    const [data, setData] = useState<Photo[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            // Stopped at 99 to keep page grid even at the end, and limit
            const response = await fetch("https://picsum.photos/v2/list?page=1&limit=99");
            const results: Photo[] = await response.json();
            setData(results);
        }

        fetchData()
            .then(() => console.log("Data obtained B)!"))
            .catch((e: Error) => console.log("Me when the: " + e));
    }, []);

    return (
        <Container>
            <StockPhotos data={data} />
        </Container>
    );
}
