import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm Elvis`", () => {
    render(<App />);
    
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm elvis/i,
      exact: false,
      level: 1,
    });
  
    expect(topLevelHeading).toBeInTheDocument();
  });
  
  test("displays an image with alt text identifying its content", () => {
    render(<App />);
    
    const profileImage = screen.getByAltText(/a photo of elvis/i);
    
    expect(profileImage).toBeInTheDocument();
  });
  
  test("displays an About Me heading and paragraph", () => {
    render(<App />);
    
    const aboutHeading = screen.getByRole("heading", { name: /about me/i, level: 2 });
    const aboutParagraph = screen.getByText(/passionate developer/i);
    
    expect(aboutHeading).toBeInTheDocument();
    expect(aboutParagraph).toBeInTheDocument();
  });
  
  test("contains GitHub and LinkedIn links", () => {
    render(<App />);
    
    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });