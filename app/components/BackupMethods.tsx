{
  /*
<div className="flex justify-center items-center w-250 h-100">
    <Image
    src={skillBarPicture}
    alt="image of the skillbar"
    className="w-[1000px] h-20 rounded-2xl border-4 border-transparent" // Custom width
    />
</div>
*/
}

{
  /*
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
    border: `3px solid ${borderColor}`,
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

export default SkillBar;             <SkillBar
              boxes={[
                { backgroundColor: "#B22222", borderColor: "white" },
                { backgroundColor: "#CC5500", borderColor: "white" },
                { backgroundColor: "#DAA520", borderColor: "white" },
                { backgroundColor: "#32CD32", borderColor: "white" },
              ]}
            /> 
*/
}
