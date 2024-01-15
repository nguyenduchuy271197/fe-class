import { useState } from "react";
// https://daisyui.com/components/collapse/

export default function Collapse() {
  // let isOpen = false;
  // Array destructuring
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    // Tính ra trạng thái tiếp theo
    const nextIsOpen = !isOpen;

    // Step 1: Thay đổi state
    // Step 2: Rerender component
    setIsOpen(nextIsOpen);
  }

  // State: Đóng
  return (
    <div
      className={`text-white  m-8 rounded-xl ${
        isOpen === true ? "bg-pink-500" : "bg-blue-500"
      }`}
    >
      <button
        className="p-4 rounded-full duration-150 w-full text-left"
        onClick={handleClick}
      >
        Click me to show/hide content
      </button>

      {/* {isOpen === true ? <p className="p-4">Hello</p> : ""} */}
      {isOpen === true && <p className="p-4">Hello</p>}
    </div>
  );
}
