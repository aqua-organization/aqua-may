const generator = {
  description: "Create a new React component inside packages/ui",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Component name?",
      validate: (value: string) => {
        if (!value?.trim()) {
          return "Please provide a component name";
        }

        return true;
      },
    },
  ],
  actions: [
    {
      type: "add",
      path: "packages/ui/src/{{ dashCase name }}.tsx",
      templateFile: "turbo/generators/react-component/templates/component.tsx.hbs",
      abortOnFail: true,
    },
  ],
} as const;

export default function reactComponentGenerator(plop: any) {
  plop.setGenerator("react-component", generator);
}
