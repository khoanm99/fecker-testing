const PlusCircle = ({ className }: { className: string }) => {
  return (
    <svg
      width="101"
      height="101"
      viewBox="0 0 101 101"
      fill="none"
      className={className}
    >
      <circle cx="50.5" cy="50.5" r="49.5" stroke="#39C66B" strokeWidth="2" />
      <line
        x1="75.1719"
        y1="51"
        x2="27.0026"
        y2="51"
        stroke="#39C66B"
        strokeWidth="2"
      />
      <line
        x1="51"
        y1="26"
        x2="51"
        y2="74.1692"
        stroke="#39C66B"
        strokeWidth="2"
      />
    </svg>
  );
};

export default PlusCircle;
