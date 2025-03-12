"use client"

export default function SecondaryButton({text, icon, primary}) {
  return (
    primary ? (
        <button className={`text-white px-5 py-2 flex items-center gap-2 text-lg font-medium cursor-pointer hover:scale-90 transition-all duration-400 justify-center bg-primary rounded-md shadow-lg`}>
        {icon && icon}
        <span>{text}</span>
    </button>
    ) : (
        <button className={`text-white px-5 py-2 flex items-center gap-2 text-lg font-medium cursor-pointer hover:scale-90 transition-all duration-400 justify-center bg-secondary rounded-md shadow-lg`}>
        {icon && icon}
        <span>{text}</span>
    </button>
    )
  )
}
