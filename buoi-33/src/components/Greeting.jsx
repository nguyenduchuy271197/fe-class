import { useState } from "react";

export default function Greeting() {
  const [text, setText] = useState("");
  const [displayName, setDisplayName] = useState("");

  return (
    <div className="max-w-screen-sm mx-auto px-8 py-12">
      <div>
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Write your name..."
            className="input input-bordered w-full max-w-xs"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn"
            disabled={text === "" ? "disabled" : ""}
            onClick={() => setDisplayName(text)}
          >
            Say Hi
          </button>
        </div>

        {displayName !== "" && (
          <div className="mt-8">
            <h2 className="text-5xl font-bold">Hi {displayName}!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

// Nhận định dữ liệu thay đổi của component (button status, input text)
// Kiểm tra thử xem là 2 cái dữ liệu đó nó có liên quan với nhau không? -> Có, Input text = ""
// Tạo ra UI version tương ứng với trạng thái đó
// Nhận định được bien trạng thái cho component
// Xu ly event
