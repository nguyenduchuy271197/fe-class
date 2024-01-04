export default function Avatar({ imageUrl, name, job, size = 100 }) {
  return (
    <div className="avatar">
      <img
        src={imageUrl}
        alt=""
        className="avatar-img"
        style={{
          width: size,
          height: size,
        }}
      />
      <div>
        <h3 className="avatar-name">{name}</h3>
        <p>{job}</p>
      </div>
    </div>
  );
}
