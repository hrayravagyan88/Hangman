const HEAD= (
    <div  style ={{
        width:'50px',
        height:'50px',
        borderRadius:'100%',
        border:"10px solid black",
        position:"absolute",
        right: "-44px",
        top: "49px",
    }}/>
);

const BODY= (
    <div  style ={{
        background: "black",
        width:'10px',
        height:'100px',
        position:"absolute",
        right: "-12px",
        top: "110px"
    }}/>
);

const RIGHT_ARM= (
    <div  style ={{
        background: "black",
        width:'100px',
        height:'10px',
        position:"absolute",
        right: "-113px",
        top: "157px",
        rotate:"-26deg",
        transformOrigin:"left bottom"
    }}/>
);

const LEFT_ARM= (
    <div  style ={{
        background: "black",
        width:'100px',
        height:'10px',
        position:"absolute",
        right: "-10px",
        top: "115px",
        rotate:"26deg",
        transformOrigin:"left bottom"
    }}/>
);

const RightLeg= (
    <div  style ={{
        background: "black",
        width:'100px',
        height:'10px',
        position:"absolute",
        right: "-105px",
        top: "207px",
        rotate:"26deg",
        transformOrigin:"left bottom"
    }}/>
);

const LeftLeg= (
    <div  style ={{
        background: "black",
        width:'100px',
        height:'10px',
        position:"absolute",
        right: "-105px",
        top: "198px",
        rotate: "159deg",
        transformOrigin:"left bottom"
    }}/>
);

const BODY_PARTS = [HEAD,BODY,RIGHT_ARM,LEFT_ARM,RightLeg,LeftLeg]
type HangmanDrowingProps = {
  numberofGuesses:number
}
export function HangmanDrawing({numberofGuesses}:HangmanDrowingProps) {
  return (
    <div style={{ position: "relative"}}>
    {BODY_PARTS.slice(0,numberofGuesses)}
      <div key="1"
        style={{
            position: "absolute",
            right: "-10px",
            height: "50px",
            width: "10px",
            background: "black",
            marginLeft: "120px",
          
        }}
      />
      <div
      key="2"
        style={{
          height: "10px",
          width: "220px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
      key="3"
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "250px", background: "black" }}
      ></div>
    </div>
  );
}
