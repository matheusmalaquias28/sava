import {
  CROWN_D,
  CROWN_TRANSFORM,
  KNIGHT_D,
  KNIGHT_TRANSFORM,
  SYMBOL_VIEWBOX,
} from "@/lib/brand";

type Props = {
  className?: string;
  knightClassName?: string;
  crownClassName?: string;
  knightFill?: string;
  crownFill?: string;
  title?: string;
};

export function KnightSymbol({
  className,
  knightClassName,
  crownClassName,
  knightFill = "currentColor",
  crownFill = "#BF8055",
  title,
}: Props) {
  return (
    <svg
      viewBox={SYMBOL_VIEWBOX}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path
        className={knightClassName}
        transform={KNIGHT_TRANSFORM}
        d={KNIGHT_D}
        fill={knightFill}
        fillRule="evenodd"
      />
      <path
        className={crownClassName}
        transform={CROWN_TRANSFORM}
        d={CROWN_D}
        fill={crownFill}
        fillRule="evenodd"
      />
    </svg>
  );
}
