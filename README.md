# SuperEnergy Website

This is a responsive, single-page website for SuperEnergy, built with Next.js and styled with Tailwind CSS. The site features a hero section, a services overview, a projects gallery, and a detailed footer. It's designed to showcase the company's work in a modern and clean way.

## Features

- **Responsive Design**: The layout adapts gracefully to various screen sizes, from mobile devices to large desktops.
- **Modern UI**: Uses Tailwind CSS for a clean, utility-first styling approach.
- **Interactive Elements**: Hover effects on navigation links, social icons, and project cards to enhance user experience.
- **Font Awesome Integration**: Utilizes Font Awesome for crisp, scalable vector icons, providing a professional look.
- **Image Optimization**: Uses Next.js's built-in `Image` component for automatic image optimization and improved performance.
- **External Links**: Social media icons and contact information are correctly linked to external pages.

## Technologies Used

- **Next.js**: The React framework for building the application.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React**: The core library for building the user interface.
- **Font Awesome**: Used for all social media and contact icons.

## Getting Started

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

You'll need to have Node.js and npm installed on your local machine.

- **Node.js**: [https://nodejs.org/](https://nodejs.org/)
- **npm**: Comes bundled with Node.js.

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/your-project-name.git](https://github.com/your-username/your-project-name.git)
    ```
2.  Navigate into the project directory:
    ```bash
    cd your-project-name
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
    This will install all the necessary packages, including Next.js, Tailwind CSS, and Font Awesome.

### Running the Development Server

1.  Start the development server with:
    ```bash
    npm run dev
    ```
2.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will auto-update as you edit the source files.

## Project Structure

This project uses the Next.js App Router structure. The main page content is located in `app/page.js`.

- `app/page.js`: The main component containing the full page layout and all sections.
- `public/images/`: This directory contains all the static images used in the project, such as the logo and section backgrounds.

## Customization

### Updating Content and Links

- To change text, simply edit the content within the JSX elements in `page.js`.
- To update the social media links, find the `<a>` tags in the social icon sections and replace `"https://facebook.com/your-profile-url"` with your actual URLs.
- For the email link, change `"mailto:your-email-address@example.com"` to your company's email.

### Styling

- This project is styled entirely with Tailwind CSS utility classes. You can modify the look and feel by adjusting these classes directly in your JSX. For example, to change the button color, edit the `bg-orange-500` class.
- The custom color `#F16214` is used for some icons and can be easily changed by modifying the `text-[#F16214]` class.

---

## Contact

For any questions or feedback, please reach out to the SuperEnergy team at:

- **Email**: team@superenergy.ng
- **Phone**: +234-90-7884903

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
