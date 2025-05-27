interface ColorButtonProps {
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function ColorButton({
  color,
  isSelected,
  onClick,
}: ColorButtonProps) {
  return (
    <button
      className={`rounded-full w-8 h-8 cursor-pointer border-2 ${
        isSelected
          ? "ring-1 ring-offset-1 ring-black"
          : "border-gray-300 hover:border-gray-400"
      }`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
}
