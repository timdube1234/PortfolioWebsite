interface BoxStyleProps {
  backgroundColor: string;
  borderColor: string;
}

interface SkillBarProps {
  boxes: BoxStyleProps[];
}

const SkillBar: React.FC<SkillBarProps> = ({ boxes }) => {
  const boxContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
  };

  const boxStyle = (
    backgroundColor: string,
    borderColor: string
  ): React.CSSProperties => ({
    width: "268px",
    height: "50px",
    border: `4px solid ${borderColor}`,
    backgroundColor,
  });

  return (
    <div style={boxContainerStyle}>
      {boxes.map((box, index) => (
        <div
          key={index}
          style={boxStyle(box.backgroundColor, box.borderColor)}
        ></div>
      ))}
    </div>
  );
};

export default SkillBar;
