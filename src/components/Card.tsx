import type { Photo } from "../types";

export function Card({ photo }: { photo: Photo }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "8px",
      width: "250px"
    }}>
      <p>ID: {photo.id}</p>
      <p>Album ID: {photo.albumId}</p>
      <p>Title: {photo.title}</p>
      <p style={{ wordBreak: "break-all" }}>URL: {photo.url}</p>
    </div>
  );
}