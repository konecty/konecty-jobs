import { render, screen } from "@testing-library/react";
import Loading from "@/app/components/Loading/Loading";

describe("Loading Component", () => {
  it("should render three bouncing balls", () => {
    const { container } = render(<Loading />);

    const balls = container.querySelectorAll("div.animate-bounce");
    expect(balls.length).toBe(3);
  });

  it("should render with accessible loading text", () => {
    render(<Loading />);
    
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
    expect(loadingText).toHaveClass("sr-only");
  });

  it("should apply correct classes to each bouncing ball", () => {
    const { container } = render(<Loading />);
    
    const balls = container.querySelectorAll("div.animate-bounce");
    expect(balls[0]).toHaveClass("h-8 w-8 rounded-full bg-[#51BAE8] [animation-delay:-0.3s]");
    expect(balls[1]).toHaveClass("h-8 w-8 rounded-full bg-[#51BAE8] [animation-delay:-0.15s]");
    expect(balls[2]).toHaveClass("h-8 w-8 rounded-full bg-[#51BAE8]");
  });

  it("should have a container with appropriate styling", () => {
    const { container } = render(<Loading />);
    
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("flex h-screen items-center justify-center space-x-2 bg-[#F2F2F2]");
  });
});
