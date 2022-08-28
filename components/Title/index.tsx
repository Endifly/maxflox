const Title = () => {
  return (
    <div>
      <p
        className="bold text-white text-title text-center"
        style={{
          textShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          // box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        }}
      >
        MAGNETIZED
      </p>
      <p
        className="bold text-white text-title text-center -mt-6"
        style={{
          textShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        VORTEX WATER
      </p>
      <p
        className="bold text-white text-center -mt-6"
        style={{
          fontSize: 32,
          textShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        TO NET ZERO
      </p>
    </div>
  );
};

export default Title;
