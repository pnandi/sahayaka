# Contributing to Sahayaka

Thank you for your interest in contributing to Sahayaka! This document provides guidelines and information for contributors.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/sahayaka.git
   cd sahayaka
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```

## 📋 Development Guidelines

### Code Style

- **TypeScript**: Use TypeScript for all new files
- **ESLint**: Follow the existing ESLint configuration
- **Prettier**: Code formatting is handled automatically
- **Naming**: Use descriptive, camelCase variable names
- **Components**: Use PascalCase for React components

### File Structure

- **Components**: Place reusable components in `/src/components/`
- **Pages**: Use Next.js App Router structure in `/src/app/`
- **Styles**: Use Tailwind CSS classes, avoid custom CSS when possible
- **Types**: Define TypeScript interfaces in component files or separate type files

### Commit Messages

Use conventional commit format:
```
type(scope): description

Examples:
feat(header): add mobile navigation menu
fix(contact): resolve form validation issue
docs(readme): update installation instructions
style(hero): improve responsive design
```

### Branch Naming

- `feature/description` - for new features
- `fix/description` - for bug fixes
- `docs/description` - for documentation updates
- `style/description` - for styling changes

## 🧪 Testing

Before submitting a pull request:

1. **Test locally**: Ensure the development server runs without errors
2. **Build test**: Run `npm run build` to ensure production build works
3. **Lint check**: Run `npm run lint` to check for code issues
4. **Cross-browser testing**: Test in Chrome, Firefox, and Safari
5. **Mobile testing**: Verify responsive design on mobile devices

## 📝 Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following the guidelines above
3. **Test thoroughly** on different devices and browsers
4. **Update documentation** if needed
5. **Submit a pull request** with:
   - Clear title and description
   - Screenshots for UI changes
   - List of changes made
   - Any breaking changes noted

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/UI improvement
- [ ] Performance improvement

## Screenshots
(If applicable)

## Testing
- [ ] Tested locally
- [ ] Tested on mobile
- [ ] Build passes
- [ ] Lint passes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)
```

## 🎨 Design Guidelines

### Colors
- Use the existing color palette defined in `tailwind.config.js`
- Primary: Indigo shades for healthcare theme
- Secondary: Purple gradients for accents
- Success: Green for positive actions
- Text: Gray scale for readability

### Typography
- Use Inter font family (already configured)
- Maintain consistent heading hierarchy
- Ensure good contrast ratios for accessibility

### Components
- Follow existing component patterns
- Use Tailwind utility classes
- Ensure responsive design
- Add hover states for interactive elements

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description**: Clear description of the issue
2. **Steps to reproduce**: Detailed steps to recreate the bug
3. **Expected behavior**: What should happen
4. **Actual behavior**: What actually happens
5. **Environment**: Browser, OS, device type
6. **Screenshots**: If applicable

## 💡 Feature Requests

For new features:

1. **Use case**: Explain why this feature is needed
2. **Description**: Detailed description of the feature
3. **Mockups**: Visual mockups if applicable
4. **Implementation**: Suggestions for implementation

## 📞 Questions and Support

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Email**: contact@sahayaka.ai for private matters

## 📄 License

By contributing to Sahayaka, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to better healthcare technology! 🏥❤️
