const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="h-5 w-5 animate-spin rounded-full border-2 border-solid border-white border-t-transparent"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
