import { useState } from "react";
const Area = () => {
    const [size, setSize] = useState({ width: 200, height: 100 });
    return (
        <div>
            <h1>
                너비 : {size.width}, 높이 : {size.height}
            </h1>
            <button
                onClick={() => {
                    const copy = { ...size };
                    copy.width += 20;
                    setSize(copy);
                }}
            >
                너비 키우기
            </button>
            <button
                onClick={() => {
                    const copy = { ...size };
                    copy.width -= 20;
                    setSize(copy);
                }}
            >
                너비 줄이기
            </button>
            <button
                onClick={() => {
                    const copy = { ...size };
                    copy.height += 10;
                    setSize(copy);
                }}
            >
                높이 키우기
            </button>
            <button
                onClick={() => {
                    const copy = { ...size };
                    copy.height -= 10;
                    setSize(copy);
                }}
            >
                높이 줄이기
            </button>
        </div>
    );
};
export default Area;