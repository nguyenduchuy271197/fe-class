// Định nghĩa và sử dụng một Component (thành phần)

import Avatar from "./Avatar";

export default function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <div className="avatar-list">
        <Avatar
          name="Huy"
          job="Developer"
          imageUrl="https://plus.unsplash.com/premium_photo-1667810132017-c40be88c6b25?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJpYXR8ZW58MHx8MHx8fDA%3D"
        />
        <Avatar
          name="Cat Tuong"
          job="Front-end Developer"
          imageUrl="https://images.unsplash.com/photo-1613764051502-251fc50ad399?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJpYXR8ZW58MHx8MHx8fDA%3D"
          size={150}
        />
        <Avatar
          name="Ngoc Anh"
          job="Back-end Developer"
          imageUrl="https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJpYXR8ZW58MHx8MHx8fDA%3D"
        />
        <Avatar
          name="Trang"
          job="Account"
          imageUrl="https://images.unsplash.com/photo-1559072286-e48f484c9b27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJpYXR8ZW58MHx8MHx8fDA%3D"
          size={120}
        />
      </div>
    </div>
  );
}
