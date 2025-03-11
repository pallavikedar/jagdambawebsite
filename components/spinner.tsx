export default function Spinner() {
  return (
    <div
      id="spinner"
      className="show bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center z-50"
    >
      <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

