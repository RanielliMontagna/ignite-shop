import { styled } from "@/styles";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  borderRadius: 8,
  border: 0,
  padding: "4px 8px",
});

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
