const Gradient = () => {
  return (
    <>
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-cta" />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-100 h-100 gradient-glow opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-75 h-75 gradient-glow opacity-30" />
    </>
  );
};

export default Gradient;
