# Generate Cursor IDE Accessibility Rules - Custom Framework Prompt

Use this prompt with Claude to generate comprehensive accessibility rules tailored to your specific tech stack:

---

**PROMPT:**

You are an expert accessibility consultant and Cursor IDE rule creator. Generate comprehensive, framework-specific accessibility rules for Cursor IDE that ensure all generated interfaces meet WCAG 2.1 AA standards.

## My Tech Stack Details:

**Primary Framework:** [e.g., React 18 with TypeScript, Vue 3 Composition API, Angular 17, Svelte 5, etc.]

**Build Tool:** [e.g., Vite, Next.js 14, Nuxt 3, SvelteKit, Angular CLI, etc.]

**UI Library/Framework:** [e.g., Chakra UI, Material-UI, Tailwind CSS + Headless UI, Vuetify, Angular Material, Bootstrap 5, etc.]

**Styling Solution:** [e.g., Tailwind CSS, Styled Components, Emotion, CSS Modules, SCSS, etc.]

**State Management:** [e.g., Zustand, Redux Toolkit, Pinia, NgRx, Context API, etc.]

**Form Library:** [e.g., React Hook Form, Formik, VeeValidate, Angular Reactive Forms, etc.]

**Testing Framework:** [e.g., Vitest + Testing Library, Jest, Playwright, Cypress, etc.]

**Additional Tools:** [e.g., Storybook, TypeScript, ESLint, etc.]

## Requirements:

1. **Create a `.cursor/rules/accessibility.mdc` file** following modern Cursor rules format with proper frontmatter
2. **Include framework-specific code examples** using my exact tech stack
3. **Prioritize my UI library's accessible components** when available
4. **Provide complete, copy-paste ready implementations** for common patterns
5. **Include testing examples** using my testing framework
6. **Follow WCAG 2.1 AA standards** with specific implementation guidance
7. **Address common accessibility pitfalls** specific to my framework

## Structure the rules with these sections:

### Critical Instructions
- Framework-specific warnings and requirements
- DO/DON'T code patterns with ✅/❌ indicators

### Semantic HTML & Framework Integration
- How to use semantic HTML within my framework's component system
- Component composition patterns for accessibility

### ARIA Usage Guidelines
- When to use ARIA vs framework built-ins
- Framework-specific ARIA implementation patterns

### UI Library Integration
- Specific guidance for my UI library's accessible components
- How to enhance or customize library components while maintaining accessibility
- Alternative approaches if library components lack accessibility features

### Form Accessibility
- Complete form implementation using my form library
- Validation and error handling patterns
- Integration with my state management solution

### Component Patterns
- Accessible implementations for common components (modals, dropdowns, accordions, etc.)
- Using my framework's specific patterns and lifecycle methods
- Focus management and keyboard navigation

### Styling and Visual Design
- How to implement WCAG color contrast with my styling solution
- Responsive design considerations
- Dark mode and user preference support

### Testing Requirements
- Automated accessibility testing setup for my testing framework
- Integration with CI/CD pipeline
- Manual testing checklists

### Framework-Specific Best Practices
- Performance considerations for accessibility
- SSR/SSG accessibility considerations if applicable
- Build-time accessibility checks

### Common Mistakes to Avoid
- Framework-specific accessibility anti-patterns
- Performance vs accessibility trade-offs
- Migration strategies from inaccessible code

## Additional Context:

**Project Type:** [e.g., E-commerce site, Dashboard/Admin panel, Marketing website, Mobile app, etc.]

**Target Users:** [e.g., General public, Internal business users, Specific demographics, etc.]

**Compliance Requirements:** [e.g., Section 508, ADA compliance, European Accessibility Act, etc.]

**Existing Accessibility Tools:** [e.g., axe-core, Pa11y, Lighthouse CI, etc.]

## Output Requirements:

- Generate a complete `.mdc` file ready to save in `.cursor/rules/`
- Include specific import statements and component examples for my tech stack
- Provide at least 10 complete, working code examples
- Include both TypeScript and JavaScript examples if applicable
- Add specific file glob patterns for my project structure
- Include framework-specific performance and accessibility optimization tips
- Provide migration guidance for existing codebases

Make the rules authoritative, specific, and immediately actionable for Cursor's AI when generating code in my tech stack.

---

**Instructions for Use:**

1. Fill in your specific tech stack details in the bracketed sections
2. Add any additional context about your project requirements
3. Send this complete prompt to Claude
4. Save the generated output as `.cursor/rules/accessibility.mdc` in your project
5. Verify the rules work by asking Cursor to generate accessible components

**Example Tech Stack Input:**

```
Primary Framework: React 18 with TypeScript
Build Tool: Vite with SWC
UI Library: Mantine 7.x
Styling Solution: Mantine's emotion-based system + CSS Modules for custom styles
State Management: Zustand
Form Library: React Hook Form with Zod validation
Testing Framework: Vitest + React Testing Library + Playwright
Additional Tools: Storybook 8, TypeScript 5.3, ESLint with a11y plugin
Project Type: B2B SaaS dashboard
Target Users: Business professionals with varying accessibility needs
Compliance Requirements: WCAG 2.1 AA for enterprise clients
```

This prompt will generate accessibility rules perfectly tailored to your specific setup while maintaining the same comprehensive coverage and quality as the generic version.