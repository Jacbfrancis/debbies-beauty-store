export default function LoadingSpinner({ borderColor }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`h-5 w-5 animate-spin rounded-full border-3 border-solid ${borderColor} border-t-transparent`}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
