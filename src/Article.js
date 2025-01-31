export default function ({
  personName,
  email,
  content = "no content",
  children,
}) {
  return (
    <div
      style={{
        background: "white",
        boxShadow: "0px 10px 10px gray",
        color: "black",
        margin: "10px",
      }}
    >
      <h1>{personName}</h1>
      <h3>{email}</h3>
      <h3>1996</h3>
      <hr></hr>
      <p>{children}</p>
    </div>
  );
}
