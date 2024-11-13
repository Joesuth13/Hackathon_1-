# **Team Retrowave: Rock paper scissors** 

## **Overview**

### **Purpose**

A brief description of the project's purpose, what it aims to achieve, and the value it provides to the users.

The purpose of our project is to make a fun and engaging game for players. This Rock Paper Scissors game can be used to settle minor decisions, or simply to pass time. Users will be  playing interactively against the computer, getting constant feedback on their performance. We hope to keep players entertained by engaging all their senses e.g. with visuals and sound.

### **Target Audience**

Our game is aimed at casual gamers of all ages who enjoy playing quick, simple games. For those on the go, it offers a mobile version with touch friendly controls. Those who enjoy classic arcade games or th retro aesthetic may have a particular affinity to this game, as it may give them a sense of nostalgia.

**User Stories**

### **Must-Have User Stories**

**User Story 1:**   
As a Player I can play against an opponent so that it works

**Acceptance criteria:**

* true random logic  
* Opponent choice to display  
* Opponent choice to be compared with player choice

**Tasks:**

* JS RNG  
* JS function to compare against player  
* JS function to pass win/loss/tie to score function

**User Story 2:** 

| As a Player I can choose between gameplay options so that I can interact with the game Acceptance criteria: Choice offered choice is played Pleasing design Basic click feedback Tasks: Create html to contain choices Style appropriately  Create JS event listeners to write to variable. |
| :---- |

### **Should-Have User Stories**

| User Story 1: As a Employer I can see the GitHub profiles of the developers so that I can further explore their work Acceptance criteria: Anchors clearly linking to developers GitHub profiles. Appropriately styled anchors that are eye catching and accessible. Footer does not obscure main content. Fixed footer. Tasks: Adapt Bootstrap footer example match games brand. Add FontAwesome for GitHub logo in GitHub profile anchors. |
| :---- |

**User Story 2:**

As a Player I can access a navbar so that I change gamemode

**Acceptance criteria:**

* Gamemode can be changed from navbar.  
* Navbar is responsive.  
* Navbar highlights current gamemode.

**Tasks:**

*  Take Bootstrap navbar and style appropriately.  
* Mock placeholder pages.  
*  Class to represent active gamemode.  
*  Source logo.

**User Story 3:**

As a Player I can See a score counter so that track my wins

**Acceptance criteria:**

* Counter is cohesive with the page design  
* Counter increments  
* Total : wins : losses

**Tasks:**

*  Create html container  
* Create JS reads the game over condition write to "wins" or "Losses"  
* Total score increment

(Include all prioritized should-have features)  
 **Guidance:** Document the secondary features that you aim to implement in Phase 3: Should User Stories Implementation & Any Advanced Features. Include clear acceptance criteria for each.

### **Could-Have User Stories**

**User Story 1:**

As a User I can see current winning streak so that I remain engaged and feel rewarded

**Acceptance criteria:**

* Current winning streak is recorded.  
* Maximum winning streak is recorded.  
* Current and Maximum saved between browser sessions.


**Tasks:**

*  Increment current streak on win.  
* Reset streak on loss, save into maximum if highest.  
* Save to local storage regularly..

**User Story 2:** 

