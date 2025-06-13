
# Avaliação do Voluntariado Lacrei Saúde.
Development of two interactive pages with components and tests, respecting Lacrei Saúde's identity and  visual aspects,  for the technical assessment for the evaluation of Lacrei Saúde Volunteering.

## Getting Started
1. Run "npm install" in your terminal.
2. Then run "npm run dev" to run the project locally. 
3. Open [http://localhost:3000] in your browser to access it.


## Tech Stack
- NextJS
- Lenguage: TypeScript
- Stylin: Styled-Components
- Testing: Jest

## This project contains
- Two pages with functional routing. (Home and Ajuda)
- Header, footer (as components) and interactive buttons.
- Responsiveness for different devices.
- Use of Next.js, TypeScript and Styled Components.
- Unit tests with Jest (button in the Home page, Header component and QandA component).
- Functional deployment with accessible link.
- Complete README and rollback proposal.

## Tests
To run the tests write in your terminal "npm test". 

There are three tests implemented:
1. To verify that the "Header" component adjusts correctly to different screen sizes.
2. To verify that the "Q&A" component (related to the question blocks on the help page) is displaying the answer to the question when clicked.
3. To verify that the "know" button on the homepage is working.

You can find the tests in the "__tests__" folder.

## Deployed on Vercel
The page is currently deployed.
If you want to roll back to a previous deployment stage, you can do so by following these steps:
1. Go to the project in Vercel.
2. Go to the "deployments" tab.
3. Click the deployment version you want to revert to.
4. Locate the three dots (...) next to the "visit" button and click them.
5. Click "Instant Rollback."

To deploy new changes executed do "git push", since the deployment is automatically set up with Vercel.

To access the page deployed go to: [https://lacrei-saude-assessment.vercel.app/]

## Comments on the visual and technical choices made

This project is a graphic copy of the official Lacrei Saúde landing page.
It consists of two pages: one is the Homepage and the other is the Help page.
In both, you can find elements similar to those on the official landing page. With the exception of the Homepage, where, due to time constraints, I decided at the time of creating the project to limit it to only three sections (the Hero and two additional sections).
Likewise, there are several functional buttons. The button to access the Home page (through the logo in the header) and the button to access the Help page are in the header and, as previously established, connect to the pages themselves.
The buttons located in the body of both pages or in the footer are hyperlinks (aiming to maintain the original structure as much as possible within the established time limit).

## Contributors
Emma Luisa Wallis
