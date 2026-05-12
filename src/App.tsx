import CV from "./markdown/cv.mdx";

function App() {
  return (
    <div
      id="print-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <CV />
    </div>
  );
}

export default App;
