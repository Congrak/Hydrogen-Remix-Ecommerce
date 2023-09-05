export function meta() {
  return [{title: 'FreeZone'}, {description: 'The Best Online Store'}];
}

export default function Index() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col absolute z-1 w-full h-full justify-center text=left">
        <h1 className="text-[8rem] font-bold text-white pl-20">
          Free<span className="text-[#0179C1]">Zone</span>
        </h1>
        <h4 className="text-xl font-bold text-[#BAC0CB] pl-20">The Best Online Store.</h4>
      </div>
      <img className="w-full h-full " src="/wallpeper.webp" alt="FreeZone" />
    </div>
  );
}
