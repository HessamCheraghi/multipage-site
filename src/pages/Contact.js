import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  console.log(name);
  return (
    <div>
      <h2>hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam
        optio soluta impedit iusto. Illum unde consequatur ducimus porro, veniam
        reiciendis, nesciunt molestias eaque fugiat, provident odio. Cumque,
        doloremque vel?
      </p>
    </div>
  );
}
