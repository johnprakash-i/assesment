import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import type { Photo } from "./types";

const LIMIT = 20; 

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPhotos(page);
  }, [page]);

  const fetchPhotos = async (pageNumber: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=${LIMIT}`
      );
      const data = await res.json();
      setPhotos(data);
    } catch (err) {
      console.error("Error fetching photos", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
 

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

      <div style={gridStyle}>
        {photos.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>

      <div style={paginationStyle}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>
          ⬅ Prev
        </button>

        <span style={{ margin: "0 10px" }}>Page {page}</span>

        <button onClick={() => setPage((p) => p + 1)}>
          Next ➡
        </button>
      </div>
    </div>
  );
}

const gridStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const paginationStyle: React.CSSProperties = {
  textAlign: "center",
  margin: "20px",
};