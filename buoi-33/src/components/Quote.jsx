import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "Don't count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    quote:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote:
      "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
];

// 20 -> lastIndex = 19 -> nextIndex = 20 -> quotes[20]

export default function Quote() {
  // State variable: open
  // Initial State: false (boolean)

  // State variable: activeIndex
  // Initial State: 0 (number)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-screen-sm mx-auto px-8 py-12">
      <div className="border p-8 rounded-xl flex flex-col items-center gap-8">
        <div className="text-center">
          <p className="text-2xl mb-4">{quotes[activeIndex].quote}</p>
          <p>- {quotes[activeIndex].author} -</p>
        </div>
        <div className="flex items-center gap-2">
          {activeIndex > 0 && (
            <button
              className="size-10 rounded text-white bg-blue-500 flex items-center justify-center hover:opacity-90"
              onClick={() => setActiveIndex(activeIndex - 1)}
            >
              <ChevronLeft />
            </button>
          )}

          {activeIndex < quotes.length - 1 && (
            <button
              className="size-10 rounded text-white bg-blue-500 flex items-center justify-center hover:opacity-90"
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Nhận định dữ liệu thay đổi của component (quote thay đổi)
// Tạo ra UI version tương ứng với trạng thái đó
// Nhận định được bien trạng thái cho component
// Xu ly event
