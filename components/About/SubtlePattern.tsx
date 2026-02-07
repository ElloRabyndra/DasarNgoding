const SubtlePattern = () => {
  return (
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 99%) 1px, transparent 0)`,
        backgroundSize: "32px 32px",
      }}
    />
  );
};

export default SubtlePattern;
