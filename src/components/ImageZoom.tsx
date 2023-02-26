interface Props {
  className?: string;
  offset?: { x?: number; y?: number };
  src: string;
  alt: string;
}

export const ImageZoom = ({
  src,
  alt,
  className,
  offset,
}: Props): JSX.Element => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        draggable="false"
        className="h-full w-full scale-100 select-none object-cover transition-transform duration-500 hover:scale-150"
        style={{ marginTop: offset?.y ?? 0, marginLeft: offset?.x ?? 0 }}
      />
    </div>
  );
};
