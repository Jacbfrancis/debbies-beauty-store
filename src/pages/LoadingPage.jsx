export default function LoadingPage() {
  return (
    <div className="bg-[#fff] fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#e94a6d] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
