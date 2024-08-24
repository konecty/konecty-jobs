import { render, screen } from "@testing-library/react";
import ErrorMessage from "@/app/components/ErrorMessage/ErrorMessage";

describe("ErrorMessage Component", () => {
  it("should render without crashing", () => {
    render(<ErrorMessage message="This is an error message" />);
    
    const errorMessage = screen.getByText("This is an error message");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should display the correct error message", () => {
    const testMessage = "Something went wrong!";
    render(<ErrorMessage message={testMessage} />);
    
    const errorMessage = screen.getByText(testMessage);
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(testMessage);
  });

  it("should apply the correct CSS classes to the paragraph", () => {
    render(<ErrorMessage message="This is an error message" />);
    
    const errorMessage = screen.getByText("This is an error message");
    expect(errorMessage).toHaveClass("font-montserrat font-semibold");
  });

  it("should have a container with correct CSS classes", () => {
    const { container } = render(<ErrorMessage message="This is an error message" />);
    
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("flex justify-center");
  });

  it("should not render anything else besides the error message", () => {
    const { container } = render(<ErrorMessage message="This is an error message" />);
    
    // Expect only one child inside the container (the error message)
    expect(container.childElementCount).toBe(1);
  });
});