| As a User I can choose nerd mode so that I can be kept engaged List: [https://i.etsystatic.com/15843844/r/il/dcadfa/4417678458/il\_fullxfull.4417678458\_9n6c.jpg](https://i.etsystatic.com/15843844/r/il/dcadfa/4417678458/il_fullxfull.4417678458_9n6c.jpg)Diagram: [https://static.wixstatic.com/media/903056\_39aa9523c70a428684be9744580b0b1b\~mv2.png/v1/fill/w\_568,h\_568,al\_c,q\_85,usm\_0.66\_1.00\_0.01,enc\_auto/903056\_39aa9523c70a428684be9744580b0b1b\~mv2.png](https://static.wixstatic.com/media/903056_39aa9523c70a428684be9744580b0b1b~mv2.png/v1/fill/w_568,h_568,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/903056_39aa9523c70a428684be9744580b0b1b~mv2.png) Acceptance criteria: Spock & Lizard can be played. Helper text is visible to indicate effectiveness of Spock & Lizard. Computer needs to be able to play. Tasks: Create new page for gamemode  Add Spock & Lizard buttons. Add JavaScript to handle Spock & Lizard effectiveness. |
| :---- |

## **Design Decisions**

### **Wireframes**

Desktop:  


Tablet:

 
Mobile Phone:  
 
Colour palette:   
Our colour palette aimed to remind users of the retro gaming aesthetic. The bright colours will keep the users engaged, and they are all cohesive so that it is pleasing to the ey  


Include wireframes for key sections of your website.  
Briefly describe the design choices, including layout, color schemes, and fonts.

**Guidance:** Start this section during Phase 1: Ideation & Initial Setup and update it throughout Phase 2 and Phase 3\. Include digital wireframes created in Phase 1\. Document the reasoning behind your layout choices, colour schemes, and font selections.

**Font Family:**

[https://fonts.google.com/specimen/Jersey+10?query=jersey](https://fonts.google.com/specimen/Jersey+10?query=jersey)

[https://fonts.google.com/specimen/Orbitron?preview.text=Rock%20paper%20scissors\&categoryFilters=Appearance:%2FTheme%2FTechno](https://fonts.google.com/specimen/Orbitron?preview.text=Rock%20paper%20scissors&categoryFilters=Appearance:%2FTheme%2FTechno)

### **Accessibility Considerations**

Discuss how accessibility guidelines were adhered to, including colour contrast and alt text for images.  
 **Guidance:** Outline how you've incorporated accessibility into your design, ensuring that your project adheres to guidelines such as WCAG.

## **AI Tools Usage**

### **DALL-E**

Describe how DALL-E was used for image generation, including examples of successes and challenges.  
 **Guidance:** Specifically mention how you used DALL-E for image generation and the impact this had on your design process.

## **Features Implementation**

### **Core Features (Must-Haves)**

* **Feature 1:** Description of the implemented feature.  
* **Feature 2:** Description of the implemented feature.

(Include all must-have features)  
 **Guidance:** Use this section as you complete Phase 2: Must User Stories Implementation & Testing. Document all the must-have features you implemented, explaining how they align with the user stories and acceptance criteria.

### **Advanced Features (Should-Haves)**

* **Feature 1:** Description of the implemented feature.  
* **Feature 2:** Description of the implemented feature.

(Include all should-have features)  
 **Guidance:** Include any advanced features you implemented during Phase 3: Should User Stories Implementation & Any Advanced Features. Explain how these features enhance user experience and their alignment with the acceptance criteria.

### **Optional Features (Could-Haves)**

* **Feature 1:** Description of the implemented feature (if any).  
* **Feature 2:** Description of the implemented feature (if any).

(Include any could-have features that were implemented or considered)  
 **Guidance:** If any could-have features were implemented, describe them here. This is an opportunity to showcase extra work done beyond the initial scope. But remember \- keep it simple\! Focus on the Must stories first. Could user story features are commonly earmarked for future project iterations.

## **AI Tools Usage**

### **GitHub Copilot**

Describe how GitHub Copilot assisted in coding, including any challenges or adjustments needed.  
 **Guidance:** Reflect on how GitHub Copilot assisted in coding, particularly any challenges or adjustments that were needed to align with project goals.

## **Testing and Validation**

### **Testing Results**

Summarize the results of testing across different devices and screen sizes.  
 Mention any issues found and how they were resolved.  
 **Guidance:** Summarize the results of your testing across various devices using tools like Chrome DevTools, as outlined in Phase 2\. Mention any issues found and how they were resolved.

### **Validation**

Discuss the validation process for HTML and CSS using W3C and Jigsaw validators.  
 Include the results of the validation process.  
 **Guidance:** Document your use of W3C and Jigsaw validators to ensure your HTML and CSS meet web standards. Include any errors or warnings encountered and how they were resolved.

## **AI Tools Usage**

### **GitHub Copilot**

Brief reflection on the effectiveness of using AI tools for debugging and validation.  
 **Guidance:** Reflect on how GitHub Copilot assisted with debugging and validation, particularly any issues it helped resolve.

## **Deployment**

### **Deployment Process**

Briefly describe the deployment process to GitHub Pages or another cloud platform.  
 Mention any specific challenges encountered during deployment.  
 **Guidance:** Describe the steps you took to deploy your website during Phase 4: Final Testing, Debugging & Deployment, including any challenges encountered.

## **AI Tools Usage**

### **Reflection**

Describe the role AI tools played in the deployment process, including any benefits or challenges.  
 **Guidance:** Reflect on how AI tools assisted with the deployment process, particularly how they streamlined any tasks or presented challenges.

## **Reflection on Development Process**

### **Successes**

Effective use of AI tools, including GitHub Copilot and DALL-E, and how they contributed to the development process.

### **Challenges**

Describe any challenges faced when integrating AI-generated content and how they were addressed.

### **Final Thoughts**

Provide any additional insights gained during the project and thoughts on the overall process.  
 **Guidance:** Begin drafting reflections during Phase 1 and update throughout the project. Finalize this section after Phase 4\. Highlight successes and challenges, particularly regarding the use of AI tools, and provide overall insights into the project.

## **Code Attribution**

Properly attribute any external code sources used in the project (excluding GitHub Copilot-generated code).  
 **Guidance:** Document any external code sources used throughout the entire project, especially during Phase 2 and Phase 3\. Exclude GitHub Copilot-generated code from attribution.

**Flaticon License (rock paper scissors logo)-** Rock paper scissors icons created by Freepik \- Flaticon

Free for personal and commercial purpose with attribution. [More info](https://www.flaticon.com/free-icon/rock-paper-scissors_6729598?term=rock+paper+scissors&page=1&position=11&origin=search#)

**OpenMoji  (Rock icon, paper icon, scissors icon,)** 

[**https://css-tricks.com/how-to-create-neon-text-with-css/**](https://css-tricks.com/how-to-create-neon-text-with-css/)

**(Neon glow effect and flicker animation walkthrough)**

## **Future Improvements**

Briefly discuss potential future improvements or features that could be added to the project.  
**Guidance:** Reflect on potential enhancements that could be made to the project after Phase 4: Final Testing, Debugging & Deployment. These could be Could user story features you didn’t have time to implement or improvements based on testing feedback.
