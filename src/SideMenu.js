import TagButton from "./TagButton";
export default function SideMenu() {
  return (
    <div style={{ border: "solid teal 5px" }}>
      <TagButton title="goooopppppppp">
        <div>
          <span>😜😜😜😜😜</span>
        </div>
      </TagButton>
      <TagButton title="odddddddddddd">
        <div>
          <img
            style={{ width: "100px" }}
            src="https://onetreeplanted.org/cdn/shop/articles/Forest_Fog_1600x.jpg?v=1682535224"
          />
        </div>
      </TagButton>
      <TagButton title="mmmmmmmmmmmm">
        <h1>Click Me</h1>
        <span>👍</span>
      </TagButton>
     
    </div>
  );
}
